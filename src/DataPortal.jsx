import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  Database,
  FileText,
  Funnel,
  MagnifyingGlass,
  ShieldCheck,
} from "@phosphor-icons/react";
import {
  collections,
  protectedAreaProfile,
  snapshot,
} from "./research-data.js";
import "./data-portal.css";

const collectionOrder = [
  "sources",
  "datasets",
  "species",
  "areas",
  "wetlands",
  "indicators",
  "glossary",
  "quality",
  "pilots",
  "backlog",
];

const fieldLabels = {
  id: "شناسه",
  name: "نام",
  title: "عنوان",
  topic: "موضوع",
  type: "نوع",
  confidence: "سطح اطمینان",
  use: "کاربرد",
  note: "یادداشت",
  url: "منبع اصلی",
  accessed: "تاریخ دسترسی",
  fa: "نام فارسی",
  scientific: "نام علمی",
  group: "گروه",
  status: "وضعیت",
  statusSource: "منبع وضعیت",
  recordType: "نوع رکورد",
  sensitivity: "حساسیت مکانی",
  validation: "وضعیت اعتبارسنجی",
  designation: "Designation",
  region: "استان/محدوده",
  areaHa: "مساحت (هکتار)",
  registered: "تاریخ/سال ثبت",
  externalId: "شناسه خارجی",
  reference: "مرجع",
  gis: "وضعیت مرز GIS",
  nationalMatch: "تطبیق ملی",
  intervention: "نوع مداخله",
  area: "محدوده/حوزه",
  baseline: "Baseline",
  monitoring: "برنامه پایش",
  dimension: "بُعد",
  definition: "تعریف عملیاتی",
  unit: "واحد",
  method: "روش گردآوری",
  frequency: "تناوب",
  uncertainty: "عدم قطعیت/کیفیت",
  source: "منبع/مرجع",
  credit: "قابل استفاده برای credit؟",
  term: "اصطلاح",
  not: "نباید با این مفهوم اشتباه شود",
  scope: "دامنه",
  publisher: "ناشر",
  version: "نسخه",
  license: "مجوز",
  next: "اقدام بعدی",
  publicationDate: "تاریخ انتشار",
  recordCount: "تعداد رکورد",
  persistentId: "شناسه پایدار",
  importStatus: "وضعیت واردسازی",
  rule: "قانون",
  requirement: "الزام",
  reason: "دلیل",
  failure: "نمونه شکست",
  official: "نام رسمی",
  date: "تاریخ ثبت",
  siteNo: "شماره سایت",
  output: "خروجی مورد انتظار",
  priority: "اولویت",
  risk: "ریسک/نکته",
  task: "کار تحقیقاتی",
};

const collectionIcons = {
  sources: "SRC",
  datasets: "DATA",
  species: "SPEC",
  areas: "AREA",
  wetlands: "RSIS",
  indicators: "IND",
  glossary: "TERM",
  quality: "DQ",
  pilots: "PILOT",
  backlog: "R&D",
};

function normalize(value = "") {
  return String(value)
    .toLowerCase()
    .replaceAll("ي", "ی")
    .replaceAll("ك", "ک")
    .replace(/[\u064B-\u065F]/g, "")
    .trim();
}

function searchableText(record) {
  return normalize(
    Object.entries(record)
      .filter(([key]) => key !== "url")
      .map(([, value]) => value ?? "")
      .join(" "),
  );
}

function titleFor(collectionKey, item) {
  if (collectionKey === "sources") return item.topic || item.name;
  if (collectionKey === "species") return item.fa || item.scientific;
  if (collectionKey === "areas") return item.name;
  if (collectionKey === "wetlands") return item.fa || item.official;
  if (collectionKey === "indicators") return item.name;
  if (collectionKey === "glossary") return item.fa || item.term;
  if (collectionKey === "quality") return item.rule;
  if (collectionKey === "pilots") return item.title;
  if (collectionKey === "backlog") return item.task;
  return item.title || item.name || item.id;
}

function subtitleFor(collectionKey, item) {
  if (collectionKey === "sources") return item.name;
  if (collectionKey === "species") return item.scientific;
  if (collectionKey === "wetlands") return item.official;
  if (collectionKey === "glossary") return item.term;
  if (collectionKey === "datasets") return `${item.publisher} · ${item.version || ""}`;
  if (collectionKey === "indicators") return `${item.dimension} · ${item.unit}`;
  if (collectionKey === "quality") return item.requirement;
  if (collectionKey === "pilots") return `${item.status} · سطح ${item.validation}`;
  if (collectionKey === "backlog") return `${item.area} · ${item.priority}`;
  return item.designation || item.type || item.scope || "";
}

function pathParts() {
  return window.location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
}

function dataHref(collectionKey, id) {
  return id ? `/data/${collectionKey}/${encodeURIComponent(id)}` : `/data/${collectionKey}`;
}

