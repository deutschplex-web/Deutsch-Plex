/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VinAnalysis, CarBrandId } from '../types';

const YEAR_MAP: Record<string, number> = {
  'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014,
  'F': 2015, 'G': 2016, 'H': 2017, 'J': 2018, 'K': 2019,
  'L': 2020, 'M': 2021, 'N': 2022, 'P': 2023, 'R': 2024,
  'S': 2025, 'T': 2026, 'V': 2027, 'W': 2028, 'X': 2029,
  'Y': 2030, '1': 2001, '2': 2002, '3': 2003, '4': 2004,
  '5': 2005, '6': 2006, '7': 2007, '8': 2008, '9': 2009,
};

export function decodeVin(rawVin: string): VinAnalysis {
  const cleaned = (rawVin || '').trim().toUpperCase().replace(/\s+/g, '');
  const isValidLength = cleaned.length === 17;
  const hasInvalidChars = /[IOQ]/.test(cleaned);

  const wmi = cleaned.slice(0, 3);
  const vds = cleaned.slice(3, 9);
  const vis = cleaned.slice(9, 17);
  const checkDigit = cleaned.length >= 9 ? cleaned[8] : '';
  const yearChar = cleaned.length >= 10 ? cleaned[9] : '';
  const plantCode = cleaned.length >= 11 ? cleaned[10] : '';

  let brand: CarBrandId | undefined;
  let brandName = 'سيارة غير محددة';
  let originCountry = 'غير محدد';
  const notesAr: string[] = [];

  // Match WMI to German Brands
  if (wmi.startsWith('WD') || wmi.startsWith('WM') || wmi === '4JG') {
    brand = 'mercedes';
    brandName = 'مرسيدس بنز (Mercedes-Benz)';
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('مصنع شتوتغارت / بريمن - كود معتمد لدى دايملر');
  } else if (wmi.startsWith('WB') || wmi === '5UX') {
    brand = 'bmw';
    brandName = 'بي إم دبليو (BMW)';
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('مصنع ميونخ / دينغولفينغ - كتالوج ETK الرسمي');
  } else if (wmi.startsWith('WA') || wmi === 'WUA') {
    brand = 'audi';
    brandName = 'أودي (Audi)';
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('مصنع إنغولشتات / نيكارسولم - كتالوج ETKA الرسمي');
  } else if (wmi.startsWith('WP')) {
    brand = 'porsche';
    brandName = 'بورش (Porsche)';
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('مصنع تسوفنهاوزن / لايبزيغ - كتالوج PET الرسمي');
  } else if (wmi.startsWith('WV')) {
    brand = 'volkswagen';
    brandName = 'فولكس فاجن (Volkswagen)';
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('مصنع فولفسبورغ - كتالوج ETKA الرسمي');
  } else if (wmi.startsWith('W')) {
    originCountry = 'ألمانيا (Germany)';
    notesAr.push('الرمز W يثبت بلد المنشأ: جمهورية ألمانيا الاتحادية (Federal Republic of Germany)');
  }

  const modelYear = YEAR_MAP[yearChar];
  if (modelYear) {
    notesAr.push(`سنة الموديل المستخلصة من الخانة العاشرة: ${modelYear}`);
  }

  if (hasInvalidChars) {
    notesAr.push('تنبيه: أرقام الهيكل الرسمية لا تحتوي على الحروف (I, O, Q) لمنع الالتباس مع الأرقام (1, 0).');
  }

  const isValid = isValidLength && !hasInvalidChars && Boolean(brand || wmi.startsWith('W'));

  return {
    vin: cleaned,
    isValidLength,
    hasInvalidChars,
    isValid,
    brand,
    brandName,
    originCountry,
    modelYear,
    wmi,
    vds,
    vis,
    checkDigit,
    yearChar,
    plantCode,
    notesAr
  };
}
