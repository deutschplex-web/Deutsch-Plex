/**
 * Shared TypeScript types used across the site.
 */

/** Every page of the site. The id is also the URL hash (e.g. /#order). */
export type PageId = 'home' | 'categories' | 'order' | 'about' | 'process' | 'faq';

export type CarBrandId = 'mercedes' | 'bmw' | 'audi' | 'porsche' | 'volkswagen';

export interface CarBrand {
  id: CarBrandId;
  nameAr: string;
  nameEn: string;
  popularModels: string[];
}

export type PartCategoryId =
  | 'transmission'
  | 'engine'
  | 'suspension'
  | 'brakes'
  | 'electronics'
  | 'cooling';

export interface PartCategory {
  id: PartCategoryId;
  titleAr: string;
  titleEn: string;
  examplesAr: string;
  avgEstDays: string;
  imageUrl: string;
  fallbackImageUrl: string;
}

export interface VinAnalysis {
  vin: string;
  isValidLength: boolean;
  hasInvalidChars: boolean;
  isValid: boolean;
  brand?: CarBrandId;
  brandName?: string;
  originCountry?: string;
  modelYear?: number;
  wmi: string; // Characters 1-3
  vds: string; // Characters 4-9
  vis: string; // Characters 10-17
  checkDigit: string; // Character 9
  yearChar: string; // Character 10
  plantCode: string; // Character 11
  notesAr?: string[];
}

/** A quote request submitted through the order form. */
export interface QuoteRequest {
  id: string;
  createdAt: string;
  brand: string;
  model: string;
  vin: string;
  category?: PartCategoryId;
  partDetails: string;
  customerName: string;
  phoneNumber: string;
}
