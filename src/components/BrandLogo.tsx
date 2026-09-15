/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CarBrandId } from '../types';

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
  // Normalize brand ID
  const id = brandId.toLowerCase();

  // Dimension sizes in px
  const sizeMap = {
    sm: 36,
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

  // Render individual brand SVG emblems
  const renderEmblem = () => {
    switch (id) {
      case 'mercedes':
      case 'mercedes-benz':
        return (
          <svg
            width={pixelSize}
            height={pixelSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="mb-chrome-light" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              <linearGradient id="mb-chrome-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
              <radialGradient id="mb-ring-grad" cx="50%" cy="50%" r="50%">
                <stop offset="70%" stopColor="#1e242d" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
            </defs>

            {/* Dark background circle */}
            <circle cx="50" cy="50" r="46" fill="url(#mb-ring-grad)" />

            {/* Outer Chrome Ring with 3D bevel */}
            <circle cx="50" cy="50" r="44" stroke="url(#mb-chrome-light)" strokeWidth="3.5" />
            <circle cx="50" cy="50" r="41" stroke="url(#mb-chrome-dark)" strokeWidth="1" opacity="0.6" />

            {/* Three-Pointed Star with Light & Dark Facets */}
            {/* Top Point (0 deg) */}
            <polygon points="50,12 50,50 42,48" fill="url(#mb-chrome-light)" />
            <polygon points="50,12 58,48 50,50" fill="url(#mb-chrome-dark)" />

            {/* Bottom-Right Point (120 deg) */}
            <polygon points="82.9,69 50,50 49,41" fill="url(#mb-chrome-light)" />
            <polygon points="82.9,69 53,58 50,50" fill="url(#mb-chrome-dark)" />

            {/* Bottom-Left Point (240 deg) */}
            <polygon points="17.1,69 50,50 47,58" fill="url(#mb-chrome-dark)" />
            <polygon points="17.1,69 51,41 50,50" fill="url(#mb-chrome-light)" />

            {/* Center Boss Highlight */}
            <circle cx="50" cy="50" r="3" fill="#f3f4f6" />
          </svg>
        );

      case 'bmw':
        return (
          <svg
            width={pixelSize}
            height={pixelSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="bmw-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
              <radialGradient id="bmw-sheen" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Outer Chrome Border */}
            <circle cx="50" cy="50" r="47" fill="#000000" stroke="url(#bmw-silver)" strokeWidth="3" />

            {/* Inner Chrome Rim */}
            <circle cx="50" cy="50" r="28" stroke="url(#bmw-silver)" strokeWidth="1.8" />

            {/* Quadrants (Bavarian Blue & White) */}
            <g transform="translate(50, 50)">
              {/* Top-Right Quadrant: White */}
              <path d="M0,0 L0,-27 A27,27 0 0,1 27,0 Z" fill="#ffffff" />
              {/* Bottom-Right Quadrant: Bavarian Blue */}
              <path d="M0,0 L27,0 A27,27 0 0,1 0,27 Z" fill="#0066B2" />
              {/* Bottom-Left Quadrant: White */}
              <path d="M0,0 L0,27 A27,27 0 0,1 -27,0 Z" fill="#ffffff" />
              {/* Top-Left Quadrant: Bavarian Blue */}
              <path d="M0,0 L-27,0 A27,27 0 0,1 0,-27 Z" fill="#0066B2" />

              {/* Quadrant Divider Cross */}
              <line x1="-27" y1="0" x2="27" y2="0" stroke="#9ca3af" strokeWidth="1" />
              <line x1="0" y1="-27" x2="0" y2="27" stroke="#9ca3af" strokeWidth="1" />

              {/* Glass / Metallic Specular Sheen */}
              <circle cx="0" cy="0" r="27" fill="url(#bmw-sheen)" />
            </g>

            {/* Typography "B M W" along the black ring */}
            <g fill="#e5e7eb" fontWeight="900" fontSize="11" fontFamily="sans-serif" textAnchor="middle">
              <text transform="translate(25, 33) rotate(-45)">B</text>
              <text transform="translate(50, 20) rotate(0)">M</text>
              <text transform="translate(75, 33) rotate(45)">W</text>
            </g>
          </svg>
        );

      case 'audi':
        return (
          <svg
            width={pixelSize * 1.5}
            height={pixelSize}
            viewBox="0 0 150 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="audi-chrome-top" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#e5e7eb" />
                <stop offset="70%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </linearGradient>
              <linearGradient id="audi-chrome-inner" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="50%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>

            {/* 4 Interlocking Rings with polished 3D metal effect */}
            {[
              { cx: 33, cy: 50 },
              { cx: 61, cy: 50 },
              { cx: 89, cy: 50 },
              { cx: 117, cy: 50 },
            ].map((ring, idx) => (
              <g key={idx}>
                {/* Outer metallic shadow */}
                <circle cx={ring.cx} cy={ring.cy} r="21" stroke="#111827" strokeWidth="4.8" opacity="0.6" />
                {/* Outer metallic rim */}
                <circle cx={ring.cx} cy={ring.cy} r="20" stroke="url(#audi-chrome-top)" strokeWidth="4.2" />
                {/* Inner chrome bevel */}
                <circle cx={ring.cx} cy={ring.cy} r="18" stroke="url(#audi-chrome-inner)" strokeWidth="1" opacity="0.7" />
              </g>
            ))}
          </svg>
        );

      case 'porsche':
        return (
          <svg
            width={pixelSize * 0.85}
            height={pixelSize}
            viewBox="0 0 90 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="porsche-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#eab308" />
                <stop offset="70%" stopColor="#ca8a04" />
                <stop offset="100%" stopColor="#854d0e" />
              </linearGradient>
              <linearGradient id="porsche-red" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
            </defs>

            {/* Crest Shield Outline */}
            <path
              d="M12,12 L78,12 C80,38 80,68 45,98 C10,68 10,38 12,12 Z"
              fill="url(#porsche-gold)"
              stroke="#ca8a04"
              strokeWidth="2.5"
            />

            {/* Top Banner with PORSCHE Text */}
            <path d="M14,14 L76,14 L76,27 L14,27 Z" fill="url(#porsche-gold)" />
            <text
              x="45"
              y="23"
              fill="#000000"
              fontSize="7.5"
              fontWeight="900"
              letterSpacing="1.2"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              PORSCHE
            </text>

            {/* Shield Quarters */}
            {/* Top-Right & Bottom-Left Quarters: Red and Black Stripes */}
            {/* Top-Right Red & Black */}
            <rect x="46" y="28" width="31" height="6" fill="#000000" />
            <rect x="46" y="34" width="31" height="6" fill="url(#porsche-red)" />
            <rect x="46" y="40" width="31" height="6" fill="#000000" />
            <rect x="46" y="46" width="31" height="6" fill="url(#porsche-red)" />

            {/* Bottom-Left Red & Black */}
            <rect x="13" y="52" width="32" height="7" fill="url(#porsche-red)" />
            <rect x="13" y="59" width="32" height="7" fill="#000000" />
            <rect x="13" y="66" width="32" height="7" fill="url(#porsche-red)" />
            <rect x="13" y="73" width="32" height="7" fill="#000000" />

            {/* Top-Left & Bottom-Right Antlers (Württemberg Stag Horns) */}
            {/* Top-Left Antlers */}
            <g stroke="#000000" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18,34 Q28,31 40,34 M23,33 L21,30 M30,32 L29,28 M37,33 L37,29" />
              <path d="M18,42 Q28,39 40,42 M23,41 L21,38 M30,40 L29,36 M37,41 L37,37" />
              <path d="M18,50 Q28,47 40,50 M23,49 L21,46 M30,48 L29,44 M37,49 L37,45" />
            </g>

            {/* Bottom-Right Antlers */}
            <g stroke="#000000" strokeWidth="2.2" strokeLinecap="round">
              <path d="M48,58 Q58,55 70,58 M53,57 L51,54 M60,56 L59,52 M67,57 L67,53" />
              <path d="M48,67 Q58,64 70,67 M53,66 L51,63 M60,65 L59,61 M67,66 L67,62" />
              <path d="M48,76 Q58,73 66,76 M53,75 L51,72 M60,74 L59,70" />
            </g>

            {/* Center Stuttgart Crest with Rearing Prancing Stallion */}
            <path
              d="M33,37 L57,37 C58,50 58,62 45,71 C32,62 32,50 33,37 Z"
              fill="url(#porsche-gold)"
              stroke="#000000"
              strokeWidth="1.2"
            />
            {/* "STUTTGART" text */}
            <text
              x="45"
              y="42"
              fill="#000000"
              fontSize="3.8"
              fontWeight="900"
              letterSpacing="0.4"
              fontFamily="sans-serif"
              textAnchor="middle"
            >
              STUTTGART
            </text>

            {/* Rearing Stallion Silhouette */}
            <path
              d="M45,45 C47,44 48,46 47,48 C46,49 47,51 49,52 C46,53 45,56 46,59 C44,58 43,62 42,65 C41,61 41,58 43,56 C41,54 42,50 44,48 Z"
              fill="#000000"
            />
          </svg>
        );

      case 'volkswagen':
      default:
        return (
          <svg
            width={pixelSize}
            height={pixelSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="vw-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <radialGradient id="vw-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
            </defs>

            {/* Outer Circle */}
            <circle cx="50" cy="50" r="46" fill="url(#vw-bg)" stroke="url(#vw-chrome)" strokeWidth="4" />
            <circle cx="50" cy="50" r="39" stroke="url(#vw-chrome)" strokeWidth="2" opacity="0.6" />

            {/* VW Monogram: V and W */}
            {/* Top V */}
            <path
              d="M32,26 L45,55 L50,44 L55,55 L68,26 L61,26 L55,42 L50,32 L45,42 L39,26 Z"
              fill="url(#vw-chrome)"
            />
            {/* Bottom W */}
            <path
              d="M30,59 L43,84 L48,73 L52,73 L57,84 L70,59 L63,59 L55,75 L50,65 L45,75 L37,59 Z"
              fill="url(#vw-chrome)"
            />
          </svg>
        );
    }
  };

  // Wordmark under the emblem if requested
  const renderWordmark = () => {
    switch (id) {
      case 'mercedes':
      case 'mercedes-benz':
        return (
          <span className="font-serif font-bold text-xs tracking-wider text-neutral-200 mt-1 uppercase">
            Mercedes-Benz
          </span>
        );
      case 'bmw':
        return (
          <span className="font-sans font-black text-xs tracking-widest text-neutral-200 mt-1">
            BMW
          </span>
        );
      case 'audi':
        return (
          <span className="font-sans font-black text-xs tracking-wider text-red-500 mt-1">
            Audi
          </span>
        );
      case 'porsche':
        return (
          <span className="font-sans font-black text-[11px] tracking-[0.2em] text-amber-400 mt-1 uppercase">
            Porsche
          </span>
        );
      case 'volkswagen':
      default:
        return (
          <span className="font-sans font-bold text-xs tracking-wider text-neutral-200 mt-1">
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
      {renderEmblem()}
      {showWordmark && renderWordmark()}
    </motion.div>
  );
}
