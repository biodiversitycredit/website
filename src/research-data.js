export const snapshot = {
  version: "0.3-public",
  sourceVersion: "0.3",
  preparedAt: "2026-08-01",
  description:
    "نسخه عمومی و بازبینی‌شده از داده‌های پایه پژوهشی اعتبار تنوع زیستی ایران. این داده‌ها نتیجه حفاظتی، اعتبار صادرشده یا تأیید پروژه محسوب نمی‌شوند.",
};

export const sources = [
  { id:"SRC-001", name:"Convention on Biological Diversity (CBD)", topic:"Kunming–Montreal Global Biodiversity Framework", type:"چارچوب رسمی بین‌المللی", confidence:"A", use:"استاندارد، شاخص‌ها، تأمین مالی", note:"۴ هدف ۲۰۵۰ و ۲۳ هدف ۲۰۳۰؛ Target 19 ابزارهایی مانند credits را با safeguards مطرح می‌کند.", url:"https://www.cbd.int/gbf/default.shtml", accessed:"2026-08-01" },
  { id:"SRC-002", name:"CBD", topic:"GBF Target 19", type:"هدف رسمی", confidence:"A", use:"Funding، Methodology", note:"بسیج حداقل ۲۰۰ میلیارد دلار در سال تا ۲۰۳۰؛ تشویق ابزارهای نوآورانه از جمله offsets و credits با safeguards.", url:"https://www.cbd.int/gbf/targets/19", accessed:"2026-08-01" },
  { id:"SRC-003", name:"Biodiversity Credit Alliance", topic:"High-level Principles", type:"راهنمای چندذی‌نفعی", confidence:"B", use:"Registration، Methodology، Verification", note:"بازار باید high-integrity، شفاف، منصفانه و به نفع طبیعت و حافظان آن باشد.", url:"https://www.biodiversitycreditalliance.org/high-level-principles/", accessed:"2026-08-01" },
  { id:"SRC-004", name:"Biodiversity Credit Alliance", topic:"FAQ / market guidance", type:"راهنمای بازار نوپا", confidence:"B", use:"واژه‌نامه، مدل محصول", note:"بازار در مراحل اولیه است و پاسخ‌ها و تعاریف هنوز در حال تکامل‌اند.", url:"https://www.biodiversitycreditalliance.org/faqs/", accessed:"2026-08-01" },
  { id:"SRC-005", name:"UK DEFRA / Natural England", topic:"Statutory Biodiversity Metric", type:"قانون/ابزار رسمی انگلستان", confidence:"A", use:"مطالعه تطبیقی Baseline و Metric", note:"واحدهای زیستی با نوع، اندازه، وضعیت و اهمیت راهبردی زیستگاه محاسبه می‌شوند؛ مدل مخصوص BNG انگلستان است.", url:"https://www.gov.uk/guidance/calculate-biodiversity-value-with-the-statutory-biodiversity-metric", accessed:"2026-08-01" },
  { id:"SRC-006", name:"UK Government", topic:"Understanding Biodiversity Net Gain", type:"راهنمای رسمی", confidence:"A", use:"مطالعه تطبیقی Registry و lifecycle", note:"در انگلستان حداقل ۱۰٪ BNG و نگهداری برخی زیستگاه‌ها برای حداقل ۳۰ سال لازم است؛ credit آخرین راه‌حل است.", url:"https://www.gov.uk/guidance/understanding-biodiversity-net-gain", accessed:"2026-08-01" },
  { id:"SRC-007", name:"GBIF", topic:"Global Biodiversity Information Facility", type:"زیرساخت داده علمی", confidence:"A/B", use:"Species Registry، Occurrences، API", note:"منبع رخداد و چک‌لیست؛ کیفیت رکوردها باید با dataset، license و coordinate uncertainty کنترل شود.", url:"https://www.gbif.org/", accessed:"2026-08-01" },
  { id:"SRC-008", name:"GBIF / AvayeBoom + DOE Iran", topic:"Bird Checklist of Iran", type:"چک‌لیست داده‌ای", confidence:"B", use:"Species Registry", note:"چک‌لیست پرندگان ایران با نام‌ها، وضعیت‌ها و اطلاعات معاهدات؛ CC BY 4.0.", url:"https://www.gbif.org/dataset/0a46c53b-4926-485a-9492-46ade93d2fad", accessed:"2026-08-01" },
  { id:"SRC-009", name:"Protected Planet / UNEP-WCMC", topic:"World Database on Protected Areas", type:"پایگاه داده رسمی جهانی", confidence:"A/B", use:"Protected Areas Registry، Map", note:"مرجع جهانی مناطق حفاظت‌شده؛ رکوردهای ایران باید با داده ملی تطبیق شوند.", url:"https://www.protectedplanet.net/", accessed:"2026-08-01" },
  { id:"SRC-010", name:"Ramsar Convention", topic:"Ramsar Sites Information Service", type:"رجیستری رسمی تالاب‌ها", confidence:"A", use:"Protected Areas Registry", note:"اطلاعات سایت‌های رامسر شامل نام، شماره، تاریخ ثبت و مساحت.", url:"https://rsis.ramsar.org/", accessed:"2026-08-01" },
  { id:"SRC-011", name:"UNESCO World Heritage Centre", topic:"Iran State Party / Natural Sites", type:"رجیستری رسمی میراث جهانی", confidence:"A", use:"Protected Areas Registry", note:"ایران دارای دو میراث طبیعی ثبت‌شده: جنگل‌های هیرکانی و بیابان لوت.", url:"https://whc.unesco.org/en/statesparties/ir", accessed:"2026-08-01" },
  { id:"SRC-012", name:"IUCN Red List", topic:"Threatened species assessments", type:"ارزیابی علمی/نهادی", confidence:"A/B", use:"Species Registry، status", note:"مرجع وضعیت تهدید جهانی؛ تاریخ ارزیابی و دامنه جغرافیایی هر assessment ضروری است.", url:"https://www.iucnredlist.org/", accessed:"2026-08-01" },
  { id:"SRC-013", name:"CITES", topic:"Species trade controls", type:"معاهده/ضمائم رسمی", confidence:"A", use:"Species Registry", note:"وضعیت گونه در ضمائم تجارت بین‌المللی؛ جایگزین وضعیت حفاظتی IUCN نیست.", url:"https://cites.org/eng/app/appendices.php", accessed:"2026-08-01" },
  { id:"SRC-014", name:"CMS", topic:"Migratory species listings", type:"معاهده رسمی", confidence:"A", use:"Species Registry", note:"ثبت وضعیت گونه‌های مهاجر در ضمائم؛ برای پرندگان و پستانداران مهاجر مهم است.", url:"https://www.cms.int/en/species", accessed:"2026-08-01" },
  { id:"SRC-015", name:"Ramsar Convention", topic:"Iran country profile", type:"پروفایل رسمی کشور", confidence:"A", use:"Protected Areas Registry، Funding", note:"ایران ۲۷ سایت رامسر با مجموع ۱٬۴۹۴٬۳۷۱ هکتار دارد.", url:"https://www.ramsar.org/country-profile/iran-islamic-republic", accessed:"2026-08-01" },
  { id:"SRC-016", name:"Protected Planet / UNEP-WCMC", topic:"Iran protected area profile, June 2026", type:"پروفایل رسمی داده جهانی", confidence:"A/B", use:"Protected Areas Registry، Map", note:"پروفایل ژوئن ۲۰۲۶ برای ایران ۱۴۱ منطقه حفاظت‌شده و صفر OECM گزارش می‌کند.", url:"https://www.protectedplanet.net/en/country/IRN", accessed:"2026-08-01" },
  { id:"SRC-017", name:"GBIF / ISSG", topic:"Global Register of Introduced and Invasive Species — Iran", type:"چک‌لیست معتبر ملی", confidence:"B", use:"Species Registry، Threat indicators", note:"نسخه ۱.۳ با انتشار ۲۰۲۴؛ CC BY 4.0 و روش validation/verification مستند.", url:"https://www.gbif.org/dataset/161b4964-f1ff-461a-ab82-970c61f90b19", accessed:"2026-08-01" },
  { id:"SRC-018", name:"GBIF / Plazi", topic:"Freshwater lamprey and fishes of Iran — updated checklist", type:"چک‌لیست علمی", confidence:"B", use:"Species Registry", note:"چک‌لیست ۲۰۲۴، ۳۰۰ گونه، ۱۱۰ سرده و ۳۸ خانواده؛ CC0 1.0.", url:"https://www.gbif.org/dataset/250e7bdf-217c-4480-974b-e80b926f3326", accessed:"2026-08-01" },
];

