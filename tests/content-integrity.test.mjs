import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("public copy does not regress to unsupported registry or issuance claims", () => {
  const forbidden = [
    "سامانه ملی ثبت و اعتبارسنجی",
    "ثبت پروژه جدید",
    "ثبت و ارزیابی شده",
    "اعتبار قابل صدور",
    "اعتبار صادرشده",
    "صدور اعتبار شفاف",
    "بازار و شفافیت",
    "۱۲٬۴۵۰",
    "۷٬۸۰۰",
    "۱۵٬۷۸۰",
    "BBOP",
    "ISO 14064-2",
  ];

  for (const phrase of forbidden) {
    assert.equal(
      app.includes(phrase),
      false,
      `Unsupported public claim or prototype value found: ${phrase}`,
    );
  }
});

test("public copy clearly states the current research stage", () => {
  assert.match(app, /تحقیق و توسعه چارچوب/);
  assert.match(app, /هیچ اعتبار تنوع زیستی صادر یا معامله نمی‌شود/);
  assert.match(app, /Initiative → Methodology → Protocol → Pilot → Evidence → Credit/);
});

test("document metadata is Persian and describes the initiative accurately", () => {
  assert.match(html, /<html lang="fa" dir="rtl">/);
  assert.match(html, /ابتکاری پژوهشی و داده‌محور/);
  assert.doesNotMatch(html, /<title>Prototype<\/title>/);
});
