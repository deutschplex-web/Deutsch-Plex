/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CarBrand, PartCategory } from '../types';

export const GERMAN_BRANDS: CarBrand[] = [
  {
    id: 'mercedes',
    nameAr: 'مرسيدس بنز',
    nameEn: 'Mercedes-Benz',
    country: 'ألمانيا 🇩🇪',
    logoSvg: 'M',
    wmiPrefixes: ['WDB', 'WDD', 'WDC', 'WMX', '4JG'],
    popularModels: ['S-Class (W222/W223)', 'E-Class (W213/W214)', 'C-Class (W205/W206)', 'G-Class (W463)', 'GLE / GLS', 'AMG GT']
  },
  {
    id: 'bmw',
    nameAr: 'بي إم دبليو',
    nameEn: 'BMW',
    country: 'ألمانيا 🇩🇪',
    logoSvg: 'B',
    wmiPrefixes: ['WBA', 'WBS', 'WBX', 'WBY', '5UX'],
    popularModels: ['7-Series (G11/G70)', '5-Series (G30/G60)', '3-Series (G20)', 'X5 / X7 (G05/G07)', 'M3 / M4 / M5', '8-Series Gran Coupé']
  },
  {
    id: 'audi',
    nameAr: 'أودي',
    nameEn: 'Audi',
    country: 'ألمانيا 🇩🇪',
    logoSvg: 'A',
    wmiPrefixes: ['WAU', 'WA1', 'WUA'],
    popularModels: ['A8 / S8', 'A6 / RS6 Avant', 'A7 / RS7 Sportback', 'Q7 / Q8 / RSQ8', 'A4 / S4', 'e-tron GT']
  },
  {
    id: 'porsche',
    nameAr: 'بورش',
    nameEn: 'Porsche',
    country: 'ألمانيا 🇩🇪',
    logoSvg: 'P',
    wmiPrefixes: ['WP0', 'WP1'],
    popularModels: ['911 Carrera / Turbo / GT3', 'Panamera / GTS', 'Cayenne / Coupe', 'Macan GTS', 'Taycan Turbo', '718 Cayman / Boxster']
  },
  {
    id: 'volkswagen',
    nameAr: 'فولكس فاجن',
    nameEn: 'Volkswagen',
    country: 'ألمانيا 🇩🇪',
    logoSvg: 'V',
    wmiPrefixes: ['WVW', 'WVG', 'WV1'],
    popularModels: ['Touareg V8/V6', 'Arteon R-Line', 'Golf R / GTI', 'Tiguan R-Line', 'Passat']
  }
];

export const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'brakes',
    titleAr: 'أنظمة الفرامل والفحمات',
    titleEn: 'Brakes & Rotors',
    iconName: 'Disc',
    examplesAr: 'فحمات كربون سيراميك، هوبات أصلية، كليبرات AMG/M، حساسات تيل',
    avgEstDays: '4-7 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'suspension',
    titleAr: 'المساعدات ونظام التعليق الهوائي',
    titleEn: 'Air Suspension & Struts',
    iconName: 'Sliders',
    examplesAr: 'مساعدات هيدروليك/هوائية (Airmatic/Adaptive)، مقصات، أذرعة، كمبروسر هواء',
    avgEstDays: '5-9 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'engine',
    titleAr: 'المحرك وملحقاته والتيربو',
    titleEn: 'Engine & Turbos',
    iconName: 'Zap',
    examplesAr: 'تيربوهات Garrett/BorgWarner، طرمبات بنزين ضغط عالي، كويلات، بخاخات',
    avgEstDays: '6-10 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'transmission',
    titleAr: 'القير وناقل الحركة والدفرنس',
    titleEn: 'Transmission & Drivetrain',
    iconName: 'Cpu',
    examplesAr: 'مخ القير (Mechatronic / Valve Body)، كلتشات، عكوس، صوف وفلاتر أصلية',
    avgEstDays: '5-9 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cooling',
    titleAr: 'التبريد والرديتر والمكيف',
    titleEn: 'Cooling & Radiators',
    iconName: 'Wind',
    examplesAr: 'رديتر ماء ومكيف ألماني، طرمبة ماء إلكترونية، مراوح تبريد، ثيرموستات',
    avgEstDays: '4-8 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'electronics',
    titleAr: 'الكمبيوترات والحساسات والإضاءة',
    titleEn: 'ECU & Matrix Lighting',
    iconName: 'Shield',
    examplesAr: 'شمعات Matrix LED / Laser، كمبيوترات وبرمجة، حساسات أكسجين ونوكس NOx',
    avgEstDays: '4-7 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'body',
    titleAr: 'قطع البودي والأبواب والديكورات',
    titleEn: 'Body & Exterior',
    iconName: 'Truck',
    examplesAr: 'صدامات AMG/M-Tech، كبوت ألمنيوم أصلي، مرايا، زجاج أمامي معزول حرارياً',
    avgEstDays: '7-12 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'maintenance',
    titleAr: 'باقات الصيانة الدورية والفلاتر',
    titleEn: 'Maintenance Kits',
    iconName: 'CheckCircle2',
    examplesAr: 'فلاتر هواء وزيت ومكيف Mann/Mahle أصلية، بواجي بلاتينيوم، سيور دينامو',
    avgEstDays: '3-6 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=800&auto=format&fit=crop'
  }
];

