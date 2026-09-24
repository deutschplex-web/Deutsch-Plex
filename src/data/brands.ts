/**
 * The German car brands we supply parts for.
 * Logos live in src/data/brandLogos.ts and public/images/car-brands/.
 */

import { CarBrand } from '../types';

export const GERMAN_BRANDS: CarBrand[] = [
  {
    id: 'mercedes',
    nameAr: 'مرسيدس بنز',
    nameEn: 'Mercedes-Benz',
    popularModels: ['S-Class (W222/W223)', 'E-Class (W213/W214)', 'C-Class (W205/W206)', 'G-Class (W463)', 'GLE / GLS', 'AMG GT']
  },
  {
    id: 'bmw',
    nameAr: 'بي إم دبليو',
    nameEn: 'BMW',
    popularModels: ['7-Series (G11/G70)', '5-Series (G30/G60)', '3-Series (G20)', 'X5 / X7 (G05/G07)', 'M3 / M4 / M5', '8-Series Gran Coupé']
  },
  {
    id: 'audi',
    nameAr: 'أودي',
    nameEn: 'Audi',
    popularModels: ['A8 / S8', 'A6 / RS6 Avant', 'A7 / RS7 Sportback', 'Q7 / Q8 / RSQ8', 'A4 / S4', 'e-tron GT']
  },
  {
    id: 'porsche',
    nameAr: 'بورش',
    nameEn: 'Porsche',
    popularModels: ['911 Carrera / Turbo / GT3', 'Panamera / GTS', 'Cayenne / Coupe', 'Macan GTS', 'Taycan Turbo', '718 Cayman / Boxster']
  },
  {
    id: 'volkswagen',
    nameAr: 'فولكس فاجن',
    nameEn: 'Volkswagen',
    popularModels: ['Touareg V8/V6', 'Arteon R-Line', 'Golf R / GTI', 'Tiguan R-Line', 'Passat']
  }
];
