/**
 * Logo files for the parts brands shown inside each category.
 *
 * Every brand already has a slot. To add a logo, just put the file in
 * public/images/part-brands/ with the name listed below. No code change is
 * needed. The site tries .svg first, then .png, then .webp.
 *
 *   ZF → zf.svg (or zf.png / zf.webp)
 *
 * Until the file is there, the brand name is shown in bold type instead.
 * Logos sit on a white tile, so a transparent background looks best.
 */

export const PART_BRAND_LOGO_DIR = '/images/part-brands';

/** File name (without extension) for each brand, keyed by the name in brandProfiles.ts. */
export const PART_BRAND_LOGO_FILES: Record<string, string> = {
  // Gearbox
  'ZF': 'zf',
  'Sachs': 'sachs',
  'LuK': 'luk',
  // Engine & electronics
  'Bosch': 'bosch',
  'VDO': 'vdo',
  'Hella': 'hella',
  // Suspension
  'Aerosus': 'aerosus',
  'Bilstein': 'bilstein',
  'Lemförder': 'lemforder',
  'Meyle': 'meyle',
  'Febi': 'febi',
  // Brakes
  'Textar': 'textar',
  'ATE': 'ate',
  'Zimmermann': 'zimmermann',
  'Brembo': 'brembo',
  // Cooling
  'Mahle Behr': 'mahle',
  'Pierburg': 'pierburg',
  'Cohline': 'cohline',
};

export const PART_BRAND_LOGO_EXTENSIONS = ['svg', 'png', 'webp'];
