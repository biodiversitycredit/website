# Biodiversity Credit Iran

رابط فارسی و راست‌به‌چپ سامانه «اعتبار تنوع زیستی ایران» با هویت بصری مجمع پرندگان.

## توسعه محلی

```bash
npm ci
npm run dev
```

## بررسی خروجی

```bash
npm run build
npm run test:sites
```

خروجی استاتیک وب‌سایت در `dist/client` ساخته می‌شود.

## انتشار در GitHub Pages

Workflow آماده انتشار در `.github/workflows/deploy-pages.yml` قرار دارد. پس از Push روی شاخه `main`:

1. در تنظیمات مخزن به **Settings → Pages** بروید.
2. در بخش **Build and deployment**، گزینه **Source** را روی **GitHub Actions** قرار دهید.
3. اجرای Workflow را در تب **Actions** بررسی کنید.

تنظیم `base: "./"` و مسیرهای نسبی assetها باعث می‌شود سایت هم روی دامنه اصلی و هم روی مسیر `username.github.io/repository` درست بارگذاری شود.

## ساختار اصلی

- `src/App.jsx`: رابط، داده‌های نمونه و تعاملات اصلی
- `src/styles.css`: سیستم بصری، RTL و طراحی واکنش‌گرا
- `public/assets`: نشان، قاب پرندگان و تصویر پروژه
- `.openai/hosting.json`: تنظیمات انتشار روی Sites
- `.github/workflows/deploy-pages.yml`: انتشار خودکار GitHub Pages

لینک منبع داده نسخه ۰.۳ در رابط روی Google Sheet ارائه‌شده تنظیم شده است.
