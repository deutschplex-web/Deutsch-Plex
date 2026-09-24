/**
 * The DeutschPlex logo.
 *
 * - "horizontal": emblem + bilingual name (navbar, footer). A light-text
 *   version is used automatically in dark mode.
 * - "emblem": the hexagon badge on its own.
 *
 * Image files live in public/images/brand/.
 */

import { useTheme } from '../../context/ThemeContext';

interface DeutschPlexLogoProps {
  variant?: 'horizontal' | 'emblem';
  /** Tailwind height classes, e.g. "h-10 sm:h-12". */
  heightClass?: string;
  className?: string;
}

const BRAND_DIR = '/images/brand';

export default function DeutschPlexLogo({
  variant = 'horizontal',
  heightClass,
  className = '',
}: DeutschPlexLogoProps) {
  const { isDarkMode } = useTheme();

  const file =
    variant === 'emblem'
      ? 'emblem'
      : isDarkMode
        ? 'logo-compact-dark'
        : 'logo-compact-light';

  const height = heightClass ?? (variant === 'emblem' ? 'h-12' : 'h-10 sm:h-12');

  return (
    <picture className={`inline-flex shrink-0 ${className}`}>
      <source srcSet={`${BRAND_DIR}/${file}.webp`} type="image/webp" />
      <img
        src={`${BRAND_DIR}/${file}.png`}
        alt="DeutschPlex - دويتش بليكس"
        className={`${height} w-auto select-none`}
        draggable={false}
      />
    </picture>
  );
}
