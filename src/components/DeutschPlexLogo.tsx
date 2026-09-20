/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface DeutschPlexLogoProps {
  variant?: 'full' | 'horizontal' | 'emblem' | 'stacked' | 'card';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
  isLightMode?: boolean;
}

export default function DeutschPlexLogo({
  variant = 'horizontal',
  size = 'md',
  animated = false,
  className = '',
  isLightMode = false,
}: DeutschPlexLogoProps) {
  // Dimension presets for the emblem badge - enlarged for prominent automotive badge presence
  const emblemSizes = {
    xs: { w: 36, h: 40 },
    sm: { w: 54, h: 60 },
    md: { w: 66, h: 74 },
    lg: { w: 92, h: 104 },
    xl: { w: 136, h: 154 },
  };

  const currentSize = emblemSizes[size];

  // The SVG Hexagonal mechanical emblem:
  // Faithfully replicates the DeutschPlex emblem:
  // - Solid dark graphite hexagon outer body
  // - Inner warm titanium plate with 6 corner hex bolts
  // - Central gear cogwheel ring
  // - Ventilated brake rotor disc with cooling slots
  // - Metallic bronze / copper center axle hub with 6-point spline star
  // - High-performance scalloped brake caliper with 3 crimson red friction segments
  const emblemSvg = (
    <div className="relative flex items-center justify-center select-none group">
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 300 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Metallic Bronze Hub Gradient */}
          <radialGradient id="dp-bronze-hub" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="35%" stopColor="#b88655" />
            <stop offset="75%" stopColor="#966336" />
            <stop offset="100%" stopColor="#6e431f" />
          </radialGradient>

          {/* Crimson Red Caliper Gradient */}
          <linearGradient id="dp-caliper-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c02636" />
            <stop offset="50%" stopColor="#a71d2a" />
            <stop offset="100%" stopColor="#87131e" />
          </linearGradient>

          {/* Dark Slate Graphite Hexagon Gradient */}
          <linearGradient id="dp-hex-charcoal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#323640" />
            <stop offset="50%" stopColor="#252830" />
            <stop offset="100%" stopColor="#1a1c22" />
          </linearGradient>

          {/* Warm Titanium / Cream Inner Flange Plate Gradient */}
          <linearGradient id="dp-titanium-plate" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#f7f3ed" />
            <stop offset="50%" stopColor="#ebe5dc" />
            <stop offset="100%" stopColor="#ded6cb" />
          </linearGradient>

          {/* Steel Disc Surface Gradient */}
          <radialGradient id="dp-disc-surface" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#f5f1eb" />
            <stop offset="100%" stopColor="#e4ddd3" />
          </radialGradient>
        </defs>

        {/* 1. Outer Solid Hexagon (Dark Slate Graphite) */}
        {/* Points: Top(150, 14), Top-Right(258, 76), Bottom-Right(258, 202), Bottom(150, 264), Bottom-Left(42, 202), Top-Left(42, 76) */}
        <polygon
          points="150,14 258,76 258,202 150,264 42,202 42,76"
          fill="url(#dp-hex-charcoal)"
          stroke="#1b1d24"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Outer Hexagon Subtle Inset Outline */}
        <polygon
          points="150,22 250,79 250,199 150,256 50,199 50,79"
          fill="none"
          stroke="#3d424e"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* 2. Inner Hexagonal Flange Plate (Warm Titanium / Sand Ivory) */}
        <polygon
          points="150,38 238,88 238,190 150,240 62,190 62,88"
          fill="url(#dp-titanium-plate)"
          stroke="#252830"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Fine Inner Inset Border on the Titanium Plate */}
        <polygon
          points="150,47 229,93 229,185 150,231 71,185 71,93"
          fill="none"
          stroke="#252830"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* 3. 6 Precision Corner Mounting Bolts */}
        {[
          { cx: 150, cy: 54 },
          { cx: 224, cy: 97 },
          { cx: 224, cy: 181 },
          { cx: 150, cy: 224 },
          { cx: 76, cy: 181 },
          { cx: 76, cy: 97 },
        ].map((bolt, i) => (
          <g key={i}>
            <circle cx={bolt.cx} cy={bolt.cy} r="6.5" fill="#ece5dc" stroke="#252830" strokeWidth="2.2" />
            <circle cx={bolt.cx} cy={bolt.cy} r="2.4" fill="#252830" />
          </g>
        ))}

        {/* 4. Central Mechanical Assembly (Gear + Ventilated Rotor + Caliper + Bronze Hub) */}
        <g transform="translate(150, 139)">
          
          {/* Optional subtle rotational group for the gear and rotor */}
          <motion.g
            animate={animated ? { rotate: [0, 360] } : {}}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {/* Gear Teeth (14 Precision Cogs around perimeter) */}
            {Array.from({ length: 14 }).map((_, idx) => {
              const angle = (idx * 360) / 14;
              return (
                <rect
                  key={idx}
                  x="-6"
                  y="-74"
                  width="12"
                  height="12"
                  rx="1.5"
                  fill="#252830"
                  stroke="#1c1e24"
                  strokeWidth="1"
                  transform={`rotate(${angle})`}
                />
              );
            })}

            {/* Gear Body Circle */}
            <circle cx="0" cy="0" r="68" fill="#252830" stroke="#1c1e24" strokeWidth="2" />

            {/* Ventilated Brake Rotor Disc Track */}
            <circle cx="0" cy="0" r="54" fill="url(#dp-disc-surface)" stroke="#252830" strokeWidth="2.5" />

            {/* Rotor Drilled Cooling Holes / Ventilation Slots */}
            {Array.from({ length: 8 }).map((_, idx) => {
              const angle = (idx * 360) / 8 + 22.5;
              return (
                <g key={idx} transform={`rotate(${angle})`}>
                  <circle cx="0" cy="-44" r="2.4" fill="#252830" />
                </g>
              );
            })}
          </motion.g>

          {/* Hub Dark Separation Ring */}
          <circle cx="0" cy="0" r="34" fill="#252830" stroke="#1c1e24" strokeWidth="2" />

          {/* 5. Center Axle Bronze / Copper Hub Disc */}
          <circle cx="0" cy="0" r="28" fill="url(#dp-bronze-hub)" stroke="#78471e" strokeWidth="2" />
          
          {/* Concentric Step Ring on Bronze Hub */}
          <circle cx="0" cy="0" r="22" fill="none" stroke="#683d18" strokeWidth="1" opacity="0.6" />

          {/* Central 6-Lobe Spline Star Socket (Mechanical German Spline) */}
          <path
            d="M0,-14 L3,-5 L12,-5 L5,2 L8,11 L0,6 L-8,11 L-5,2 L-12,-5 L-3,-5 Z"
            fill="#252830"
            stroke="#181a20"
            strokeWidth="1.2"
          />
          {/* Pin Center Hole */}
          <circle cx="0" cy="0" r="3.2" fill="#b88655" />

          {/* 6. High-Performance Scalloped Brake Caliper on the Right */}
          <g transform="translate(18, -52)">
            {/* Top Mounting Ear & Pin */}
            <rect x="7" y="-5" width="4" height="8" rx="1.5" fill="#f0eae2" stroke="#252830" strokeWidth="1.5" />
            {/* Bottom Mounting Ear & Pin */}
            <rect x="7" y="101" width="4" height="8" rx="1.5" fill="#f0eae2" stroke="#252830" strokeWidth="1.5" />

            {/* Main Caliper Body (Dark Graphite with 3 Ergonomic Waves / Scallops) */}
            <path
              d="M6,2 
                 C20,2 34,16 34,26 
                 C34,34 31,38 35,46 
                 C39,54 39,60 35,68 
                 C31,76 34,80 34,88 
                 C34,98 20,102 6,102 
                 C13,86 16,68 16,52 
                 C16,36 13,18 6,2 Z"
              fill="#252830"
              stroke="#1b1d24"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Subtle Caliper Body Bevel Line */}
            <path
              d="M10,8 C18,18 20,34 20,52 C20,70 18,86 10,96"
              fill="none"
              stroke="#3d4352"
              strokeWidth="1.5"
            />

            {/* Racing Crimson Red Caliper Friction Pad Strip (Divided into 3 Segments) */}
            {/* Segment 1 (Top) */}
            <path
              d="M7,16 C12,24 14,32 15,38"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Segment 2 (Middle) */}
            <path
              d="M15,44 C16,49 16,55 15,60"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Segment 3 (Bottom) */}
            <path
              d="M15,66 C14,72 12,80 7,88"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

        </g>
      </svg>
    </div>
  );

  // If only emblem requested
  if (variant === 'emblem') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblemSvg}</div>;
  }

  // Wordmark typography styling
  const textClasses = isLightMode ? 'text-[#1e2229]' : 'text-[#f4efea]';
  const taglineClasses = isLightMode ? 'text-[#4b515d]' : 'text-[#c6beb4]';

  // 1. Horizontal Logo (for Navbars, cards, headers)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`} dir="ltr">
        {emblemSvg}
        <div className="flex flex-col justify-center text-left" dir="ltr">
          <div className="flex items-center leading-none tracking-tight" dir="ltr">
            <span className={`font-black text-xl sm:text-2xl font-sans ${textClasses}`}>
              Deutsch
            </span>
            <span className="font-black text-xl sm:text-2xl font-sans text-[#a71d2a]">
              Plex
            </span>
          </div>
          {/* Exact Crimson Red underline bar beneath DeutschPlex */}
          <div className="w-full h-[3px] bg-[#a71d2a] my-1 rounded-full"></div>
          {/* Exact Uppercase Tagline */}
          <span className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.18em] uppercase font-sans ${taglineClasses}`}>
            GENUINE GERMAN AUTO PARTS
          </span>
        </div>
      </div>
    );
  }

  // 2. Card Variant (Warm Ivory Canvas, exactly matching the uploaded image!)
  if (variant === 'card') {
    return (
      <div className={`p-6 sm:p-8 rounded-3xl bg-[#f4efea] text-[#1e2229] border border-[#ded5cb] shadow-2xl flex flex-col items-center justify-center text-center select-none ${className}`}>
        {emblemSvg}
        <div className="mt-4 flex flex-col items-center" dir="ltr">
          <div className="flex items-center leading-none" dir="ltr">
            <span className="font-black tracking-tight text-2xl sm:text-3xl font-sans text-[#1e2229]">
              Deutsch
            </span>
            <span className="font-black tracking-tight text-2xl sm:text-3xl font-sans text-[#a71d2a]">
              Plex
            </span>
          </div>
          {/* Solid Red underline bar */}
          <div className="w-40 sm:w-48 h-[3px] bg-[#a71d2a] my-1.5 rounded-full"></div>
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] uppercase font-sans text-[#4b515d]">
            GENUINE GERMAN AUTO PARTS
          </span>
        </div>
      </div>
    );
  }

  // 3. Full / Stacked Logo (for Hero, Modals, Footer)
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {emblemSvg}
      <div className="mt-4 flex flex-col items-center" dir="ltr">
        <div className="flex items-center leading-none" dir="ltr">
          <span className={`font-black tracking-tight text-2xl sm:text-4xl font-sans ${textClasses}`}>
            Deutsch
          </span>
          <span className="font-black tracking-tight text-2xl sm:text-4xl font-sans text-[#a71d2a]">
            Plex
          </span>
        </div>
        {/* Red accent bar */}
        <div className="w-36 sm:w-52 h-[3.5px] bg-[#a71d2a] my-2 rounded-full shadow-sm shadow-[#a71d2a]/50"></div>
        <span className={`text-[10px] sm:text-xs font-extrabold tracking-[0.22em] uppercase font-sans ${taglineClasses}`}>
          GENUINE GERMAN AUTO PARTS
        </span>
      </div>
    </div>
  );
}
