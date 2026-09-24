/**
 * Home page hero: rotating German brand showcase with the main call to action.
 * Showcase cars and images live in src/data/heroShowcase.ts.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { HERO_SHOWCASE_DATA, ShowcaseVehicle } from '../../data/heroShowcase';
import BrandLogo from '../../components/brand/BrandLogo';
import { CarBrandId } from '../../types';
import { useTheme } from '../../context/ThemeContext';

interface HeroProps {
  /** Called with the selected brand when the visitor clicks "request a quote". */
  onSelectBrand: (brandId: CarBrandId) => void;
}

export default function Hero({ onSelectBrand }: HeroProps) {
  const { isDarkMode } = useTheme();
  const [activeBrandId, setActiveBrandId] = useState<'porsche' | 'bmw' | 'audi' | 'mercedes' | 'volkswagen'>('porsche');

  const activeVehicle: ShowcaseVehicle = 
    HERO_SHOWCASE_DATA.find((v) => v.id === activeBrandId) || HERO_SHOWCASE_DATA[0];

  const handleSelectVehicle = (id: 'porsche' | 'bmw' | 'audi' | 'mercedes' | 'volkswagen') => {
    setActiveBrandId(id);
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[96vh] flex items-center justify-center">
      
      {/* Dynamic Cinematic Automotive Background Picture with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#eff1f5] dark:bg-[#0d1117] pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0.2, scale: 1.02 }}
            animate={{ opacity: isDarkMode ? 0.45 : 0.58, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeVehicle.bgImageUrl}
              alt={`${activeVehicle.brandNameEn} ${activeVehicle.modelHighlightEn}`}
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover object-center filter contrast-[1.08] saturate-[1.12] brightness-[1.02] dark:brightness-95 dark:contrast-[1.12]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer Overlays for Perfect Contrast & Crisp Car Visibility */}
        {/* Layer 1: Top navigation gradient shadow */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#eff1f5] via-[#eff1f5]/40 to-transparent dark:from-[#0d1117] dark:via-[#0d1117]/50 pointer-events-none"></div>
        
        {/* Layer 2: Clean transparent center vignette - keeps the car vividly visible while providing subtle contrast for text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,241,245,0.22)_0%,rgba(239,241,245,0.42)_55%,rgba(239,241,245,0.85)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(13,17,23,0.30)_0%,rgba(13,17,23,0.60)_55%,rgba(13,17,23,0.92)_100%)] pointer-events-none"></div>
        
        {/* Layer 3: Bottom seamless fade into page content */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#eff1f5] via-[#eff1f5]/70 to-transparent dark:from-[#0d1117] dark:via-[#0d1117]/80 pointer-events-none"></div>

        {/* Layer 4: Engineering Grid & Precision Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#53586408_1px,transparent_1px),linear-gradient(to_bottom,#53586408_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Brand Selector Strip */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          
          {/* Top Pill: Direct Air Logistics from Germany */}
          <motion.div 
            id="home-pill-badge"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full hero-custom-box shadow-xl backdrop-blur-xl mb-6 transition-all"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse ring-2 ring-emerald-400/50 shadow-[0_0_8px_#34d399]"></span>
            <span className="text-xs sm:text-sm font-bold text-[#f1f5f9] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] tracking-wide">
              🇩🇪 شحن مباشر من مستودعات ألمانيا إلى كافة مدن السعودية 🇸🇦
            </span>
            <span className="text-amber-400/80 font-bold">•</span>
            <span className="text-xs sm:text-sm font-bold text-[#facc15] dark:text-[#fde047] drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              ضمان لمدة 24 شهر من ألمانيا
            </span>
          </motion.div>

          {/* Main Title with Clean Crisp Shadow */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#181b22] dark:text-[#f3f4f6] tracking-tight leading-[1.22] mb-5 dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            DeutschPlex <br className="hidden sm:block" />
            <span className="text-[#ba1823] dark:text-[#e02b37]">
              بوابتك المباشرة لقطع غيار السيارات الألمانية
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#535864] dark:text-[#9ca3af] max-w-2xl mx-auto leading-relaxed mb-8 font-medium dark:drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
          >
            استيراد فوري وشحن جوي سريع لقطع الغيار الأصلية (OEM) المعتمدة لسيارات <strong className="text-[#181b22] dark:text-[#f3f4f6]">بورش، بي إم دبليو، أودي، مرسيدس بنز، وفولكس واجن.
          </motion.p>

          {/* Interactive Luxury German Brand Showcase Dock (No text, pure large emblems) */}
          <motion.div 
            id="home-brand-dock"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-2 sm:p-3 rounded-2xl hero-custom-box backdrop-blur-2xl shadow-xl dark:shadow-2xl max-w-2xl mx-auto mb-8 grid grid-cols-5 gap-2 sm:gap-3"
          >
            {HERO_SHOWCASE_DATA.filter((car) => car.id !== 'all').map((car) => {
              const isSelected = activeBrandId === car.id;
              return (
                <button
                  key={car.id}
                  type="button"
                  onClick={() => handleSelectVehicle(car.id as 'porsche' | 'bmw' | 'audi' | 'mercedes' | 'volkswagen')}
                  aria-label={car.brandNameAr}
                  title={`${car.brandNameAr} - ${car.brandNameEn}`}
                  className={`relative py-3.5 sm:py-4 px-2 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer group ${
                    isSelected 
                      ? 'bg-black/60 dark:bg-black/70 shadow-lg border-2 border-[#ba1823] ring-2 ring-[#ba1823]/40 scale-[1.04] backdrop-blur-md' 
                      : 'bg-white/[0.08] dark:bg-white/[0.05] hover:bg-white/[0.16] dark:hover:bg-white/[0.12] border border-white/15 dark:border-white/10 hover:border-[#ba1823]/60 backdrop-blur-md'
                  }`}
                >
                  <div className={`transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? 'scale-110 drop-shadow-[0_4px_14px_rgba(0,0,0,0.6)]' 
                      : 'group-hover:scale-110 opacity-90 group-hover:opacity-100'
                  }`}>
                    <BrandLogo brandId={car.id} size={54} animateOnHover={false} showWordmark={false} isLightMode={false} />
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeBrandIndicator"
                      className="absolute bottom-1 inset-x-3 sm:inset-x-4 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[#ba1823] to-transparent shadow-[0_0_8px_#ba1823]"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Quick CTA Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 flex-wrap mt-6"
          >
            <button
              type="button"
              onClick={() => onSelectBrand(activeBrandId)}
              className="px-8 py-3.5 bg-[#ba1823] hover:bg-[#a0141e] text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-[#ba1823]/30 hover:shadow-[#ba1823]/40 transition-all flex items-center gap-2 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>اطلب عرض سعر</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