export const species = [
  { id:"SP-IR-0001", fa:"یوزپلنگ آسیایی", scientific:"Acinonyx jubatus venaticus", group:"پستاندار", status:null, statusSource:"IUCN Red List", recordType:"گونه شاخص", sensitivity:"خیلی بالا", validation:"نیازمند واکشی assessment جاری", url:"https://www.iucnredlist.org/", note:"مختصات رخداد عمومی نشود." },
  { id:"SP-IR-0002", fa:"پلنگ ایرانی", scientific:"Panthera pardus tulliana", group:"پستاندار", status:null, statusSource:"IUCN Red List", recordType:"گونه شاخص", sensitivity:"خیلی بالا", validation:"نیازمند واکشی assessment جاری", url:"https://www.iucnredlist.org/", note:"نام زیرگونه/جمعیت باید با taxonomy جاری تطبیق شود." },
  { id:"SP-IR-0003", fa:"خرس قهوه‌ای", scientific:"Ursus arctos", group:"پستاندار", status:null, statusSource:"IUCN Red List", recordType:"گونه شاخص", sensitivity:"بالا", validation:"نیازمند واکشی assessment جاری", url:"https://www.iucnredlist.org/", note:"داده محلی جمعیت نیازمند منبع پروژه‌ای است." },
  { id:"SP-IR-0004", fa:"گوزن زرد ایرانی", scientific:"Dama mesopotamica", group:"پستاندار", status:null, statusSource:"IUCN Red List", recordType:"گونه شاخص", sensitivity:"خیلی بالا", validation:"نیازمند واکشی assessment جاری", url:"https://www.iucnredlist.org/", note:"مرز جمعیت‌های وحشی/معرفی‌شده باید تفکیک شود." },
];

