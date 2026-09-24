# DeutschPlex Image Repository

مستودع الصور المنظم لمشروع **DeutschPlex (دويتش بليكس)** لقطع غيار السيارات الألمانية الأصلية.

---

## 📁 هيكلية المجلدات / Directory Structure

```text
public/images/
│
├── car-brands/            # شعارات ماركات السيارات الألمانية (Mercedes, BMW, Audi, Porsche, Volkswagen)
│   ├── README.md          # توثيق شعارات الماركات
│   ├── mercedes.png
│   ├── bmw.png
│   ├── audi.png
│   ├── porsche.png
│   └── volkswagen.png
│
├── store-logo/            # شعار المتجر الرسمي الجديد ثنائي اللغة (DeutschPlex / دويتش بليكس)
│   ├── README.md          # توثيق شعار المتجر وصيغ الاستخدام
│   ├── deutschplex-logo.svg       # الشعار الكامل (فيكتور عالي الدقة)
│   ├── deutschplex-logo.png       # الشعار الكامل بصيغة PNG
│   ├── deutschplex-horizontal.svg # الشعار الأفقي للشريط العلوي
│   ├── deutschplex-horizontal.png # الشعار الأفقي PNG
│   ├── deutschplex-emblem.svg     # الشارة الميكانيكية السداسية فقط
│   └── deutschplex-emblem.png     # الشارة السداسية PNG
│
└── future-pictures/       # صور السيارات، قطع الغيار، والبنرات المستقبلية
    ├── README.md          # إرشادات إضافة الصور المستقبلية
    ├── touareg-8439.jpg
    └── touareg-8443.jpg
```

---

## 🚀 كيفية استخدام الصور في التطبيق / How to Use Images

### 1. شعار المتجر الرسمي (Store Logo)
يمكن استخدام مكون الشعار التفاعلي مباشرة:
```tsx
import DeutschPlexLogo from '../components/DeutschPlexLogo';

// الشعار الأفقي (للهيدر والفوتر)
<DeutschPlexLogo variant="horizontal" size="sm" />

// الشارة الميكانيكية المنفردة
<DeutschPlexLogo variant="emblem" size="md" />

// البطاقة الكاملة ثنائية اللغة
<DeutschPlexLogo variant="card" />
```
أو عبر الرابط المباشر للصور:
```html
<img src="/images/store-logo/deutschplex-logo.svg" alt="DeutschPlex Logo" />
```

### 2. شعارات ماركات السيارات (Car Brands)
```html
<img src="/images/car-brands/porsche.png" alt="Porsche" />
<img src="/images/car-brands/mercedes.png" alt="Mercedes-Benz" />
```

### 3. صور السيارات المستقبلية (Future Pictures)
ضع أي صورة جديدة في `public/images/future-pictures/` واستدعها عبر:
```html
<img src="/images/future-pictures/your-car-photo.webp" alt="Car showcase" />
```
