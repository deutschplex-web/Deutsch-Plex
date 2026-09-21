/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BrandLogoAsset {
  id: string;
  nameAr: string;
  nameEn: string;
  png: string;
  svg?: string;
  aspectRatio: 'square' | 'wide' | 'shield';
  alt: string;
}

export const BRAND_LOGOS: Record<string, BrandLogoAsset> = {
  mercedes: {
    id: 'mercedes',
    nameAr: 'مرسيدس بنز',
    nameEn: 'Mercedes-Benz',
    png: '/images/logos/mercedes.png',
    svg: '/images/logos/mercedes.svg',
    aspectRatio: 'square',
    alt: 'شعار مرسيدس بنز الرسمي ثلاثي الأبعاد Mercedes-Benz',
  },
  'mercedes-benz': {
    id: 'mercedes',
    nameAr: 'مرسيدس بنز',
    nameEn: 'Mercedes-Benz',
    png: '/images/logos/mercedes.png',
    svg: '/images/logos/mercedes.svg',
    aspectRatio: 'square',
    alt: 'شعار مرسيدس بنز الرسمي ثلاثي الأبعاد Mercedes-Benz',
  },
  bmw: {
    id: 'bmw',
    nameAr: 'بي إم دبليو',
    nameEn: 'BMW',
    png: '/images/logos/bmw.png',
    svg: '/images/logos/bmw.svg',
    aspectRatio: 'square',
    alt: 'شعار بي إم دبليو الرسمي BMW',
  },
  audi: {
    id: 'audi',
    nameAr: 'أودي',
    nameEn: 'Audi',
    png: '/images/logos/audi.png',
    svg: '/images/logos/audi.svg',
    aspectRatio: 'wide',
    alt: 'شعار حلقات أودي الأربع الرسمية Audi',
  },
  porsche: {
    id: 'porsche',
    nameAr: 'بورش',
    nameEn: 'Porsche',
    png: '/images/logos/porsche.png',
    aspectRatio: 'shield',
    alt: 'درع بورش الرسمي الذهبي Porsche Crest',
  },
  volkswagen: {
    id: 'volkswagen',
    nameAr: 'فولكس فاجن',
    nameEn: 'Volkswagen',
    png: '/images/logos/volkswagen.png',
    svg: '/images/logos/volkswagen.svg',
    aspectRatio: 'square',
    alt: 'شعار فولكس فاجن الرسمي Volkswagen',
  },
  vw: {
    id: 'volkswagen',
    nameAr: 'فولكس فاجن',
    nameEn: 'Volkswagen',
    png: '/images/logos/volkswagen.png',
    svg: '/images/logos/volkswagen.svg',
    aspectRatio: 'square',
    alt: 'شعار فولكس فاجن الرسمي Volkswagen',
  },
};

export function getBrandLogo(brandId: string): BrandLogoAsset {
  const normalized = (brandId || '').toLowerCase().trim();
  return BRAND_LOGOS[normalized] || BRAND_LOGOS.mercedes;
}