export const areas = [
  { id:"AR-IR-0001", name:"جنگل‌های هیرکانی", designation:"میراث طبیعی جهانی", region:"گیلان، مازندران، گلستان", areaHa:"145,004.74", registered:"2019؛ گسترش 2023", reference:"UNESCO", confidence:"A", gis:"نیازمند دریافت مرز رسمی", nationalMatch:"نیازمند تطبیق با DOE", url:"https://whc.unesco.org/en/list/1584", note:"UNESCO در نسخه پس از گسترش ۲۰۲۳، مساحت ملک را ۱۴۵٬۰۰۴٫۷۴ هکتار و buffer را ۲۱۹٬۴۳۱٫۴۱ هکتار گزارش می‌کند." },
  { id:"AR-IR-0002", name:"بیابان لوت", designation:"میراث طبیعی جهانی", region:"کرمان، سیستان‌وبلوچستان، خراسان جنوبی", areaHa:"2,278,015.00", registered:"2016", reference:"UNESCO", confidence:"A", gis:"نیازمند دریافت مرز رسمی", nationalMatch:"نیازمند تطبیق با DOE", url:"https://whc.unesco.org/en/list/1505", note:"ارزش ثبت جهانی آن عمدتاً زمین‌شناختی است؛ برای credit تنوع زیستی نیازمند baseline اکولوژیک جداگانه است." },
  { id:"AR-IR-0003", name:"میانکاله، خلیج گرگان و لپو-زاغمرز", designation:"سایت رامسر", region:"مازندران/گلستان", areaHa:"100000", registered:"1975-06-23", externalId:"Ramsar 36", reference:"Ramsar RSIS", confidence:"A", gis:"RIS/Spatial download", nationalMatch:"نیازمند تطبیق با DOE", url:"https://rsis.ramsar.org/", note:"نام و مساحت از RSIS؛ وضعیت جاری و مرز باید واکشی شود." },
  { id:"AR-IR-0004", name:"شادگان، خورالامیه و خورموسی", designation:"سایت رامسر", region:"خوزستان", areaHa:"400000", registered:"1975-06-23", externalId:"Ramsar 41", reference:"Ramsar RSIS", confidence:"A", gis:"RIS/Spatial download", nationalMatch:"نیازمند تطبیق با DOE", url:"https://rsis.ramsar.org/", note:"مساحت ثبت‌شده در RSIS." },
  { id:"AR-IR-0005", name:"گاوخونی و تالاب‌های پایین‌دست زاینده‌رود", designation:"سایت رامسر", region:"اصفهان", areaHa:"43000", registered:"1975-06-23", externalId:"Ramsar 53", reference:"Ramsar RSIS", confidence:"A", gis:"RIS/Spatial download", nationalMatch:"نیازمند تطبیق با DOE", url:"https://rsis.ramsar.org/", note:"مساحت ثبت‌شده با وضعیت اکولوژیک جاری یکسان نیست." },
  { id:"AR-IR-0006", name:"کانی‌برازان", designation:"سایت رامسر", region:"آذربایجان غربی", areaHa:"927", registered:"2011-01-17", externalId:"Ramsar 1940", reference:"Ramsar RSIS", confidence:"A", gis:"RIS/Spatial download", nationalMatch:"نیازمند تطبیق با DOE", url:"https://rsis.ramsar.org/", note:"نمونه مناسب برای پایلوت داده تالاب." },
];

export const pilots = [
  { id:"PR-IR-CAND-001", title:"پایلوت پیشنهادی جنگل هیرکانی", intervention:"حفاظت/پایش", area:"جنگل‌های هیرکانی", baseline:"خیر", monitoring:"خیر", status:"نامزد تحقیق", validation:"D", note:"این ردیف پروژه واقعی ثبت‌شده نیست؛ فقط نامزد طراحی پایلوت است." },
  { id:"PR-IR-CAND-002", title:"پایلوت پیشنهادی تالاب کانی‌برازان", intervention:"احیا/پایش", area:"تالاب کانی‌برازان", baseline:"خیر", monitoring:"خیر", status:"نامزد تحقیق", validation:"D", note:"نیازمند شریک محلی، مجوز و داده baseline." },
];

