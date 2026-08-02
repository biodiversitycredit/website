import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Bird,
  CheckCircle,
  ClipboardText,
  Database,
  Globe,
  Leaf,
  MapPin,
  List as Menu,
  Plus,
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

const projects = [
  {
    title: "احیای تالاب میانکاله",
    place: "مازندران، بهشهر",
    metric: "۱۶۸ گونه هدف",
    credit: "۱۲٬۴۵۰ واحد اعتبار",
    progress: "۲۶٪ پیشرفت",
    image: asset("miankaleh-wetland.png"),
  },
  {
    title: "حفاظت از زیستگاه یوز آسیایی",
    place: "سمنان، توران",
    metric: "۸ کریدور زیستی",
    credit: "۷٬۸۰۰ واحد اعتبار",
    progress: "۴۱٪ پیشرفت",
    image: asset("birds-arch.png"),
  },
];

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="اعتبار تنوع زیستی ایران">
      <img src={asset("brand-mark.png")} alt="نشان مجمع پرندگان" />
      <span>
        <strong>اعتبار تنوع زیستی ایران</strong>
        {!compact && <small>Biodiversity Credit Registry</small>}
      </span>
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [formOpen]);

  function submitProject(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main id="top" dir="rtl">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="راهبری اصلی">
          <a href="#projects">پروژه‌ها</a>
          <a href="#process">فرایند اعتبار</a>
          <a href="#standards">استانداردها</a>
          <a href="#knowledge">دانش و منابع</a>
          <a href="#about">درباره ما</a>
        </nav>
        <div className="header-actions">
          <button className="language" type="button"><Globe /> EN</button>
          <button className="login" type="button">ورود</button>
          <button className="menu-button" type="button" aria-label="باز کردن منو" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="راهبری موبایل">
            <a href="#projects" onClick={() => setMenuOpen(false)}>پروژه‌ها</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>فرایند اعتبار</a>
            <a href="#standards" onClick={() => setMenuOpen(false)}>استانداردها</a>
            <a href="#knowledge" onClick={() => setMenuOpen(false)}>دانش و منابع</a>
          </nav>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Bird weight="duotone" /> سامانه ملی ثبت و اعتبارسنجی پروژه‌های تنوع زیستی</span>
          <h1>هر گونه، بخشی از<br /><em>یک آینده مشترک</em></h1>
          <p>پل ارتباطی حفاظت مؤثر با سرمایه‌گذاری مسئولانه؛ از ثبت پروژه و راستی‌آزمایی مستقل تا صدور اعتبار شفاف و قابل رهگیری.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">کشف پروژه‌ها <ArrowLeft /></a>
            <button className="button button--outline" type="button" onClick={() => { setFormOpen(true); setSubmitted(false); }}>
              ثبت پروژه جدید <Plus />
            </button>
          </div>
          <div className="trust-line"><SealCheck weight="fill" /><span>داده‌های مستند، ارزیابی مستقل و گزارش‌پذیری عمومی</span></div>
        </div>
        <div className="hero-art" aria-label="مجمع پرندگان در قاب معماری ایرانی">
          <img src={asset("birds-arch.png")} alt="نقش عمودی پرندگان بومی ایران در قاب آجری و فیروزه‌ای" />
        </div>
      </section>

      <section className="standards-strip" id="standards" aria-label="استانداردهای مرجع">
        <div className="standards-copy"><span>همسو با معتبرترین چارچوب‌های جهانی</span><strong>حفاظت بومی، سنجش‌پذیری جهانی</strong></div>
        <div className="standard"><strong>BBOP</strong><small>Aligned</small></div>
        <div className="standard"><strong>IUCN</strong><small>Guidance</small></div>
        <div className="standard"><strong>ISO</strong><small>14064-2</small></div>
        <a className="data-link" href={SHEET_URL} target="_blank" rel="noreferrer"><Database /> منبع داده نسخه ۰.۳ <ArrowUpLeft /></a>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading">
          <div><span className="eyebrow">پروژه‌های ثبت‌شده</span><h2>حفاظت را روی نقشه ببینید</h2></div>
          <div className="project-tabs" role="tablist" aria-label="انتخاب پروژه">
            {projects.map((project, index) => (
              <button key={project.title} type="button" role="tab" aria-selected={activeProject === index} onClick={() => setActiveProject(index)}>{index + 1}</button>
            ))}
          </div>
        </div>
        <article className="featured-project">
          <img src={projects[activeProject].image} alt={projects[activeProject].title} />
          <div className="project-body">
            <span className="verified"><CheckCircle weight="fill" /> ثبت و ارزیابی شده</span>
            <h3>{projects[activeProject].title}</h3>
            <p className="location"><MapPin weight="fill" /> {projects[activeProject].place}</p>
            <div className="project-metrics">
              <span><small>اثر حفاظتی</small><strong>{projects[activeProject].metric}</strong></span>
              <span><small>اعتبار قابل صدور</small><strong>{projects[activeProject].credit}</strong></span>
              <span><small>وضعیت</small><strong>{projects[activeProject].progress}</strong></span>
            </div>
            <button type="button" className="text-button">مشاهده جزئیات پروژه <ArrowLeft /></button>
          </div>
        </article>
        <div className="registry-stats" aria-label="آمار سامانه">
          <span><small>پروژه ثبت‌شده</small><strong>۲۸</strong></span>
          <span><small>اعتبار صادرشده</small><strong>۱۵٬۷۸۰</strong></span>
          <span><small>گونه تحت پوشش</small><strong>۳۶۴</strong></span>
          <span><small>استان فعال</small><strong>۱۲</strong></span>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-heading">
          <div><span className="eyebrow">از داده تا اعتماد</span><h2>مسیر صدور اعتبار</h2></div>
          <p>هر ادعا باید به داده میدانی، روش سنجش و تأیید مستقل متصل باشد.</p>
        </div>
        <div className="process-grid">
          <article><ClipboardText /><span>۰۱</span><h3>ثبت و ارزیابی</h3><p>تعریف محدوده، گونه‌های هدف و خط مبنای زیست‌بوم.</p></article>
          <article><ShieldCheck /><span>۰۲</span><h3>راستی‌آزمایی</h3><p>بازبینی داده و شواهد توسط ارزیاب مستقل.</p></article>
          <article><Leaf /><span>۰۳</span><h3>صدور اعتبار</h3><p>صدور واحد قابل رهگیری بر پایه نتایج واقعی.</p></article>
          <article><Users /><span>۰۴</span><h3>بازار و شفافیت</h3><p>افشای عمومی، گزارش اثر و جلوگیری از دوباره‌شماری.</p></article>
        </div>
      </section>

      <section className="knowledge" id="knowledge">
        <Bird weight="duotone" />
        <div><span className="eyebrow">دانش و منابع</span><h2>اعتبار معتبر، از روش روشن آغاز می‌شود.</h2></div>
        <a className="button button--light" href={SHEET_URL} target="_blank" rel="noreferrer">مشاهده روش‌شناسی <ArrowUpLeft /></a>
      </section>

      <footer id="about">
        <Brand compact />
        <p>زیرساخت مستقل و شفاف برای پیوند حفاظت از تنوع زیستی ایران با سرمایه‌گذاری مسئولانه.</p>
        <small>نسخه آزمایشی ۰.۳ · داده‌ها برای نمایش محصول نمونه‌سازی شده‌اند.</small>
      </footer>

      {formOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setFormOpen(false); }}>
          <section className="dialog" role="dialog" aria-modal="true" aria-labelledby="form-title">
            <button className="dialog-close" type="button" aria-label="بستن" onClick={() => setFormOpen(false)}><X /></button>
            {submitted ? (
              <div className="success-state">
                <CheckCircle weight="fill" /><h2>درخواست اولیه ثبت شد</h2>
                <p>خلاصه پروژه برای بررسی مقدماتی دریافت شد. تیم ارزیابی برای تکمیل داده‌ها با شما تماس می‌گیرد.</p>
                <button className="button button--primary" type="button" onClick={() => setFormOpen(false)}>بازگشت به سامانه</button>
              </div>
            ) : (
              <form onSubmit={submitProject}>
                <span className="eyebrow">ورود به مسیر اعتبار</span><h2 id="form-title">ثبت اولیه پروژه</h2>
                <p>در این مرحله فقط اطلاعات پایه را می‌گیریم؛ مستندات فنی در ارزیابی مقدماتی مشخص می‌شوند.</p>
                <label>نام پروژه<input name="title" required placeholder="مثلاً احیای زیستگاه تالابی" /></label>
                <label>استان یا محدوده اجرا<input name="region" required placeholder="استان، شهرستان یا منطقه حفاظت‌شده" /></label>
                <label>نوع اقدام<select name="type" defaultValue=""><option value="" disabled>انتخاب کنید</option><option>احیا و بازسازی</option><option>حفاظت از زیستگاه</option><option>حفاظت از گونه</option><option>مدیریت مشارکتی</option></select></label>
                <label>ایمیل مسئول پروژه<input name="email" required type="email" placeholder="name@example.com" dir="ltr" /></label>
                <button className="button button--primary" type="submit">ارسال برای بررسی <ArrowLeft /></button>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
