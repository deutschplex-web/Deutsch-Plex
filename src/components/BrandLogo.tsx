/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CarBrandId } from '../types';
import { getBrandLogo } from '../data/brandLogos';
import { useTheme } from '../context/ThemeContext';

interface BrandLogoProps {
  brandId: CarBrandId | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showWordmark?: boolean;
  className?: string;
  animateOnHover?: boolean;
  isLightMode?: boolean;
}

export default function BrandLogo({
  brandId,
  size = 'md',
  showWordmark = false,
  className = '',
  animateOnHover = true,
  isLightMode: isLightModeProp,
}: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);
  const { isDarkMode } = useTheme();
  const isLightMode = isLightModeProp !== undefined ? isLightModeProp : !isDarkMode;

  // Normalize brand ID
  const id = (brandId || '').toLowerCase().trim();
  const brandData = getBrandLogo(id);

  // Dimension sizes in px
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 88,
  };
  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || 48);

  const containerMotionProps = animateOnHover
    ? {
        whileHover: { scale: 1.08, y: -2 },
        transition: { type: 'spring', stiffness: 350, damping: 18 },
      }
    : {};

  // Width & height adjustments based on emblem proportions
  let emblemWidth = pixelSize;
  let emblemHeight = pixelSize;

  if (brandData.aspectRatio === 'wide') {
    // Audi 4 rings 3D chrome emblem has a 2.86 : 1 horizontal aspect ratio
    emblemWidth = Math.round(pixelSize * 1.7);
    emblemHeight = Math.max(12, Math.round((pixelSize * 1.7) / 2.86));
  } else if (brandData.aspectRatio === 'shield') {
    // Porsche crest shield is taller vertically (approx 0.8 : 1)
    emblemWidth = Math.round(pixelSize * 0.82);
    emblemHeight = pixelSize;
  }

  // Wordmark under the emblem if requested
  const textClass = isLightMode ? 'text-[#181b22]' : 'text-neutral-200';
  const renderWordmark = () => {
    switch (id) {
      case 'mercedes':
      case 'mercedes-benz':
        return (
          <span className={`font-serif font-bold text-xs tracking-wider ${textClass} mt-1.5 uppercase`}>
            Mercedes-Benz
          </span>
        );
      case 'bmw':
        return (
          <span className={`font-sans font-black text-xs tracking-widest ${textClass} mt-1.5`}>
            BMW
          </span>
        );
      case 'audi':
        return (
          <span className="font-sans font-black text-xs tracking-wider text-[#ba1823] mt-1.5">
            Audi
          </span>
        );
      case 'porsche':
        return (
          <span className="font-sans font-black text-[11px] tracking-[0.2em] text-[#b88655] mt-1.5 uppercase">
            Porsche
          </span>
        );
      case 'volkswagen':
      default:
        return (
          <span className={`font-sans font-bold text-xs tracking-wider ${textClass} mt-1.5`}>
            Volkswagen
          </span>
        );
    }
  };

  // Emblem filter adjustments for light vs dark mode
  const isVw = id === 'volkswagen' || id === 'vw';
  const isAudi = id === 'audi';
  const isMercedes = id === 'mercedes' || id === 'mercedes-benz';
  const isPorsche = id === 'porsche';

  let filterClass = 'drop-shadow-[0_3px_6px_rgba(0,0,0,0.18)]';
  if (!isLightMode) {
    if (isVw) {
      filterClass = 'brightness-[2.2] contrast-[1.15] drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]';
    } else if (isAudi || isMercedes) {
      filterClass = 'brightness-[1.25] contrast-[1.1] drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]';
    } else if (isPorsche) {
      filterClass = 'brightness-[1.1] drop-shadow-[0_0_8px_rgba(218,165,32,0.4)]';
    } else {
      filterClass = 'brightness-[1.1] drop-shadow-[0_0_7px_rgba(255,255,255,0.35)]';
    }
  }

  return (
    <motion.div
      {...containerMotionProps}
      className={`inline-flex flex-col items-center justify-center select-none ${className}`}
    >
      <div 
        className="relative flex items-center justify-center"
        style={{ width: emblemWidth, height: emblemHeight }}
      >
        {!hasError ? (
          <img
            src={brandData.png}
            alt={brandData.alt}
            width={emblemWidth}
            height={emblemHeight}
            loading="eager"
            onError={() => setHasError(true)}
            className={`w-full h-full object-contain filter ${filterClass} transition-transform duration-300 pointer-events-none`}
          />
        ) : (
          <div className={`w-full h-full rounded-full ${
            isLightMode ? 'bg-[#eff1f5] border border-[#C3C4CC] text-[#535864]' : 'bg-neutral-800 border border-neutral-700 text-neutral-300'
          } flex items-center justify-center text-xs font-bold`}>
            {brandData.nameEn.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {showWordmark && renderWordmark()}
    </motion.div>
  );
}