export const indicators = [
  { id:"IND-001", dimension:"زیستگاه", name:"مساحت زیستگاه تحت مداخله", definition:"مساحت polygonهای معتبر مشمول حفاظت/احیا", unit:"هکتار", method:"GIS + اسناد محدوده", frequency:"سالانه", baseline:"بله", uncertainty:"دقت مرز و تغییر کاربری", source:"GBF/روش‌شناسی پروژه", credit:"به‌تنهایی خیر", note:"فعالیت یا پوشش مکانی است، نه outcome کافی." },
  { id:"IND-002", dimension:"زیستگاه", name:"وضعیت/کیفیت زیستگاه", definition:"امتیاز condition بر اساس پروتکل مختص زیست‌بوم", unit:"امتیاز/طبقه", method:"پلات میدانی + سنجش از دور", frequency:"فصلی/سالانه", baseline:"بله", uncertainty:"وابسته به پروتکل و ارزیاب", source:"مطالعه تطبیقی DEFRA metric", credit:"با روش معتبر", note:"نباید نسخه انگلستان مستقیم برای ایران استفاده شود." },
  { id:"IND-003", dimension:"گونه", name:"Occupancy گونه هدف", definition:"احتمال حضور گونه در واحدهای نمونه با اصلاح effort/detection", unit:"احتمال/درصد", method:"دوربین تله‌ای/آکوستیک/مشاهده", frequency:"فصلی/سالانه", baseline:"بله", uncertainty:"detectability و effort", source:"روش علمی گونه‌محور", credit:"بالقوه", note:"تعداد عکس خام جایگزین abundance نیست." },
  { id:"IND-004", dimension:"گونه", name:"روند فراوانی نسبی", definition:"تغییر شاخص نسبی تحت effort ثابت", unit:"شاخص", method:"دوربین، transect، acoustic", frequency:"سالانه", baseline:"بله", uncertainty:"sampling design", source:"روش علمی گونه‌محور", credit:"بالقوه", note:"برای تبدیل به outcome نیازمند مدل آماری است." },
  { id:"IND-005", dimension:"تهدید", name:"کاهش فشار تهدید", definition:"تغییر نرخ رخداد شکار، آتش، چرای نامجاز یا تخریب", unit:"رخداد/مساحت/نرخ", method:"گشت، سنجش از دور، گزارش اعتبارسنجی‌شده", frequency:"ماهانه/فصلی", baseline:"بله", uncertainty:"under-reporting", source:"GBF targets 5–8", credit:"بالقوه", note:"کاهش تهدید باید به outcome زیستی مرتبط شود." },
  { id:"IND-006", dimension:"اتصال", name:"اتصال زیستگاه", definition:"تغییر connectivity بر اساس landscape graph/corridor model", unit:"شاخص", method:"GIS/remote sensing", frequency:"سالانه/چندساله", baseline:"بله", uncertainty:"وابسته به مدل و resolution", source:"GBF Goal A / Target 3", credit:"بالقوه", note:"فرض‌های مدل باید منتشر شوند." },
  { id:"IND-007", dimension:"اجتماعی", name:"مشارکت و توزیع منافع", definition:"میزان مشارکت مؤثر و سهم منافع ذی‌نفعان محلی", unit:"درصد/کیفی", method:"اسناد، مصاحبه، grievance log", frequency:"شش‌ماهه", baseline:"بله", uncertainty:"سوگیری گزارش‌دهی", source:"BCA high-level principles", credit:"شرط integrity", note:"جای outcome زیستی را نمی‌گیرد؛ safeguard است." },
  { id:"IND-008", dimension:"داده", name:"کامل‌بودن شواهد", definition:"نسبت مشاهدات/ادعاهای دارای provenance کامل", unit:"درصد", method:"Evidence Vault audit", frequency:"ماهانه", baseline:"خیر", uncertainty:"کیفیت metadata", source:"Digital evidence protocol", credit:"شرط ممیزی", note:"کیفیت شواهد است، نه اثر اکولوژیک." },
];

export const glossary = [
  { id:"biodiversity-credit", term:"Biodiversity credit", fa:"اعتبار تنوع زیستی", definition:"واحد قابل معامله/گواهی‌شده که outcome مثبت و قابل اندازه‌گیری برای تنوع زیستی را تحت روش مشخص نمایندگی می‌کند؛ تعریف بازار هنوز در حال تکامل است.", not:"کمک مالی ساده، carbon credit، مجوز تخریب", source:"BCA / CBD Target 19" },
  { id:"biodiversity-offset", term:"Biodiversity offset", fa:"جبران تنوع زیستی", definition:"اقدام جبرانی برای اثرات باقیمانده پس از اجتناب و کاهش؛ معمولاً در چارچوب mitigation hierarchy.", not:"اعتبار داوطلبانه contribution", source:"BCA / regulatory frameworks" },
  { id:"bng", term:"Biodiversity Net Gain (BNG)", fa:"خالص افزایش تنوع زیستی", definition:"چارچوبی برای بهتر شدن قابل اندازه‌گیری وضعیت تنوع زیستی نسبت به baseline؛ مدل قانونی انگلستان مصداق خاص است.", not:"هر نوع credit جهانی", source:"UK Government" },
  { id:"baseline", term:"Baseline", fa:"خط پایه", definition:"وضعیت مرجع مکانی و زمانی پیش از مداخله که تغییرات نسبت به آن سنجیده می‌شود.", not:"فقط یک عکس یا گزارش توصیفی", source:"Monitoring methodology" },
  { id:"additionality", term:"Additionality", fa:"افزونگی", definition:"نتیجه‌ای که بدون مداخله و تأمین مالی پروژه رخ نمی‌داد.", not:"ادامه فعالیت عادی یا الزام قانونی موجود", source:"BCA principles" },
  { id:"leakage", term:"Leakage", fa:"نشت اثر", definition:"انتقال فشار یا تخریب از محدوده پروژه به مکان دیگر به‌علت مداخله.", not:"خطای اندازه‌گیری", source:"Credit methodology" },
  { id:"permanence", term:"Permanence", fa:"ماندگاری", definition:"دوام outcome و نحوه مدیریت خطر برگشت یا از بین رفتن آن.", not:"یک دوره پایش کوتاه", source:"Credit methodology" },
  { id:"mrv", term:"MRV", fa:"اندازه‌گیری، گزارش‌دهی و راستی‌آزمایی", definition:"سامانه جمع‌آوری، گزارش و بررسی مستقل نتایج و شواهد.", not:"فقط داشبورد یا IoT", source:"Assurance practice" },
  { id:"nature-contribution", term:"Nature contribution", fa:"مشارکت مالی در طبیعت", definition:"تأمین مالی حفاظت بدون ادعای جبران یک اثر مشخص.", not:"offset یا neutralization", source:"BCA market guidance" },
];

