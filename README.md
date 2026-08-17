# Biodiversity Credit Iran

رابط عمومی فارسی و راست‌به‌چپ «اعتبار تنوع زیستی ایران».

این نسخه، پروژه را به‌صورت **یک ابتکار پژوهشی و داده‌محور** معرفی می‌کند. سایت در وضعیت فعلی رجیستری صدور اعتبار، بازار، سامانه تأیید پروژه یا درگاه ثبت عمومی پروژه نیست.

## وضعیت فعلی

- Methodology: Draft
- Credits: Not issued
- Market: Not active
- Public data foundation: research dataset v0.3
- مسیر محصول: `Initiative → Methodology → Protocol → Pilot → Evidence → Credit`

داده‌های پایه و منابع تحقیقاتی از Google Sheet نسخه ۰.۳ در رابط لینک شده‌اند. اعداد نمایش‌داده‌شده در سایت فقط آمار داده پایه هستند و نباید به‌عنوان نتیجه حفاظتی، پروژه تأییدشده یا اعتبار صادرشده تفسیر شوند.

## توسعه محلی

```bash
npm ci
npm run dev
```

## بررسی خروجی

```bash
npm run check
```

این فرمان ابتدا قواعد یکپارچگی محتوای عمومی را بررسی می‌کند، سپس build تولیدی و تست بسته‌بندی Sites را اجرا می‌کند.

خروجی استاتیک وب‌سایت در `dist/client` ساخته می‌شود.

## انتشار در GitHub Pages

Workflow انتشار در `.github/workflows/deploy-pages.yml` قرار دارد. Push یا merge روی شاخه `main` ابتدا content-integrity test و build را اجرا می‌کند و فقط در صورت موفقیت، خروجی روی GitHub Pages منتشر می‌شود.

## ساختار اصلی

- `src/App.jsx`: رابط و محتوای عمومی
- `src/styles.css`: سیستم بصری، RTL و طراحی واکنش‌گرا
- `public/assets`: دارایی‌های بصری
- `tests/content-integrity.test.mjs`: guardrail ادعاهای عمومی
- `tests/sites-worker.test.mjs`: تست بسته‌بندی و fallback
- `.github/workflows/deploy-pages.yml`: تست و انتشار خودکار
- `.openai/hosting.json`: تنظیمات انتشار روی Sites

## قواعد انتشار عمومی

- هیچ ادعای صدور، معامله یا بازنشستگی اعتبار بدون زیرساخت و شواهد واقعی منتشر نشود.
- پروژه نامزد یا تحقیقاتی به‌عنوان پروژه تأییدشده نمایش داده نشود.
- منابع مرجع به‌عنوان endorsement یا «هم‌راستایی تأییدشده» معرفی نشوند.
- نام اشخاص، همکاران احتمالی یا شرکای در حال مذاکره تا تأیید رسمی در UI یا metadata عمومی قرار نگیرد.
- داده، observation، claim، validation، verification و issuance از هم تفکیک شوند.
