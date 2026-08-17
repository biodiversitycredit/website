# Biodiversity Credit Iran

رابط عمومی فارسی و راست‌به‌چپ «اعتبار تنوع زیستی ایران».

این نسخه، پروژه را به‌صورت **یک ابتکار پژوهشی و داده‌محور** معرفی می‌کند. سایت در وضعیت فعلی رجیستری صدور اعتبار، بازار، سامانه تأیید پروژه یا درگاه ثبت عمومی پروژه نیست.

## وضعیت فعلی

- Methodology: Draft
- Credits: Not issued
- Market: Not active
- Public data foundation: research snapshot v0.3
- مسیر محصول: `Initiative → Methodology → Protocol → Pilot → Evidence → Credit`

## پرتال داده عمومی

داده‌های قابل انتشار دیگر از رابط عمومی به Google Sheet لینک نمی‌شوند. یک snapshot نسخه‌بندی‌شده در `src/research-data.js` نگهداری می‌شود و از طریق مسیرهای مستقل زیر قابل مشاهده و جست‌وجو است:

- `/data` — جست‌وجوی سراسری و مرور مجموعه‌ها
- `/data/sources`
- `/data/datasets`
- `/data/species`
- `/data/areas`
- `/data/wetlands`
- `/data/indicators`
- `/data/glossary`
- `/data/quality`
- `/data/pilots`
- `/data/backlog`

هر رکورد URL پایدار مستقل دارد؛ برای نمونه `/data/sources/SRC-001`. در build، نسخه استاتیک مسیرهای مجموعه و رکوردها ساخته می‌شود و `sitemap.xml` و `robots.txt` نیز تولید می‌شوند.

Snapshot عمومی عمداً شامل داده‌های حساس، اسامی افراد، شرکای احتمالی یا داده‌هایی با محدودیت بازنشر نامشخص نیست. منابع اصلی هر رکورد در سطح همان رکورد قابل ردیابی‌اند.

## توسعه محلی

```bash
npm install
npm run dev
```

## بررسی خروجی

```bash
npm run check
```

این فرمان ابتدا قواعد یکپارچگی محتوای عمومی را بررسی می‌کند، سپس build تولیدی و تست بسته‌بندی Sites و مسیرهای داده را اجرا می‌کند.

خروجی استاتیک وب‌سایت در `dist/client` ساخته می‌شود.

## انتشار در GitHub Pages

Workflow انتشار در `.github/workflows/deploy-pages.yml` قرار دارد. Push یا merge روی شاخه `main` ابتدا content-integrity test و build را اجرا می‌کند و فقط در صورت موفقیت، خروجی روی GitHub Pages منتشر می‌شود.

## ساختار اصلی

- `src/App.jsx`: رابط و routing سطح اول
- `src/DataPortal.jsx`: مرور، جست‌وجو، collection و record pages
- `src/research-data.js`: snapshot عمومی و نسخه‌بندی‌شده داده پژوهشی
- `src/styles.css`: سیستم بصری اصلی، RTL و طراحی واکنش‌گرا
- `src/data-portal.css`: سیستم بصری پرتال داده
- `public/assets`: دارایی‌های بصری
- `tests/content-integrity.test.mjs`: guardrail ادعاها، اسامی و منابع عمومی
- `tests/sites-worker.test.mjs`: تست بسته‌بندی، مسیرهای مستقل و sitemap
- `scripts/prepare-sites-build.mjs`: تولید مسیرهای استاتیک داده و فایل‌های discovery
- `.github/workflows/deploy-pages.yml`: تست و انتشار خودکار

## قواعد انتشار عمومی

- هیچ ادعای صدور، معامله یا بازنشستگی اعتبار بدون زیرساخت و شواهد واقعی منتشر نشود.
- پروژه نامزد یا تحقیقاتی به‌عنوان پروژه تأییدشده نمایش داده نشود.
- منابع مرجع به‌عنوان endorsement یا «هم‌راستایی تأییدشده» معرفی نشوند.
- نام اشخاص، همکاران احتمالی یا شرکای در حال مذاکره تا تأیید رسمی در UI یا metadata عمومی قرار نگیرد.
- داده، observation، claim، validation، verification و issuance از هم تفکیک شوند.
- داده حساس گونه‌ها و مختصات حساس در snapshot عمومی قرار نگیرد.
- Google Sheet می‌تواند ابزار پژوهشی داخلی باشد، اما public UI باید داده را به‌صورت first-party، نسخه‌بندی‌شده و قابل ممیزی منتشر کند.