export const datasets = [
  { id:"DS-001", title:"Iran Ramsar country profile", scope:"تالاب‌ها", publisher:"Ramsar Convention", version:"2026 current profile", type:"Country registry", license:"Official site terms", confidence:"A", use:"Areas Registry / Map / KPI", url:"https://www.ramsar.org/country-profile/iran-islamic-republic", next:"واکشی فهرست کامل ۲۷ سایت و spatial data" },
  { id:"DS-002", title:"Protected Area Profile for Iran", scope:"مناطق حفاظت‌شده", publisher:"UNEP-WCMC / Protected Planet", version:"June 2026", type:"Country profile / WDPA", license:"Protected Planet terms", confidence:"A/B", use:"Areas Registry / Map", url:"https://www.protectedplanet.net/en/country/IRN", next:"دریافت WDPA release و ثبت version" },
  { id:"DS-003", title:"GRIIS Iran", scope:"گونه‌های معرفی‌شده و مهاجم", publisher:"IUCN SSC ISSG via GBIF", version:"v1.3 / 2024", type:"Checklist", license:"CC BY 4.0", confidence:"B", use:"Species Registry / Threat baseline", url:"https://www.gbif.org/dataset/161b4964-f1ff-461a-ab82-970c61f90b19", next:"دانلود DwC-A و واردسازی taxonomy" },
  { id:"DS-004", title:"Bird Checklist of Iran", scope:"پرندگان", publisher:"AvayeBoom + DOE via GBIF", version:"current dataset", type:"Checklist", license:"CC BY 4.0", confidence:"B", use:"Species Registry", url:"https://www.gbif.org/dataset/0a46c53b-4926-485a-9492-46ade93d2fad", next:"بررسی metadata و دانلود رکوردها" },
  { id:"DS-005", title:"Endemic Tetrapoda of Iran", scope:"چهاراندامان بوم‌زاد", publisher:"Zoosystema / Plazi via GBIF", version:"2018", type:"Checklist", license:"CC0", confidence:"B", use:"Species Registry / endemicity", url:"https://www.gbif.org/dataset/2d63505a-0e4b-43c6-b53f-ebcf2a34acaa", next:"کنترل taxonomy با backbone جاری" },
  { id:"DS-006", title:"Freshwater lamprey and fishes of Iran", scope:"ماهیان آب شیرین", publisher:"Plazi / Zootaxa via GBIF", version:"2024", type:"Checklist", license:"CC0 1.0", confidence:"B", use:"Species Registry", url:"https://www.gbif.org/dataset/250e7bdf-217c-4480-974b-e80b926f3326", next:"استخراج ۳۰۰ گونه و flag کردن ۱۱ مورد نیازمند تأیید" },
  { id:"DS-007", title:"Hyrcanian Forests UNESCO property", scope:"جنگل هیرکانی", publisher:"UNESCO WHC", version:"2019 + 2023 extension", type:"Registry / maps / documents", license:"CC-BY-SA IGO for description", confidence:"A", use:"Area Registry / Pilot baseline", url:"https://whc.unesco.org/en/list/1584", next:"دریافت ۱۷ component و KML/اسناد مدیریت" },
  { id:"DS-008", title:"Lut Desert UNESCO property", scope:"بیابان لوت", publisher:"UNESCO WHC", version:"2016", type:"Registry / maps / documents", license:"CC-BY-SA IGO for description", confidence:"A", use:"Area Registry / gap analysis", url:"https://whc.unesco.org/en/list/1505", next:"تفکیک ارزش زمین‌شناختی از outcome زیستی" },
  { id:"IR-SP-DS-001", title:"Bird Checklist of Iran", scope:"پرندگان", publisher:"AvayeBoom Bird Conservation Society + Iran DOE", version:"1.240", publicationDate:"2026-07-27", recordCount:"581", type:"Checklist / DwC-A", license:"CC BY 4.0", persistentId:"DOI 10.15468/6q8hdv", confidence:"A/B", importStatus:"قابل واردسازی", url:"https://www.gbif.org/dataset/0a46c53b-4926-485a-9492-46ade93d2fad", note:"نام فارسی و علمی، وضعیت، CITES، CMS، AEWA، مهاجرت و فصل حضور" },
  { id:"IR-SP-DS-002", title:"Annotated checklist of endemic Tetrapoda species of Iran", scope:"چهاراندامان بوم‌زاد", publisher:"Zoosystema / Plazi", version:"2018", publicationDate:"2018", recordCount:"80", type:"Checklist", license:"CC0 1.0", persistentId:"DOI 10.5252/zoosystema2018v40a24", confidence:"B", importStatus:"قابل واردسازی با کنترل taxonomy", url:"https://www.gbif.org/dataset/2d63505a-0e4b-43c6-b53f-ebcf2a34acaa", note:"۸۲.۵٪ خزندگان؛ ۳۸ گونه در زمان مطالعه فاقد داده IUCN بودند" },
  { id:"IR-SP-DS-003", title:"Freshwater lamprey and fishes of Iran: updated checklist", scope:"ماهیان آب شیرین", publisher:"Plazi / Zootaxa", version:"2024", publicationDate:"2024-01-17", recordCount:"300", type:"Checklist", license:"CC0 1.0", persistentId:"DOI 10.15468/guphfg", confidence:"B", importStatus:"قابل واردسازی با flag عدم قطعیت", url:"https://www.gbif.org/dataset/250e7bdf-217c-4480-974b-e80b926f3326", note:"۳۰۰ گونه، ۱۱۰ سرده، ۳۸ خانواده؛ ۱۱ گونه نیازمند تأیید نمونه" },
  { id:"IR-SP-DS-004", title:"Global Register of Introduced and Invasive Species — Iran", scope:"گونه‌های معرفی‌شده و مهاجم", publisher:"IUCN SSC ISSG via GBIF", version:"1.3", publicationDate:"2024", type:"Checklist", license:"CC BY 4.0", persistentId:"GBIF UUID 161b4964-f1ff-461a-ab82-970c61f90b19", confidence:"B", importStatus:"قابل واردسازی", url:"https://www.gbif.org/dataset/161b4964-f1ff-461a-ab82-970c61f90b19", note:"برای baseline تهدید و گونه مهاجم" },
  { id:"IR-SP-DS-005", title:"IUCN Red List assessments relevant to Iran", scope:"همه گروه‌ها", publisher:"IUCN", version:"جاری", publicationDate:"جاری", type:"Assessment registry", license:"IUCN terms", persistentId:"Taxon/assessment-specific", confidence:"A/B", importStatus:"نیازمند واکشی موردی", url:"https://www.iucnredlist.org/", note:"هر وضعیت باید همراه assessment date و دامنه جغرافیایی ثبت شود." },
];

