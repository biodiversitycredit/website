import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bird,
  CheckCircle,
  ClipboardText,
  Database,
  Leaf,
  List as Menu,
  SealCheck,
  ShieldCheck,
  Users,
  X,
} from "@phosphor-icons/react";
import "@fontsource-variable/estedad";
import "@fontsource-variable/vazirmatn";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/14xIgT9zpfzvkhxlpKEV1wT6JuxhxuUxMIbaQR6Bp3d0/edit";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function Brand({ compact = false }) {
  return (
    <a
      className={`brand ${compact ? "brand--compact" : ""}`}
      href="#top"
      aria-label="اعتبار تنوع زیستی ایران"
    >
      <img src={asset("brand-mark.png")} alt="نشان اعتبار تنوع زیستی ایران" />
      <span>
        <strong>اعتبار تنوع زیستی ایران</strong>
        {!compact && <small>Biodiversity Credit Initiative</small>}
      </span>
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top" dir="rtl">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="راهبری اصلی">
          <a href="#status">وضعیت فعلی</a>
          <a href="#roadmap">نقشه راه</a>
          <a href="#data">داده پایه</a>
          <a href="#integrity">اصول یکپارچگی</a>
          <a href="#knowledge">دانش و منابع</a>
        </nav>
        <div className="header-actions">
          <a className="login" href="#status">
            مرحله پژوهش
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="باز کردن منو"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="راهبری موبایل">
            <a href="#status" onClick={closeMenu}>وضعیت فعلی</a>
            <a href="#roadmap" onClick={closeMenu}>نقشه راه</a>
            <a href="#data" onClick={closeMenu}>داده پایه</a>
            <a href="#integrity" onClick={closeMenu}>اصول یکپارچگی</a>
            <a href="#knowledge" onClick={closeMenu}>دانش و منابع</a>
          </nav>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <Bird weight="duotone" />
            ابتکار مستقل پژوهشی و داده‌محور
          </span>
          <h1>
            از مفهوم تنوع زیستی تا
            <br />
            <em>شواهد قابل اتکا</em>
          </h1>
          <p>
            «اعتبار تنوع زیستی ایران» در حال ساخت بنیان دانشی، روش‌شناسی،
            داده و قواعد شفافیتی است که بتواند در آینده از پایلوت‌های
            سنجش‌پذیر و تأمین مالی مسئولانه حفاظت پشتیبانی کند.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#roadmap">
              مشاهده نقشه راه <ArrowLeft />
            </a>
            <a className="button button--outline" href="#knowledge">
              داده و منابع <Database />
            </a>
          </div>
          <div className="trust-line">
            <SealCheck weight="fill" />
            <span>
              در این مرحله هیچ اعتبار تنوع زیستی صادر یا معامله نمی‌شود.
            </span>
          </div>
        </div>
        <div className="hero-art" aria-label="تصویرسازی پرندگان بومی ایران">
          <img
            src={asset("birds-arch.png")}
            alt="تصویرسازی پرندگان بومی ایران در قاب معماری ایرانی"
          />
        </div>
      </section>

      <section className="standards-strip" id="status" aria-label="وضعیت فعلی ابتکار">
        <div className="standards-copy">
          <span>وضعیت انتشار عمومی</span>
          <strong>تحقیق و توسعه چارچوب</strong>
        </div>
        <div className="standard">
          <strong>Methodology</strong>
          <small>Draft</small>
        </div>
        <div className="standard">
          <strong>Credits</strong>
          <small>Not issued</small>
        </div>
        <div className="standard">
          <strong>Market</strong>
          <small>Not active</small>
        </div>
        <a className="data-link" href={SHEET_URL} target="_blank" rel="noreferrer">
          <Database /> پایگاه داده تحقیقاتی v0.3 <ArrowUpLeft />
        </a>
      </section>

      <section className="process" id="roadmap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">مسیر شکل‌گیری</span>
            <h2>اول چارچوب، بعد پایلوت؛ اعتبار آخر مسیر است.</h2>
          </div>
          <p dir="ltr">
            Initiative → Methodology → Protocol → Pilot → Evidence → Credit
          </p>
        </div>
        <div className="process-grid">
          <article>
            <ClipboardText />
            <span>۰۱</span>
            <h3>ابتکار و روش‌شناسی</h3>
            <p>
              تعریف دقیق مفهوم، دامنه، واژگان، معیارها و حداقل الزامات علمی.
            </p>
          </article>
          <article>
            <ShieldCheck />
            <span>۰۲</span>
            <h3>پروتکل و قواعد</h3>
            <p>
              طراحی قواعد شواهد، تعارض منافع، شفافیت، ادعاها و حفاظت از داده حساس.
            </p>
          </article>
          <article>
            <Leaf />
            <span>۰۳</span>
            <h3>پایلوت و پایش</h3>
            <p>
              انتخاب پایلوت محدود، ساخت baseline و برنامه پایش متناسب با زیست‌بوم.
            </p>
          </article>
          <article>
            <CheckCircle />
            <span>۰۴</span>
            <h3>شواهد تا اعتبار</h3>
            <p>
              فقط پس از داده، ارزیابی و شواهد کافی می‌توان درباره اعتبار قابل اتکا صحبت کرد.
            </p>
          </article>
        </div>
      </section>

      <section className="projects" id="data">
        <div className="section-heading">
          <div>
            <span className="eyebrow">داده پایه تحقیقاتی</span>
            <h2>داده را از ادعا جدا نگه می‌داریم.</h2>
          </div>
          <p>
            اعداد این بخش آمار پایگاه داده و منابع مرجع هستند؛ نه تعداد پروژه
            تأییدشده، نه نتیجه حفاظتی و نه اعتبار صادرشده.
          </p>
        </div>

        <article className="featured-project">
          <img
            src={asset("miankaleh-wetland.png")}
            alt="نمایی از زیست‌بوم تالابی ایران"
          />
          <div className="project-body">
            <span className="verified">
              <Database weight="fill" /> پایگاه داده پایه v0.3
            </span>
            <h3>زیرساخت داده قبل از زیرساخت بازار</h3>
            <p className="location">
              منابع، مناطق، گونه‌ها، شاخص‌ها، شواهد و قواعد کیفیت داده
            </p>
            <div className="project-metrics">
              <span>
                <small>سایت‌های رامسر در پروفایل کشور</small>
                <strong>۲۷</strong>
              </span>
              <span>
                <small>رکورد با جزئیات تأییدشده</small>
                <strong>۱۷</strong>
              </span>
              <span>
                <small>مناطق در پروفایل Protected Planet</small>
                <strong>۱۴۱</strong>
              </span>
            </div>
            <a
              className="text-button"
              href={SHEET_URL}
              target="_blank"
              rel="noreferrer"
            >
              مشاهده داده و منابع <ArrowUpLeft />
            </a>
          </div>
        </article>

        <div className="registry-stats" aria-label="آمار داده پایه">
          <span>
            <small>گونه در Bird Checklist ایران</small>
            <strong>۵۸۱</strong>
          </span>
          <span>
            <small>دیتاست گونه‌ای اولویت‌دار</small>
            <strong>۵</strong>
          </span>
          <span>
            <small>قاعده کیفیت داده</small>
            <strong>۸</strong>
          </span>
          <span>
            <small>نامزد تحقیق برای پایلوت</small>
            <strong>۲</strong>
          </span>
        </div>
      </section>

      <section className="process" id="integrity">
        <div className="section-heading">
          <div>
            <span className="eyebrow">یکپارچگی و شفافیت</span>
            <h2>هر ادعا باید قابل ردیابی و قابل بررسی باشد.</h2>
          </div>
          <p>
            اعتبار علمی پروژه از تفکیک دقیق داده، مشاهده، ادعا، ارزیابی و
            تصمیم نهایی شروع می‌شود.
          </p>
        </div>
        <div className="process-grid">
          <article>
            <Database />
            <span>۰۱</span>
            <h3>منبع‌محوری</h3>
            <p>
              هر داده عمومی باید منبع، نسخه، تاریخ دسترسی و وضعیت مجوز مشخص داشته باشد.
            </p>
          </article>
          <article>
            <ShieldCheck />
            <span>۰۲</span>
            <h3>تفکیک وضعیت‌ها</h3>
            <p>
              ثبت، validation، verification، issuance و retirement یک چیز نیستند.
            </p>
          </article>
          <article>
            <ClipboardText />
            <span>۰۳</span>
            <h3>اعلام عدم قطعیت</h3>
            <p>
              محدودیت روش، کیفیت داده و سطح اطمینان باید همراه نتیجه منتشر شود.
            </p>
          </article>
          <article>
            <Users />
            <span>۰۴</span>
            <h3>حفاظت از داده حساس</h3>
            <p>
              مختصات و اطلاعاتی که می‌تواند برای گونه یا زیستگاه خطر ایجاد کند عمومی نمی‌شود.
            </p>
          </article>
        </div>
      </section>

      <section className="knowledge" id="knowledge">
        <Bird weight="duotone" />
        <div>
          <span className="eyebrow">دانش و منابع</span>
          <h2>روش روشن، داده مستند و ادعای محدود به شواهد.</h2>
        </div>
        <a
          className="button button--light"
          href={SHEET_URL}
          target="_blank"
          rel="noreferrer"
        >
          مشاهده پایگاه تحقیقاتی <ArrowUpLeft />
        </a>
      </section>

      <footer id="about">
        <Brand compact />
        <p>
          یک ابتکار پژوهشی برای توسعه دانش، داده، روش‌شناسی و زیرساخت شفاف
          مرتبط با تنوع زیستی ایران.
        </p>
        <small>
          مرحله تحقیق و توسعه · بدون صدور یا معامله اعتبار · داده پایه v0.3
        </small>
      </footer>
    </main>
  );
}
