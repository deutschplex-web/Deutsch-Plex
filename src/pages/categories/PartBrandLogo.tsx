/**
 * A parts brand's logo (ZF, Bosch, ...). Looks for the file in
 * public/images/part-brands/ (see src/data/partBrandLogos.ts), trying
 * .svg, then .png, then .webp. If none exists yet it shows the brand name
 * in bold type, or nothing at all when fallback is "none".
 */

import { useState } from 'react';
import {
  PART_BRAND_LOGO_DIR,
  PART_BRAND_LOGO_EXTENSIONS,
  PART_BRAND_LOGO_FILES,
} from '../../data/partBrandLogos';

interface PartBrandLogoProps {
  name: string;
  /** Tailwind classes for the logo image size. */
  imageClass?: string;
  /** Tailwind classes for the typed name. */
  textClass?: string;
  /** What to show while there is no logo file: the typed name, or nothing. */
  fallback?: 'text' | 'none';
  /** Optional box drawn around the logo image (not around the typed name). */
  frameClass?: string;
}

export default function PartBrandLogo({
  name,
  imageClass = 'max-h-12 max-w-[80%]',
  textClass = 'text-2xl',
  fallback = 'text',
  frameClass,
}: PartBrandLogoProps) {
  const file = PART_BRAND_LOGO_FILES[name];
  const [attempt, setAttempt] = useState(0);
  const failed = !file || attempt >= PART_BRAND_LOGO_EXTENSIONS.length;

  if (failed) {
    if (fallback === 'none') return null;
    return (
      <span dir="ltr" className={`${textClass} font-extrabold tracking-tight text-[#0e161f] font-sans leading-none`}>
        {name}
      </span>
    );
  }

  const image = (
    <img
      key={attempt}
      src={`${PART_BRAND_LOGO_DIR}/${file}.${PART_BRAND_LOGO_EXTENSIONS[attempt]}`}
      alt={`شعار ${name}`}
      decoding="async"
      draggable={false}
      onError={() => setAttempt((a) => a + 1)}
      className={`${imageClass} w-auto object-contain select-none`}
    />
  );
  return frameClass ? <div className={frameClass}>{image}</div> : image;
}