export const SAMPLE_VINS = [
  {
    vin: 'WDD2230621A049821',
    label: 'مرسيدس S-Class (W223)',
    brand: 'Mercedes-Benz',
    year: 2022
  },
  {
    vin: 'WBA13AY06NFS82914',
    label: 'بي إم دبليو M5 Competition',
    brand: 'BMW',
    year: 2022
  },
  {
    vin: 'WAUZZZF27N1049182',
    label: 'أودي RS6 Avant Performance',
    brand: 'Audi',
    year: 2022
  },
  {
    vin: 'WP1ZZZ9Y4MDA82015',
    label: 'بورش كايين تيربو (Cayenne Turbo)',
    brand: 'Porsche',
    year: 2021
  }
];

export const SAUDI_CITIES = [
  'الرياض',
  'جدة',
  'الدمام / الخبر',
  'مكة المكرمة',
  'المدينة المنورة',
  'القصيم (بريدة / عنيزة)',
  'الأحساء',
  'أبها / خميس مشيط',
  'تبوك',
  'حائل',
  'نجران / جيزان',
  'الجبيل / ينبع'
];

export const FAQS = [
  {
    q: 'كيف أضمن مطابقة القطعة لسيارتي بنسبة 100%؟',
    a: 'نعتمد في DeutschPlex بنسبة 100% على رقم الهيكل (VIN) المكون من 17 خانة. نقوم بإدخال الرقم في الكتالوج الإلكتروني الرسمي للمصنع الألماني (Mercedes EPC، BMW ETK، Porsche PET، Audi ETKA)، مما يعطينا كود القطعة المحدد بالميلّيمتر مع رقم الإصدار الأحدث من المصنع بدون أي احتمال للخطأ.'
  },
  {
    q: 'هل القطع أصلية وكالة (Genuine) أم تجارية (Aftermarket)؟',
    a: 'نحن لا نتعامل مطلقاً مع القطع المقلدة أو مجهولة المصدر. نوفر خيارين فقط: الأول قطع أصلية معتمدة من الوكالة (Genuine OEM) بالكرتون والباركود الرسمي، والثاني قطع من كبرى الشركات الألمانية المصنعة للقطع للوكالة مباشرة (مثل Bosch, Brembo, Bilstein, Lemförder, Mahle, Sachs) بجودة مطابقة للوكالة وتوفير مالي يصل إلى 45%.'
  },
  {
    q: 'كم تستغرق مدة الشحن من ألمانيا إلى المملكة العربية السعودية؟',
    a: 'نوفر خيارين للشحن: الشحن الجوي السريع عبر DHL Express المباشر من فرانكفورت إلى باب منزلك أو ورشتك خلال 3 إلى 7 أيام عمل. وخيار الشحن الجوي القياسي الاقتصادي خلال 8 إلى 14 يوم عمل.'
  },
  {
    q: 'ما هي تفاصيل ضمان 24 شهر من ألمانيا؟',
    a: 'استورد قطع غيار سيارتك من ألمانيا بثقة تامة. نحن نضمن لك جودة القطع التي نوفرها عبر ضمان حقيقي لمدة 24 شهراً يغطي العيوب المصنعية للقطع الميكانيكية والكهربائية. في حال وجود أي خلل مصنعي، نقوم بدورنا كوسيط لضمان استبدال القطعة لك بسلاسة.'
  },
  {
    q: 'كيف تتم عملية الدفع والفوترة الرسمية؟',
    a: 'بعد تأكيد الطلب برقم الهيكل، نرسل لك فاتورة إلكترونية مفصلة تشمل رقم القطعة، السعر بالريال السعودي، تكلفة الشحن والجمارك وضريبة القيمة المضافة، مع إمكانية الدفع عبر مدى، فيزا، ماستركارد، أو التحويل البنكي لحساب المؤسسة.'
  }
];