export const qualityRules = [
  { id:"DQ-001", rule:"Provenance", requirement:"هر رکورد عمومی باید URL/DOI، ناشر، نسخه و تاریخ دسترسی داشته باشد.", reason:"قابلیت ممیزی و بازتولید", failure:"ذکر «IUCN» بدون assessment یا تاریخ" },
  { id:"DQ-002", rule:"Taxonomy versioning", requirement:"نام علمی باید با backbone مشخص و تاریخ تطبیق ثبت شود.", reason:"نام‌ها و زیرگونه‌ها تغییر می‌کنند.", failure:"استفاده هم‌زمان از دو نام مترادف به‌عنوان دو گونه" },
  { id:"DQ-003", rule:"Spatial sensitivity", requirement:"مختصات گونه‌های حساس باید تعمیم، تأخیر یا محدود شوند.", reason:"جلوگیری از شکار، قاچاق و مزاحمت", failure:"نمایش مکان دقیق لانه یا قلاده" },
  { id:"DQ-004", rule:"Claim separation", requirement:"ثبت پروژه، validation، verification، issuance و retirement وضعیت‌های جدا هستند.", reason:"جلوگیری از greenwashing", failure:"نمایش پروژه ثبت‌شده به‌عنوان credit صادرشده" },
  { id:"DQ-005", rule:"Baseline comparability", requirement:"baseline باید محدوده، زمان، روش، effort و uncertainty مشخص داشته باشد.", reason:"مقایسه معتبر outcome", failure:"مقایسه عکس‌های تصادفی دو سال" },
  { id:"DQ-006", rule:"No metric portability assumption", requirement:"هیچ metric خارجی بدون ارزیابی اکولوژیک و حقوقی برای ایران کپی نشود.", reason:"اکوسیستم و قانون متفاوت‌اند.", failure:"استفاده مستقیم DEFRA Metric برای همه ایران" },
  { id:"DQ-007", rule:"Evidence integrity", requirement:"hash و timestamp فقط تمامیت پس از ثبت را نشان می‌دهند، نه صحت اولیه مشاهده.", reason:"تفکیک authenticity از integrity", failure:"ادعای واقعی بودن عکس فقط بر اساس checksum" },
  { id:"DQ-008", rule:"License compliance", requirement:"مجوز dataset و محدودیت بازنشر در سطح رکورد حفظ شود.", reason:"حقوق داده", failure:"انتشار تجاری dataset با مجوز محدود" },
];

