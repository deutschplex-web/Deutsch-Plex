/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ShowcaseVehicle {
  id: 'porsche' | 'bmw' | 'audi' | 'mercedes' | 'all';
  brandNameAr: string;
  brandNameEn: string;
  modelHighlightAr: string;
  modelHighlightEn: string;
  originCityAr: string;
  originCityEn: string;
  vinPrefix: string;
  sampleVin: string;
  engineSpecAr: string;
  accelerationAr: string;
  topSpeedAr: string;
  primaryCategoryAr: string;
  bgImageUrl: string;
  taglineAr: string;
  badgeLabelAr: string;
  badgeColor: string;
}

export const HERO_SHOWCASE_DATA: ShowcaseVehicle[] = [
  {
    id: 'porsche',
    brandNameAr: 'بورش',
    brandNameEn: 'Porsche',
    modelHighlightAr: '911 GT3 RS & Turbo S',
    modelHighlightEn: '911 GT3 RS / Cayman / Panamera',
    originCityAr: 'شتوتغارت - زوفنهاوزن 🇩🇪',
    originCityEn: 'Stuttgart-Zuffenhausen',
    vinPrefix: 'WP0 / WP1',
    sampleVin: 'WP1ZZZ9Y4MDA82015',
    engineSpecAr: '4.0L Boxer 6 تنفس طبيعي / Twin-Turbo',
    accelerationAr: '0-100 كم/س: 3.2 ث',
    topSpeedAr: 'السرعة: 318 كم/س',
    primaryCategoryAr: 'فرامل كربون سيراميك PCCB، أنظمة PDK، مساعدات PASM، تيربوهات VTG',
    bgImageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2000&auto=format&fit=crop',
    taglineAr: 'هندسة حلبات السباق الألمانية - دقة مطلقة لكل مسمار ومساعد',
    badgeLabelAr: 'Porsche Genuine & Weissach Spec',
    badgeColor: '#b88655'
  },
  {
    id: 'bmw',
    brandNameAr: 'بي إم دبليو',
    brandNameEn: 'BMW M-Power',
    modelHighlightAr: 'M4 Competition & M5 CS',
    modelHighlightEn: 'M3 / M4 / M5 / X5M / 7-Series',
    originCityAr: 'ميونخ - بافاريا 🇩🇪',
    originCityEn: 'Munich, Bavaria',
    vinPrefix: 'WBA / WBS',
    sampleVin: 'WBA13AY06NFS82914',
    engineSpecAr: 'S58 3.0L TwinPower Turbo / 4.4L V8 M TwinTurbo',
    accelerationAr: '0-100 كم/س: 3.4 ث',
    topSpeedAr: 'السرعة: 305 كم/س',
    primaryCategoryAr: 'دفرنس M الرياضي، كلتشات DKG، كويلات وشمعات الليزر، طرمبات بنزين الضغط العالي',
    bgImageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000&auto=format&fit=crop',
    taglineAr: 'قمة ديناميكية القيادة - قطع M Power الأصلية بأعلى معايير بافاريا',
    badgeLabelAr: 'BMW M Heritage & OEM Spec',
    badgeColor: '#1d63b8'
  },
  {
    id: 'audi',
    brandNameAr: 'أودي',
    brandNameEn: 'Audi Sport',
    modelHighlightAr: 'RS6 Avant & RS7 Sportback',
    modelHighlightEn: 'RS6 / RS7 / R8 V10 / RSQ8',
    originCityAr: 'إنغولشتات - ألمانيا 🇩🇪',
    originCityEn: 'Ingolstadt, Germany',
    vinPrefix: 'WAU / WUA',
    sampleVin: 'WAUZZZF27N1049182',
    engineSpecAr: '4.0L V8 TFSI Twin-Turbo Quattro',
    accelerationAr: '0-100 كم/س: 3.6 ث',
    topSpeedAr: 'السرعة: 305 كم/س',
    primaryCategoryAr: 'نظام الدفع الرباعي Quattro، مساعدات DRC الهيدروليكية، إضاءات Matrix Laser، تيربوهات أصلية',
    bgImageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2000&auto=format&fit=crop',
    taglineAr: 'التقدم عبر التكنولوجيا - قطع غيار أودي الأصلية المعتمدة رقمياً',
    badgeLabelAr: 'Audi Sport Quattro Genuine',
    badgeColor: '#a71d2a'
  },
  {
    id: 'mercedes',
    brandNameAr: 'مرسيدس بنز',
    brandNameEn: 'Mercedes-AMG',
    modelHighlightAr: 'AMG GT & S-Class W223',
    modelHighlightEn: 'AMG GT / Project ONE / S-Class / G-Wagon',
    originCityAr: 'أفالترباخ / شتوتغارت 🇩🇪',
    originCityEn: 'Affalterbach / Stuttgart',
    vinPrefix: 'WDD / W1K / WDB',
    sampleVin: 'WDD2230621A049821',
    engineSpecAr: 'Handcrafted 4.0L V8 Biturbo AMG / V12 Maybach',
    accelerationAr: '0-100 كم/س: 3.2 ث',
    topSpeedAr: 'السرعة: 315 كم/س',
    primaryCategoryAr: 'نظام التعليق الهوائي Airmatic / Magic Body، كمبيوترات وبرمجة، رديترات، كليبرات وفحمات AMG',
    bgImageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
    taglineAr: 'الأفضل أو لا شيء - قطع أصلية ومطابقة 100% بأرقام الهيكل الرسمية',
    badgeLabelAr: 'Mercedes-Benz OEM & AMG Genuine',
    badgeColor: '#00d2be'
  }
];
