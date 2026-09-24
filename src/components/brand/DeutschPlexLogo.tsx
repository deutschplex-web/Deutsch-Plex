/**
 * The DeutschPlex logo in its different layouts (horizontal, emblem, card).
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
  isLightMode = true,
}: DeutschPlexLogoProps) {
  // Symmetrical square dimension presets for the 300x300 emblem badge
  const emblemSizes = {
    xs: { w: 32, h: 32 },
    sm: { w: 46, h: 46 },
    md: { w: 60, h: 60 },
    lg: { w: 84, h: 84 },
    xl: { w: 120, h: 120 },
  };

  const currentSize = emblemSizes[size];

  // 12 Gear Teeth Cogs Path (pointing radially outward from r=53 to r=65)
  const cogsPath = "M 203.0,150.0 L 214.9,144.9 L 214.9,155.1 L 203.0,150.0 L 195.9,123.5 L 206.1,114.3 L 211.2,123.1 L 199.1,128.9 L 176.5,104.1 L 183.6,92.0 L 191.0,99.3 L 181.9,109.5 L 150.0,97.0 L 154.9,85.1 L 162.7,87.2 L 156.0,98.9 L 123.5,104.1 L 124.7,91.8 L 132.9,91.8 L 129.9,104.1 L 104.1,123.5 L 100.9,111.6 L 107.9,107.5 L 108.9,120.7 L 97.0,150.0 L 85.1,145.1 L 87.2,137.3 L 98.9,144.0 L 104.1,176.5 L 91.8,175.3 L 91.8,167.1 L 104.1,170.1 L 123.5,195.9 L 111.6,199.1 L 107.5,192.1 L 120.7,191.1 L 150.0,203.0 L 145.1,214.9 L 137.3,212.8 L 144.0,201.1 L 176.5,195.9 L 175.3,208.2 L 167.1,208.2 L 170.1,195.9 L 195.9,176.5 L 199.1,188.4 L 192.1,192.5 L 191.1,179.3 Z";

  // Red Friction Segments (4 arcs divided by 3 radial cuts)
  const redSegments = [
    "M 170.7,119.3 L 178.0,108.5 A 50 50 0 0 1 193.7,125.8 L 182.4,132.1 A 37 37 0 0 0 170.7,119.3 Z",
    "M 183.3,133.8 L 194.9,128.1 A 50 50 0 0 1 200.0,150.0 L 187.0,150.0 A 37 37 0 0 0 183.3,133.8 Z",
    "M 186.9,151.9 L 199.9,152.6 A 50 50 0 0 1 193.7,174.2 L 182.4,167.9 A 37 37 0 0 0 186.9,151.9 Z",
    "M 181.4,169.6 L 192.4,176.5 A 50 50 0 0 1 178.0,191.5 L 170.7,180.7 A 37 37 0 0 0 181.4,169.6 Z",
  ];

  // The Master Vector Emblem:
  // Faithfully replicates the authentic DeutschPlex emblem:
  // - Dark slate outer hexagon with pointed vertical axis
  // - Inner cream/ivory hexagonal flange nut plate with inset contour line and 6 corner bolts
  // - Center dark circular cavity with gear wheel featuring cream cogs
  // - Ventilated brake rotor track with cream cooling holes
  // - Center metallic bronze hub with 6-pointed mechanical spline star
  // - Scalloped 4-lobe brake caliper clamped over crimson red friction segments
  const emblemSvg = (
    <div className="relative flex items-center justify-center select-none group flex-shrink-0">
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          {/* Metallic Bronze Hub Gradient */}
          <radialGradient id="dp-bronze-hub" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#d4a373" />
            <stop offset="35%" stopColor="#b88655" />
            <stop offset="75%" stopColor="#966336" />
            <stop offset="100%" stopColor="#6e431f" />
          </radialGradient>

          {/* Dark Slate Hexagon Gradient */}
          <linearGradient id="dp-hex-charcoal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2e38" />
            <stop offset="50%" stopColor="#23272f" />
            <stop offset="100%" stopColor="#191c22" />
          </linearGradient>
        </defs>

        {/* 1. Outer Solid Hexagon (Dark Slate) */}
        <polygon
          points="150.0,18.0 264.3,84.0 264.3,216.0 150.0,282.0 35.7,216.0 35.7,84.0"
          fill="url(#dp-hex-charcoal)"
          stroke="#191c22"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* 2. Inner Hexagonal Flange Plate (Gainsboro Silver) */}
        <polygon
          points="150.0,38.0 247.0,94.0 247.0,206.0 150.0,262.0 53.0,206.0 53.0,94.0"
          fill="#dce1e9"
          stroke="#23272f"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inset Line on Hexagonal Flange */}
        <polygon
          points="150.0,49.0 237.5,99.5 237.5,200.5 150.0,251.0 62.5,200.5 62.5,99.5"
          fill="none"
          stroke="#23272f"
          strokeWidth="1.8"
          opacity="0.9"
        />

        {/* 3. 6 Corner Mounting Bolts */}
        {[
          { cx: 150.0, cy: 60.0 },
          { cx: 227.9, cy: 105.0 },
          { cx: 227.9, cy: 195.0 },
          { cx: 150.0, cy: 240.0 },
          { cx: 72.1, cy: 195.0 },
          { cx: 72.1, cy: 105.0 },
        ].map((bolt, i) => (
          <g key={i}>
            <circle cx={bolt.cx} cy={bolt.cy} r="6.5" fill="#dce1e9" stroke="#23272f" strokeWidth="2.2" />
            <circle cx={bolt.cx} cy={bolt.cy} r="2.5" fill="#23272f" />
          </g>
        ))}

        {/* 4. Central Aperture (Dark Slate Circular Cavity) */}
        <circle cx="150" cy="150" r="70" fill="#23272f" stroke="#191c22" strokeWidth="1.5" />

        {/* 5. Rotor Assembly & Gear Cogs */}
        <motion.g
          animate={animated ? { rotate: [0, 360] } : {}}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: 'linear',
          }}
          style={{ transformOrigin: '150px 150px' }}
        >
          {/* Gear Cogs (Silver Teeth pointing into dark circle) */}
          <path d={cogsPath} fill="#dce1e9" stroke="#23272f" strokeWidth="1" />
          <circle cx="150" cy="150" r="53" fill="#dce1e9" />

          {/* Dark Rotor Track */}
          <circle cx="150" cy="150" r="48" fill="#23272f" />

          {/* Rotor Drilled Cooling Holes */}
          {Array.from({ length: 8 }).map((_, idx) => {
            const rad = ((idx * 45 + 22.5) * Math.PI) / 180;
            const hx = 150 + 42 * Math.cos(rad);
            const hy = 150 + 42 * Math.sin(rad);
            return <circle key={idx} cx={hx} cy={hy} r="2.4" fill="#dce1e9" />;
          })}
        </motion.g>

        {/* 6. Crimson Red Friction Segments (4 arcs) */}
        {redSegments.map((d, i) => (
          <path key={i} d={d} fill="#ba1823" />
        ))}

        {/* 7. Central Metallic Bronze Axle Hub */}
        <circle cx="150" cy="150" r="28" fill="url(#dp-bronze-hub)" stroke="#23272f" strokeWidth="2.2" />
        <circle cx="150" cy="150" r="22" fill="none" stroke="#7e532b" strokeWidth="0.8" opacity="0.5" />

        {/* Mechanical 6-Point Star / Spline Cutout */}
        <polygon
          points="150.0,137.0 153.5,143.9 161.3,143.5 157.0,150.0 161.3,156.5 153.5,156.1 150.0,163.0 146.5,156.1 138.7,156.5 143.0,150.0 138.7,143.5 146.5,143.9"
          fill="#23272f"
          stroke="#191c22"
          strokeWidth="1"
        />
        <circle cx="150" cy="150" r="3" fill="#b88755" />

        {/* 8. Scalloped Brake Caliper on the Right */}
        <g>
          {/* Top Lug & Mounting Pin */}
          <rect x="183" y="92" width="6" height="12" rx="1.5" fill="#23272f" stroke="#dce1e9" strokeWidth="1.8" />
          <line x1="186" y1="86" x2="186" y2="96" stroke="#dce1e9" strokeWidth="2" strokeLinecap="round" />

          {/* Bottom Lug & Mounting Pin */}
          <rect x="183" y="196" width="6" height="12" rx="1.5" fill="#23272f" stroke="#dce1e9" strokeWidth="1.8" />
          <line x1="186" y1="204" x2="186" y2="214" stroke="#dce1e9" strokeWidth="2" strokeLinecap="round" />

          {/* Main Caliper Body with 4 Scalloped Lobes & Silver Outline */}
          <path
            d="M 178,104
               C 192,104 208,112 210,124
               C 211,130 206,133 210,140
               C 214,147 214,153 210,160
               C 206,167 211,170 210,176
               C 208,188 192,196 178,196
               C 188,181 193,166 193,150
               C 193,134 188,119 178,104 Z"
            fill="#23272f"
            stroke="#dce1e9"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Caliper Structural Inset Ridge */}
          <path
            d="M 187,114 C 198,127 201,139 201,150 C 201,161 198,173 187,186"
            fill="none"
            stroke="#3a3f4d"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );

  // If only emblem requested
  if (variant === 'emblem') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblemSvg}</div>;
  }

  // Wordmark typography styling
  const textClasses = isLightMode ? 'text-[#16191f]' : 'text-white';
  const taglineClasses = isLightMode ? 'text-[#535864]' : 'text-[#dcd7cf]';

  // 1. Horizontal Logo (for Navbar, Headers, Footers) - Exactly matches the new bilingual provided logo
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`} dir="ltr">
        {emblemSvg}
        <div className="flex flex-col justify-center text-left" dir="ltr">
          {/* Line 1: English Title */}
          <div className="flex items-center leading-none tracking-tight" dir="ltr">
            <span className={`font-black text-lg sm:text-xl font-sans ${textClasses}`}>
              Deutsch
            </span>
            <span className="font-black text-lg sm:text-xl font-sans text-[#cc1e28]">
              Plex
            </span>
          </div>
          {/* Line 2: Arabic Title */}
          <div className="flex items-center leading-none mt-0.5" dir="rtl">
            <span className="font-black text-sm sm:text-base font-sans text-[#cc1e28]">
              دويتش
            </span>
            <span className={`font-black text-sm sm:text-base font-sans mr-1 ${textClasses}`}>
              بليكس
            </span>
          </div>
          {/* Divider rule */}
          <div className="w-full h-[1.5px] bg-[#9ca3af] my-1 rounded-full opacity-80"></div>
          {/* Taglines */}
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className={`text-[7.5px] sm:text-[8.5px] font-bold tracking-[0.14em] uppercase font-sans ${taglineClasses}`}>
              GENUINE GERMAN AUTO PARTS
            </span>
            <span className="text-[8px] text-[#9ca3af]">•</span>
            <span className={`text-[8px] sm:text-[9px] font-bold font-sans ${taglineClasses}`} dir="rtl">
              قطع غيار أصلية
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Card Variant (Matches the exact provided image layout from Gemini_Generated_Image_tgg1q4tgg1q4tgg1.jpeg)
  if (variant === 'card') {
    return (
      <div className={`p-6 sm:p-8 rounded-3xl bg-[#f0f2f5] text-[#16191f] border border-[#d2d6dc] shadow-xl flex flex-col md:flex-row items-center justify-center gap-6 select-none ${className}`}>
        {emblemSvg}
        <div className="flex flex-col items-start text-left" dir="ltr">
          {/* Line 1: English Title */}
          <div className="flex items-center leading-none tracking-tight">
            <span className="font-black text-3xl sm:text-4xl font-sans text-[#16191f]">
              Deutsch
            </span>
            <span className="font-black text-3xl sm:text-4xl font-sans text-[#cc1e28]">
              Plex
            </span>
          </div>
          {/* Line 2: Arabic Title */}
          <div className="flex items-center leading-none mt-1.5" dir="rtl">
            <span className="font-black text-2xl sm:text-3xl font-sans text-[#cc1e28]">
              دويتش
            </span>
            <span className="font-black text-2xl sm:text-3xl font-sans text-[#16191f] mr-1.5">
              بليكس
            </span>
          </div>
          {/* Divider rule */}
          <div className="w-full max-w-[320px] h-[2.5px] bg-[#9ca3af] my-2.5 rounded-full opacity-80"></div>
          {/* Tagline Line 1: English */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase font-sans text-[#535864]">
            GENUINE GERMAN AUTO PARTS
          </span>
          {/* Tagline Line 2: Arabic */}
          <span className="text-xs sm:text-sm font-bold font-sans text-[#535864] mt-0.5" dir="rtl">
            قطع غيار اصلية للسيارات الألمانية
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
        {/* Line 1: English Title */}
        <div className="flex items-center leading-none">
          <span className={`font-black tracking-tight text-2xl sm:text-3xl font-sans ${textClasses}`}>
            Deutsch
          </span>
          <span className="font-black tracking-tight text-2xl sm:text-3xl font-sans text-[#cc1e28]">
            Plex
          </span>
        </div>
        {/* Line 2: Arabic Title */}
        <div className="flex items-center leading-none mt-1" dir="rtl">
          <span className="font-black text-xl sm:text-2xl font-sans text-[#cc1e28]">
            دويتش
          </span>
          <span className={`font-black text-xl sm:text-2xl font-sans mr-1.5 ${textClasses}`}>
            بليكس
          </span>
        </div>
        {/* Sleek divider line */}
        <div className="w-48 sm:w-60 h-[2.5px] bg-[#9ca3af] my-2.5 rounded-full opacity-80"></div>
        {/* Taglines */}
        <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase font-sans ${taglineClasses}`}>
          GENUINE GERMAN AUTO PARTS
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold font-sans mt-0.5 ${taglineClasses}`} dir="rtl">
          قطع غيار اصلية للسيارات الألمانية
        </span>
      </div>
    </div>
  );
}