export const wetlands = [
  { id:"RS-IR-0036", official:"Miankaleh Peninsula, Gorgan Bay and Lapoo-Zaghmarz Ab-bandan", fa:"میانکاله، خلیج گرگان و آب‌بندان لپو-زاغمرز", date:"1975-06-23", siteNo:"36", areaHa:"100,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0037", official:"Lake Parishan and Dasht-e-Arjan", fa:"دریاچه پریشان و دشت ارژن", date:"1975-06-23", siteNo:"37", areaHa:"6,200.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0038", official:"Lake Urmia [or Orumiyeh]", fa:"دریاچه ارومیه", date:"1975-06-23", siteNo:"38", areaHa:"483,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0039", official:"Neiriz Lakes & Kamjan Marshes", fa:"دریاچه‌های نی‌ریز و تالاب‌های کمجان", date:"1975-06-23", siteNo:"39", areaHa:"108,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0040", official:"Anzali Wetland", fa:"تالاب انزلی", date:"1975-06-23", siteNo:"40", areaHa:"19,500.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"در Montreux Record" },
  { id:"RS-IR-0041", official:"Shadegan Marshes & mudflats of Khor-al Amaya & Khor Musa", fa:"تالاب شادگان و خورالامیه و خورموسی", date:"1975-06-23", siteNo:"41", areaHa:"400,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0042", official:"Hamun-e-Saberi & Hamun-e-Helmand", fa:"هامون صابری و هامون هیرمند", date:"1975-06-23", siteNo:"42", areaHa:"50,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"در Montreux Record" },
  { id:"RS-IR-0043", official:"Lake Kobi", fa:"دریاچه کُبی", date:"1975-06-23", siteNo:"43", areaHa:"1,200.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام فارسی نیازمند تطبیق رسمی" },
  { id:"RS-IR-0045", official:"Shurgol, Yadegarlu & Dorgeh Sangi Lakes", fa:"دریاچه‌های شورگل، یادگارلو و درگه‌سنگی", date:"1975-06-23", siteNo:"45", areaHa:"2,500.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام فارسی نیازمند تطبیق DOE" },
  { id:"RS-IR-0047", official:"Amirkelayeh Lake", fa:"دریاچه امیرکلایه", date:"1975-06-23", siteNo:"47", areaHa:"1,131.60", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"مساحت جاری RSIS" },
  { id:"RS-IR-0049", official:"Alagol, Ulmagol and Ajigol Lakes", fa:"دریاچه‌های آلاگل، آلماگل و آجی‌گل", date:"1975-06-23", siteNo:"49", areaHa:"1,400.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0050", official:"Khuran Straits", fa:"تنگه خوران", date:"1975-06-23", siteNo:"50", areaHa:"100,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-0053", official:"Gavkhouni Lake and marshes of the lower Zaindeh Rud", fa:"دریاچه گاوخونی و تالاب‌های پایین‌دست زاینده‌رود", date:"1975-06-23", siteNo:"53", areaHa:"43,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-1006", official:"Govater Bay and Hur-e-Bahu", fa:"خلیج گواتر و هور باهو", date:"1999-11-01", siteNo:"1006", areaHa:"75,000.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-1109", official:"Gomishan Lagoon", fa:"تالاب گمیشان", date:"2001-11-05", siteNo:"1109", areaHa:"17,700.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-1940", official:"Kanibarazan Wetland", fa:"تالاب کانی‌برازان", date:"2011-01-17", siteNo:"1940", areaHa:"927.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"نام، شماره، تاریخ و مساحت از RSIS" },
  { id:"RS-IR-2558", official:"Gandoman", fa:"گندمان", date:"2024-07-21", siteNo:"2558", areaHa:"1,070.00", source:"RSIS", confidence:"A", validation:"تأییدشده", url:"https://rsis.ramsar.org/", note:"بیست‌وهفتمین سایت ایران" },
];

export const protectedAreaProfile = {
  id:"PA-PROFILE-IRN-2026-06",
  title:"Iran Protected Area Profile",
  publisher:"UNEP-WCMC / Protected Planet",
  version:"June 2026",
  total:"141",
  managementEffectiveness:"20",
  oecms:"0",
  geometry:"87% polygons / 13% points",
  confidence:"A/B",
  url:"https://www.protectedplanet.net/en/country/IRN",
  note:"نسخه داده باید همراه هر استفاده ذخیره شود. نام و هندسه ۱۴۱ منطقه در این snapshot به دلیل شرایط استفاده بازنشر نشده است.",
};

export const backlog = [
  { id:"R-001", area:"مناطق", task:"دریافت dataset رسمی WDPA/Protected Planet برای ایران و تطبیق با فهرست DOE", output:"جدول کامل مناطق + مرز + metadata", source:"Protected Planet + DOE", priority:"خیلی بالا", status:"انجام‌نشده", risk:"شرایط استفاده و تاریخ dataset ثبت شود." },
  { id:"R-002", area:"تالاب‌ها", task:"دریافت فهرست کامل RSIS ایران، RIS و spatial data", output:"جدول سایت‌های رامسر", source:"Ramsar RSIS", priority:"بالا", status:"انجام‌نشده", risk:"وضعیت Montreux Record نیز بررسی شود." },
  { id:"R-003", area:"گونه‌ها", task:"واکشی assessment جاری گونه‌های شاخص و ثبت assessment date/version", output:"پروفایل گونه معتبر", source:"IUCN Red List API/site", priority:"خیلی بالا", status:"انجام‌نشده", risk:"وضعیت زیرگونه و جمعیت محلی تفکیک شود." },
  { id:"R-004", area:"گونه‌ها", task:"واردسازی چک‌لیست پرندگان ایران با license و شناسه taxon", output:"جدول birds", source:"GBIF dataset", priority:"بالا", status:"انجام‌نشده", risk:"نام فارسی و scientificName با backbone کنترل شود." },
  { id:"R-005", area:"قانون ایران", task:"مرور قوانین محیط زیست، مناطق چهارگانه، شکار و صید، ارزیابی اثرات و مالکیت داده", output:"Legal matrix", source:"منابع رسمی ایران", priority:"خیلی بالا", status:"انجام‌نشده", risk:"برای ادعای credit/offset تعیین‌کننده است." },
  { id:"R-006", area:"بازار", task:"فهرست روش‌شناسی‌ها و پروژه‌های فعال جهانی با وضعیت واقعی issuance", output:"Market landscape", source:"BCA/IAPB + registries", priority:"بالا", status:"انجام‌نشده", risk:"از فهرست‌های بازاریابی بدون رجیستری مستقل پرهیز شود." },
  { id:"R-007", area:"روش‌شناسی", task:"طراحی taxonomy مداخلات ایران: forest, wetland, rangeland, marine, species", output:"Methodology scopes v0.1", source:"CBD/IUCN + متخصصان ایران", priority:"خیلی بالا", status:"انجام‌نشده", risk:"یک metric واحد برای همه scopeها نسازیم." },
  { id:"R-008", area:"حکمرانی", task:"طراحی سیاست تعارض منافع، شکایت، تجدیدنظر و disclosure", output:"Governance policy draft", source:"BCA principles / assurance standards", priority:"بالا", status:"انجام‌نشده", risk:"مالک پلتفرم نباید هم‌زمان ممیز نهایی پروژه خود باشد." },
  { id:"R-009", area:"امنیت داده", task:"طبقه‌بندی داده گونه حساس و سیاست انتشار مختصات", output:"Data sensitivity policy", source:"GBIF guidance / conservation practice", priority:"خیلی بالا", status:"انجام‌نشده", risk:"مکان گونه‌های در معرض شکار/قاچاق عمومی نشود." },
  { id:"R-010", area:"پایلوت", task:"انتخاب یک تالاب و یک زیست‌بوم خشکی با شریک علمی و داده تاریخی", output:"Pilot shortlist + readiness score", source:"منابع رسمی/علمی مرتبط", priority:"خیلی بالا", status:"انجام‌نشده", risk:"انتخاب بر اساس دسترسی داده، مجوز و ظرفیت پایش باشد." },
];

export const collections = {
  sources: { title:"منابع", description:"منابع رسمی، علمی و راهنماهای مرجع", items:sources },
  datasets: { title:"دیتاست‌ها", description:"دیتاست‌های پایه و گونه‌ای قابل ردیابی", items:datasets },
  species: { title:"گونه‌های شاخص", description:"رکوردهای اولیه با تأکید بر حساسیت مکانی و وضعیت اعتبارسنجی", items:species },
  areas: { title:"مناطق", description:"نمونه رکوردهای مناطق و designationهای رسمی", items:areas },
  wetlands: { title:"تالاب‌های رامسر", description:"۱۷ رکوردی که جزئیاتشان مستقلاً از منابع رسمی تأیید شده است", items:wetlands },
  indicators: { title:"شاخص‌ها", description:"شاخص‌های پژوهشی اولیه برای سنجش، پایش و ممیزی", items:indicators },
  glossary: { title:"واژه‌نامه", description:"تعریف‌های کاری و تفکیک مفاهیم کلیدی", items:glossary },
  quality: { title:"قواعد کیفیت داده", description:"قواعد الزام‌آور برای provenance، ادعا، حساسیت و مجوز", items:qualityRules },
  pilots: { title:"نامزدهای پایلوت", description:"نامزد تحقیق؛ نه پروژه ثبت‌شده یا تأییدشده", items:pilots },
  backlog: { title:"Backlog تحقیق", description:"کارهای پژوهشی باز و وضعیت آن‌ها", items:backlog },
};
