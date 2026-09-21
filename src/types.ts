/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CarBrandId = 'mercedes' | 'bmw' | 'audi' | 'porsche' | 'volkswagen';

export interface CarBrand {
  id: CarBrandId;
  nameAr: string;
  nameEn: string;
  country: string;
  logoSvg: string;
  logoUrl?: string;
  wmiPrefixes: string[]; // e.g. WDB, WDC, WDD for Mercedes
  popularModels: string[];
}

export type PartCategoryId = 
  | 'brakes' 
  | 'suspension' 
  | 'engine' 
  | 'transmission' 
  | 'electronics' 
  | 'body' 
  | 'cooling' 
  | 'maintenance';

export interface PartCategory {
  id: PartCategoryId;
  titleAr: string;
  titleEn: string;
  iconName: string;
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
  wmi: string;      // Characters 1-3
  vds: string;      // Characters 4-9
  vis: string;      // Characters 10-17
  checkDigit: string; // Character 9
  yearChar: string;   // Character 10
  plantCode: string;  // Character 11
  notesAr?: string[];
}

export type ShippingSpeed = 'express' | 'standard';

export type PageId = 
  | 'home' 
  | 'categories' 
  | 'order' 
  | 'tracker' 
  | 'about' 
  | 'features' 
  | 'process' 
  | 'faq';

export interface QuoteRequest {
  id: string;
  createdAt: string;
  brand: string;
  model: string;
  year: string;
  vin: string;
  category: PartCategoryId;
  partDetails: string;
  partNumber?: string;
  customerName: string;
  phoneNumber: string;
  city: string;
  shippingSpeed: ShippingSpeed;
  estimatedPriceRangeSar?: string;
  estimatedDays?: string;
  status: 'received' | 'decoding' | 'pricing' | 'confirmed' | 'shipped' | 'delivered';
}

export interface TrackingStep {
  titleAr: string;
  titleEn: string;
  descAr: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
  locationAr?: string;
}
