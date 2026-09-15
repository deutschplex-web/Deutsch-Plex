/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface DeutschPlexLogoProps {
  variant?: 'full' | 'horizontal' | 'emblem' | 'stacked';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
  isLightMode?: boolean;
}

export default function DeutschPlexLogo({
  variant = 'horizontal',
  size = 'md',
  animated = true,
  className = '',
  isLightMode = false,
}: DeutschPlexLogoProps) {
  // Dimension presets for the emblem badge
  const emblemSizes = {
    xs: { w: 32, h: 36, scale: 0.28 },
    sm: { w: 40, h: 46, scale: 0.35 },
    md: { w: 48, h: 54, scale: 0.42 },
    lg: { w: 68, h: 76, scale: 0.6 },
    xl: { w: 110, h: 124, scale: 1 },
  };

  const currentSize = emblemSizes[size];

  // The SVG Hexagonal mechanical emblem with gear, ventilated disc, red caliper and bronze hub
  const emblemSvg = (
    <div className="relative flex items-center justify-center select-none group">
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 240 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Radial gradient for metallic hex body */}
          <radialGradient id="dp-hex-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#323846" />
            <stop offset="70%" stopColor="#1e222a" />
            <stop offset="100%" stopColor="#13161c" />
          </radialGradient>

          {/* Hex metallic bezel gradient */}
          <linearGradient id="dp-hex-rim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="30%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="80%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          {/* Rotor disc steel gradient */}
          <radialGradient id="dp-rotor-steel" cx="48%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#64748b" />
            <stop offset="85%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>

          {/* Bronze Hub gradient */}
          <radialGradient id="dp-bronze-hub" cx="45%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="40%" stopColor="#c27829" />
            <stop offset="80%" stopColor="#8c4e17" />
            <stop offset="100%" stopColor="#58310c" />
          </radialGradient>

          {/* Racing Caliper Red gradient */}
          <linearGradient id="dp-caliper-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          {/* Gear teeth metallic gradient */}
          <linearGradient id="dp-gear-steel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon Shadow / Outer Layer */}
        <polygon
          points="120,6 230,68 230,202 120,264 10,202 10,68"
          fill="url(#dp-hex-bg)"
          stroke="url(#dp-hex-rim)"
          strokeWidth="10"
          strokeLinejoin="round"
        />

        {/* Inner Hex Rim Inset */}
        <polygon
          points="120,18 218,74 218,196 120,252 22,196 22,74"
          fill="none"
          stroke="#0f172a"
          strokeWidth="4"
          opacity="0.8"
        />

        {/* 6 Corner Mounting Bolts */}
        {[
          { cx: 120, cy: 26 },
          { cx: 206, cy: 76 },
          { cx: 206, cy: 194 },
          { cx: 120, cy: 244 },
          { cx: 34, cy: 194 },
          { cx: 34, cy: 76 },
        ].map((bolt, i) => (
          <g key={i}>
            <circle cx={bolt.cx} cy={bolt.cy} r="6.5" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx={bolt.cx} cy={bolt.cy} r="2.5" fill="#475569" />
          </g>
        ))}

        {/* Gear Cog Ring with rotating animation option */}
        <g transform="translate(120, 135)">
          <motion.g
            animate={animated ? { rotate: [0, 360] } : {}}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: 'linear',
            }}
          >
            {/* Gear teeth (12 precision cogs) */}
            {Array.from({ length: 12 }).map((_, idx) => {
              const angle = (idx * 360) / 12;
              return (
                <rect
                  key={idx}
                  x="-7"
                  y="-84"
                  width="14"
                  height="16"
                  rx="2"
                  fill="url(#dp-gear-steel)"
                  transform={`rotate(${angle})`}
                  stroke="#334155"
                  strokeWidth="1"
                />
              );
            })}

            {/* Gear Body Circle */}
            <circle cx="0" cy="0" r="76" fill="#1e242d" stroke="url(#dp-gear-steel)" strokeWidth="6" />

            {/* Inner Ventilated Brake Disc Rotor with cooling slots */}
            <circle cx="0" cy="0" r="56" fill="url(#dp-rotor-steel)" stroke="#334155" strokeWidth="3" />

            {/* Rotor Ventilation Slots (Brembo-style drilled holes) */}
            {Array.from({ length: 16 }).map((_, idx) => {
              const angle = (idx * 360) / 16;
              return (
                <g key={idx} transform={`rotate(${angle})`}>
                  <circle cx="0" cy="-44" r="2.8" fill="#0f172a" />
                  <circle cx="0" cy="-34" r="2" fill="#0f172a" />
                </g>
              );
            })}
          </motion.g>

          {/* High-Performance Curved Brake Caliper (Right Side) */}
          <g transform="translate(15, -60)">
            {/* Caliper Outer Metal Body */}
            <path
              d="M10,0 C25,0 48,22 48,60 C48,98 25,120 10,120 C18,102 24,80 24,60 C24,40 18,18 10,0 Z"
              fill="#181c24"
              stroke="#475569"
              strokeWidth="3"
            />
            {/* Caliper Segmented Hydraulic Pistons & Red Friction Pad Lining */}
            <path
              d="M14,15 C20,28 22,44 22,60 C22,76 20,92 14,105"
              fill="none"
              stroke="#0f172a"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* 4 Glowing Racing Red Segments */}
            <path
              d="M14,18 C17,27 18,34 19,40"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M19,45 C20,50 20,55 20,60"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M20,65 C20,70 20,75 19,80"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M19,85 C18,92 17,98 14,102"
              fill="none"
              stroke="url(#dp-caliper-red)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Central Axle Bronze / Gold Hub */}
          <circle cx="0" cy="0" r="26" fill="url(#dp-bronze-hub)" stroke="#78350f" strokeWidth="3" />
          {/* Central 6-Point Star Spline Socket */}
          <path
            d="M0,-16 L4,-5 L15,-5 L7,2 L10,13 L0,7 L-10,13 L-7,2 L-15,-5 L-4,-5 Z"
            fill="#381d07"
            stroke="#1c0f04"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="0" r="5" fill="#c27829" />
        </g>
      </svg>
    </div>
  );

  // If only emblem requested
  if (variant === 'emblem') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblemSvg}</div>;
  }

  // Wordmark typography styling
  const textClasses = isLightMode ? 'text-neutral-900' : 'text-white';
  const taglineClasses = isLightMode ? 'text-neutral-600' : 'text-neutral-400';

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {emblemSvg}
        <div className="flex flex-col justify-center">
          <div className="flex items-center leading-none">
            <span className={`font-black tracking-tight text-xl sm:text-2xl font-sans ${textClasses}`}>
              Deutsch
            </span>
            <span className="font-black tracking-tight text-xl sm:text-2xl font-sans text-red-600">
              Plex
            </span>
          </div>
          {/* Red underline accent matching uploaded logo */}
          <div className="w-full h-[2.5px] bg-red-600 my-1 rounded-full"></div>
          <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase font-sans ${taglineClasses}`}>
            GENUINE GERMAN AUTO PARTS
          </span>
        </div>
      </div>
    );
  }

  // Full / Stacked Logo (for Hero, modals, footer, etc.)
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {emblemSvg}
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center leading-none">
          <span className={`font-black tracking-tight text-2xl sm:text-4xl font-sans ${textClasses}`}>
            Deutsch
          </span>
          <span className="font-black tracking-tight text-2xl sm:text-4xl font-sans text-red-600">
            Plex
          </span>
        </div>
        {/* Red accent bar */}
        <div className="w-32 sm:w-44 h-[3px] bg-gradient-to-r from-red-600 via-red-500 to-red-600 my-1.5 rounded-full shadow-sm shadow-red-600/50"></div>
        <span className={`text-[10px] sm:text-xs font-extrabold tracking-[0.22em] uppercase font-sans ${taglineClasses}`}>
          GENUINE GERMAN AUTO PARTS
        </span>
      </div>
    </div>
  );
}
