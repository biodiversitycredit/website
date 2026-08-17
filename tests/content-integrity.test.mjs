import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const app = await readFile(new URL("../src/App.jsx", import.meta.url), "utf8");
const portal = await readFile(new URL("../src/DataPortal.jsx", import.meta.url), "utf8");
const data = await readFile(new URL("../src/research-data.js", import.meta.url), "utf8");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const publicCode = [app, portal, data, html].join("\n");

test("public copy does not regress to unsupported registry or issuance claims", () => {
  const forbidden = [
    "سامانه ملی ثبت و اعتبارسنجی",
    "ثبت پروژه جدید",
    "ثبت و ارزیابی شده",
    "اعتبار قابل صدور",
    "صدور اعتبار شفاف",
    "بازار و شفافیت",
    "<small>پروژه ثبت‌شده</small>",
    "<small>اعتبار صادرشده</small>",
    "۱۲٬۴۵۰",
    "۷٬۸۰۰",
    "۱۵٬۷۸۰",
    "ISO 14064-2",
  ];

  for (const phrase of forbidden) {
    assert.equal(
      publicCode.includes(phrase),
      false,
      `Unsupported public claim or prototype value found: ${phrase}`,
    );
  }
});

test("public copy clearly states the current research stage", () => {
  assert.match(app, /تحقیق و توسعه چارچوب/);
  assert.match(app, /هیچ اعتبار تنوع زیستی صادر یا معامله نمی‌شود/);
  assert.match(app, /Initiative → Methodology → Protocol → Pilot → Evidence → Credit/);
  assert.match(portal, /snapshot عمومی از داده‌های پژوهشی/);
});

test("the public product does not expose the Google Sheet or private collaborators", () => {
  assert.doesNotMatch(publicCode, /docs\.google\.com\/spreadsheets/i);

  const unpublishedNames = [
    "جاوید مومنی",
    "نکیسا خدیشی",
    "علی رنجبران",
    "زیبان",
    "پیام ما",
  ];
  for (const name of unpublishedNames) {
    assert.equal(publicCode.includes(name), false, `Unapproved public name found: ${name}`);
  }
});

test("research candidates remain explicitly distinct from registered projects", () => {
  assert.match(data, /این ردیف پروژه واقعی ثبت‌شده نیست؛ فقط نامزد طراحی پایلوت است/);
  assert.match(data, /نامزد تحقیق/);
  assert.match(portal, /به معنای تأیید پروژه، نتیجه حفاظتی یا صدور اعتبار نیستند/);
});

test("document metadata is Persian and describes the initiative accurately", () => {
  assert.match(html, /<html lang="fa" dir="rtl">/);
  assert.match(html, /ابتکاری پژوهشی و داده‌محور/);
  assert.doesNotMatch(html, /<title>Prototype<\/title>/);
});
