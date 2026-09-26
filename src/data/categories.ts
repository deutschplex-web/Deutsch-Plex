/**
 * The part categories shown on the categories page.
 * Images live in public/images/categories/ (a .webp plus a .jpg fallback).
 * examplesAr is the short parts summary shown at the top of each category.
 * The brands inside each category live in src/data/brandProfiles.ts.
 * The order here is the order the cards appear on the site.
 */

import { PartCategory } from '../types';

export const PART_CATEGORIES: PartCategory[] = [
  {
    id: 'transmission',
    titleAr: 'القير وناقل الحركة والدفرنس',
    titleEn: 'Gearbox, Transmission & Differential',
    examplesAr: 'مخ القير (الميكاترونيك)، كلتشات وحدافات، محوّلات العزم، كرتير القير بفلتر',
    avgEstDays: '5-9 أيام',
    imageUrl: '/images/categories/gearbox.webp',
    fallbackImageUrl: '/images/categories/gearbox.jpg'
  },
  {
    id: 'engine',
    titleAr: 'المحرك وملحقاته والتيربو',
    titleEn: 'Engine, Accessories & Turbo',
    examplesAr: 'بخاخات البنزين والديزل، طرمبات الضغط العالي، طرمبات البنزين، كويلات الإشعال، حساسات المحرك',
    avgEstDays: '6-10 أيام',
    imageUrl: '/images/categories/engine-turbo.webp',
    fallbackImageUrl: '/images/categories/engine-turbo.jpg'
  },
  {
    id: 'suspension',
    titleAr: 'المساعدات ونظام التعليق الهوائي',
    titleEn: 'Shocks & Air Suspension',
    examplesAr: 'مساعدات هوائية وقِرَب هواء، كمبروسرات، مساعدات، مقصات وأذرعة ومفاصل كروية',
    avgEstDays: '5-9 أيام',
    imageUrl: '/images/categories/suspension.webp',
    fallbackImageUrl: '/images/categories/suspension.jpg'
  },
  {
    id: 'brakes',
    titleAr: 'أنظمة الفرامل والفحمات',
    titleEn: 'Brake Systems & Pads',
    examplesAr: 'فحمات وهوبات، حساسات تآكل الفحمات، كليبرات AMG وM الرياضية',
    avgEstDays: '4-7 أيام',
    imageUrl: '/images/categories/brakes.webp',
    fallbackImageUrl: '/images/categories/brakes.jpg'
  },
  {
    id: 'electronics',
    titleAr: 'الكمبيوترات والحساسات والإضاءة',
    titleEn: 'Computers, Sensors & Lighting',
    examplesAr: 'كمبيوترات المحرك، وحدات ABS/ESP، حساسات سرعة العجلات والأكسجين، شمعات LED وMatrix',
    avgEstDays: '4-7 أيام',
    imageUrl: '/images/categories/electronics.webp',
    fallbackImageUrl: '/images/categories/electronics.jpg'
  },
  {
    id: 'cooling',
    titleAr: 'التبريد والرديتر والمكيف',
    titleEn: 'Cooling, Radiator & A/C',
    examplesAr: 'رديترات، ثيرموستات، مراوح، كمبروسر المكيف، طرمبات الماء، ليات وفلنجات',
    avgEstDays: '4-8 أيام',
    imageUrl: '/images/categories/cooling.webp',
    fallbackImageUrl: '/images/categories/cooling.jpg'
  }
];
