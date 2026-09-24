/**
 * The part categories shown on the categories page.
 * Images live in public/images/categories/ (a .webp plus a .jpg fallback).
 * The order here is the order the cards appear on the site.
 */

import { PartCategory } from '../types';

export const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'transmission',
    titleAr: 'القير وناقل الحركة والدفرنس',
    titleEn: 'Gearbox, Transmission & Differential',
    examplesAr: 'مخ القير (Mechatronic / Valve Body)، كلتشات، عكوس، صوف وفلاتر أصلية',
    avgEstDays: '5-9 أيام',
    imageUrl: '/images/categories/gearbox.webp',
    fallbackImageUrl: '/images/categories/gearbox.jpg'
  },
  {
    id: 'engine',
    titleAr: 'المحرك وملحقاته والتيربو',
    titleEn: 'Engine, Accessories & Turbo',
    examplesAr: 'تيربوهات Garrett/BorgWarner، طرمبات بنزين ضغط عالي، كويلات، بخاخات',
    avgEstDays: '6-10 أيام',
    imageUrl: '/images/categories/engine-turbo.webp',
    fallbackImageUrl: '/images/categories/engine-turbo.jpg'
  },
  {
    id: 'suspension',
    titleAr: 'المساعدات ونظام التعليق الهوائي',
    titleEn: 'Shocks & Air Suspension',
    examplesAr: 'مساعدات هيدروليك/هوائية (Airmatic/Adaptive)، مقصات، أذرعة، كمبروسر هواء',
    avgEstDays: '5-9 أيام',
    imageUrl: '/images/categories/suspension.webp',
    fallbackImageUrl: '/images/categories/suspension.jpg'
  },
  {
    id: 'brakes',
    titleAr: 'أنظمة الفرامل والفحمات',
    titleEn: 'Brake Systems & Pads',
    examplesAr: 'فحمات كربون سيراميك، هوبات أصلية، كليبرات AMG/M، حساسات تيل',
    avgEstDays: '4-7 أيام',
    imageUrl: '/images/categories/brakes.webp',
    fallbackImageUrl: '/images/categories/brakes.jpg'
  },
  {
    id: 'electronics',
    titleAr: 'الكمبيوترات والحساسات والإضاءة',
    titleEn: 'Computers, Sensors & Lighting',
    examplesAr: 'شمعات Matrix LED / Laser، كمبيوترات وبرمجة، حساسات أكسجين ونوكس NOx',
    avgEstDays: '4-7 أيام',
    imageUrl: '/images/categories/electronics.webp',
    fallbackImageUrl: '/images/categories/electronics.jpg'
  },
  {
    id: 'cooling',
    titleAr: 'التبريد والرديتر والمكيف',
    titleEn: 'Cooling, Radiator & A/C',
    examplesAr: 'رديتر ماء ومكيف ألماني، طرمبة ماء إلكترونية، مراوح تبريد، ثيرموستات',
    avgEstDays: '4-8 أيام',
    imageUrl: '/images/categories/cooling.webp',
    fallbackImageUrl: '/images/categories/cooling.jpg'
  }
];
