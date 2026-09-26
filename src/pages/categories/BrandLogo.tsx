/**
 * A parts brand's logo, or its name typed in bold when we have no logo file
 * yet. Logo files are listed in src/data/partBrandLogos.ts.
 */

import { PART_BRAND_LOGOS } from '../../data/partBrandLogos';

interface BrandLogoProps {
  name: string;
  /** Tailwind classes for the logo image size. */
  imageClass?: string;
  /** Tailwind classes for the typed name. */
  textClass?: string;
}

export default function BrandLogo({
  name,
  imageClass = 'max-h-12 max-w-[80%]',
  textClass = 'text-2xl',
}: BrandLogoProps) {
  const logo = PART_BRAND_LOGOS[name];
  if (logo) {
    return (
      <img
        src={logo}
        alt={`شعار ${name}`}
        loading="lazy"
        decoding="async"
        draggable={false}
        className={`${imageClass} w-auto object-contain select-none`}
      />
    );
  }
  return (
    <span dir="ltr" className={`${textClass} font-extrabold tracking-tight text-[#0e161f] font-sans leading-none`}>
      {name}
    </span>
  );
}