function PortalHeader() {
  return (
    <header className="data-header">
      <a className="data-brand" href="/" aria-label="بازگشت به اعتبار تنوع زیستی ایران">
        <span className="data-brand-mark"><Database weight="duotone" /></span>
        <span>
          <strong>داده‌های تنوع زیستی ایران</strong>
          <small>Research data portal · v{snapshot.sourceVersion}</small>
        </span>
      </a>
      <nav aria-label="راهبری داده">
        <a href="/data">مرور داده</a>
        <a href="/data/sources">منابع</a>
        <a href="/data/glossary">واژه‌نامه</a>
        <a href="/data/quality">کیفیت داده</a>
      </nav>
      <a className="data-home-link" href="/">سایت اصلی <ArrowLeft /></a>
    </header>
  );
}

function DataNotice() {
  return (
    <div className="data-notice">
      <ShieldCheck weight="duotone" />
      <p>
        این پرتال یک snapshot عمومی از داده‌های پژوهشی است. رکوردهای نامزد،
        داده پایه و شاخص‌ها به معنای تأیید پروژه، نتیجه حفاظتی یا صدور اعتبار نیستند.
      </p>
    </div>
  );
}

function Overview() {
  const [query, setQuery] = useState("");
  const normalized = normalize(query);

  const results = useMemo(() => {
    if (!normalized) return [];
    return collectionOrder.flatMap((key) =>
      collections[key].items
        .filter((item) => searchableText(item).includes(normalized))
        .map((item) => ({ key, item })),
    );
  }, [normalized]);

  useEffect(() => {
    document.title = "پرتال داده‌های تنوع زیستی ایران | جست‌وجو و مرور";
  }, []);

  return (
    <>
      <section className="data-hero">
        <span className="data-kicker">نسخه عمومی داده پایه · {snapshot.sourceVersion}</span>
        <h1>داده‌ها را ببینید، جست‌وجو کنید و تا منبع دنبال کنید.</h1>
        <p>{snapshot.description}</p>
        <label className="global-search">
          <MagnifyingGlass />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="جست‌وجو در منابع، گونه‌ها، مناطق، تالاب‌ها، شاخص‌ها و واژه‌نامه…"
            aria-label="جست‌وجوی همه داده‌ها"
          />
        </label>
      </section>

      <DataNotice />

      {normalized ? (
        <section className="data-section">
          <div className="data-section-head">
            <div>
              <span>نتایج جست‌وجو</span>
              <h2>{results.length.toLocaleString("fa-IR")} نتیجه برای «{query}»</h2>
            </div>
          </div>
          <div className="record-grid">
            {results.map(({ key, item }) => (
              <RecordCard key={`${key}-${item.id}`} collectionKey={key} item={item} />
            ))}
            {results.length === 0 && <EmptyState />}
          </div>
        </section>
      ) : (
        <>
          <section className="data-section">
            <div className="data-section-head">
              <div>
                <span>مجموعه‌ها</span>
                <h2>ساختار داده عمومی</h2>
              </div>
              <small>{collectionOrder.reduce((sum, key) => sum + collections[key].items.length, 0).toLocaleString("fa-IR")} رکورد قابل مرور</small>
            </div>
            <div className="collection-grid">
              {collectionOrder.map((key) => (
                <a className="collection-card" href={dataHref(key)} key={key}>
                  <span className="collection-code">{collectionIcons[key]}</span>
                  <strong>{collections[key].title}</strong>
                  <p>{collections[key].description}</p>
                  <footer>
                    <span>{collections[key].items.length.toLocaleString("fa-IR")} رکورد</span>
                    <ArrowLeft />
                  </footer>
                </a>
              ))}
            </div>
          </section>

          <section className="data-section profile-section">
            <div className="data-section-head">
              <div>
                <span>نمای آماری مستقل</span>
                <h2>پروفایل مناطق حفاظت‌شده ایران</h2>
              </div>
              <a href={protectedAreaProfile.url} target="_blank" rel="noreferrer">منبع <ArrowUpLeft /></a>
            </div>
            <div className="profile-stats">
              <span><small>نسخه</small><strong>{protectedAreaProfile.version}</strong></span>
              <span><small>مناطق حفاظت‌شده</small><strong>{protectedAreaProfile.total}</strong></span>
              <span><small>دارای ارزیابی اثربخشی مدیریت</small><strong>{protectedAreaProfile.managementEffectiveness}</strong></span>
              <span><small>OECM</small><strong>{protectedAreaProfile.oecms}</strong></span>
            </div>
            <p className="profile-note">{protectedAreaProfile.note}</p>
          </section>
        </>
      )}
    </>
  );
}

function RecordCard({ collectionKey, item }) {
  return (
    <a className="record-card" href={dataHref(collectionKey, item.id)}>
      <div className="record-topline">
        <code>{item.id}</code>
        <span>{collections[collectionKey].title}</span>
      </div>
      <h3>{titleFor(collectionKey, item)}</h3>
      <p>{subtitleFor(collectionKey, item)}</p>
      <footer>
        <span>مشاهده رکورد</span>
        <ArrowLeft />
      </footer>
    </a>
  );
}

