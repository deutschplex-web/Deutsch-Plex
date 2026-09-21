/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CarBrandId } from '../types';
import { getBrandLogo } from '../data/brandLogos';

interface BrandLogoProps {
  brandId: CarBrandId | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  showWordmark?: boolean;
  className?: string;
  animateOnHover?: boolean;
}

export default function BrandLogo({
  brandId,
  size = 'md',
  showWordmark = false,
  className = '',
  animateOnHover = true,
}: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

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
    // Audi 4 rings is wider horizontally (approx 1.6 : 1)
    emblemWidth = Math.round(pixelSize * 1.55);
    emblemHeight = Math.round(pixelSize * 0.95);
  } else if (brandData.aspectRatio === 'shield') {
    // Porsche crest shield is taller vertically (approx 0.8 : 1)
    emblemWidth = Math.round(pixelSize * 0.82);
    emblemHeight = pixelSize;
  }

  // Wordmark under the emblem if requested
  const renderWordmark = () => {
    switch (id) {
      case 'mercedes':
      case 'mercedes-benz':
        return (
          <span className="font-serif font-bold text-xs tracking-wider text-neutral-200 mt-1.5 uppercase">
            Mercedes-Benz
          </span>
        );
      case 'bmw':
        return (
          <span className="font-sans font-black text-xs tracking-widest text-neutral-200 mt-1.5">
            BMW
          </span>
        );
      case 'audi':
        return (
          <span className="font-sans font-black text-xs tracking-wider text-red-500 mt-1.5">
            Audi
          </span>
        );
      case 'porsche':
        return (
          <span className="font-sans font-black text-[11px] tracking-[0.2em] text-amber-400 mt-1.5 uppercase">
            Porsche
          </span>
        );
      case 'volkswagen':
      default:
        return (
          <span className="font-sans font-bold text-xs tracking-wider text-neutral-200 mt-1.5">
            Volkswagen
          </span>
        );
    }
  };

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
            className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)] transition-transform duration-300 pointer-events-none"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-300">
            {brandData.nameEn.substring(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      {showWordmark && renderWordmark()}
    </motion.div>
  );
}