function CollectionPage({ collectionKey }) {
  const collection = collections[collectionKey];
  const [query, setQuery] = useState("");
  const normalized = normalize(query);
  const items = useMemo(
    () => collection.items.filter((item) => !normalized || searchableText(item).includes(normalized)),
    [collection.items, normalized],
  );

  useEffect(() => {
    document.title = `${collection.title} | داده‌های تنوع زیستی ایران`;
  }, [collection.title]);

  return (
    <>
      <section className="collection-hero">
        <a className="crumb" href="/data"><ArrowRight /> همه داده‌ها</a>
        <span className="collection-code">{collectionIcons[collectionKey]}</span>
        <h1>{collection.title}</h1>
        <p>{collection.description}</p>
        <div className="collection-meta">
          <span>{collection.items.length.toLocaleString("fa-IR")} رکورد</span>
          <span>snapshot {snapshot.sourceVersion}</span>
        </div>
      </section>
      <DataNotice />
      <section className="data-section">
        <div className="collection-toolbar">
          <label>
            <MagnifyingGlass />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`جست‌وجو در ${collection.title}…`}
            />
          </label>
          <span><Funnel /> {items.length.toLocaleString("fa-IR")} نتیجه</span>
        </div>
        <div className="record-grid">
          {items.map((item) => <RecordCard key={item.id} collectionKey={collectionKey} item={item} />)}
          {items.length === 0 && <EmptyState />}
        </div>
      </section>
    </>
  );
}

function RecordPage({ collectionKey, recordId }) {
  const collection = collections[collectionKey];
  const item = collection.items.find((candidate) => candidate.id === recordId);

  useEffect(() => {
    document.title = item
      ? `${titleFor(collectionKey, item)} | ${collection.title}`
      : "رکورد پیدا نشد | داده‌های تنوع زیستی ایران";
  }, [collection.title, collectionKey, item]);

  if (!item) return <NotFound />;

  const fields = Object.entries(item).filter(([, value]) => value !== null && value !== undefined && value !== "");

  return (
    <>
      <section className="record-hero">
        <a className="crumb" href={dataHref(collectionKey)}><ArrowRight /> {collection.title}</a>
        <div className="record-topline">
          <code>{item.id}</code>
          <span>snapshot {snapshot.sourceVersion}</span>
        </div>
        <h1>{titleFor(collectionKey, item)}</h1>
        <p>{subtitleFor(collectionKey, item)}</p>
      </section>
      <DataNotice />
      <section className="record-detail">
        <div className="detail-grid">
          {fields.map(([key, value]) => {
            if (key === "url") return null;
            return (
              <div className={`detail-field ${["note", "definition", "requirement", "task", "risk"].includes(key) ? "detail-field--wide" : ""}`} key={key}>
                <small>{fieldLabels[key] || key}</small>
                <strong dir={["scientific", "term", "official", "persistentId"].includes(key) ? "ltr" : undefined}>{String(value)}</strong>
              </div>
            );
          })}
        </div>
        {item.url && (
          <a className="source-link" href={item.url} target="_blank" rel="noreferrer">
            <FileText /> مشاهده منبع اصلی <ArrowUpLeft />
          </a>
        )}
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="empty-state">
      <MagnifyingGlass />
      <strong>رکوردی پیدا نشد</strong>
      <p>عبارت جست‌وجو را کوتاه‌تر یا عمومی‌تر کنید.</p>
    </div>
  );
}

function NotFound() {
  return (
    <section className="data-not-found">
      <Database />
      <h1>این رکورد در snapshot عمومی وجود ندارد.</h1>
      <p>ممکن است مسیر اشتباه باشد یا رکورد هنوز برای انتشار عمومی آماده نشده باشد.</p>
      <a className="source-link" href="/data">بازگشت به پرتال داده <ArrowLeft /></a>
    </section>
  );
}

export function DataPortal() {
  const parts = pathParts();
  const collectionKey = parts[1];
  const recordId = parts[2] ? decodeURIComponent(parts[2]) : null;
  const isKnownCollection = collectionKey && collections[collectionKey];

  return (
    <main className="data-portal" dir="rtl">
      <PortalHeader />
      {parts.length === 1 && <Overview />}
      {parts.length === 2 && isKnownCollection && <CollectionPage collectionKey={collectionKey} />}
      {parts.length >= 3 && isKnownCollection && <RecordPage collectionKey={collectionKey} recordId={recordId} />}
      {parts.length > 1 && !isKnownCollection && <NotFound />}
      <footer className="data-footer">
        <div>
          <strong>داده‌های تنوع زیستی ایران</strong>
          <p>snapshot عمومی پژوهشی؛ قابل ردیابی تا منبع و با تفکیک روشن میان داده، ادعا و اعتبار.</p>
        </div>
        <span>v{snapshot.sourceVersion} · {snapshot.preparedAt}</span>
      </footer>
    </main>
  );
}
