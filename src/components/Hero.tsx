/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { HERO_SHOWCASE_DATA, ShowcaseVehicle } from '../data/heroShowcase';
import BrandLogo from './BrandLogo';
import { PageId } from '../types';

interface HeroProps {
  onSelectBrand?: (brandId: string) => void;
  onSearchVin?: (vin: string, brand?: string) => void;
  onNavigate?: (page: PageId) => void;
}

export default function Hero({ onSelectBrand, onNavigate }: HeroProps) {
  const [activeBrandId, setActiveBrandId] = useState<'porsche' | 'bmw' | 'audi' | 'mercedes' | 'volkswagen'>('porsche');

  const activeVehicle: ShowcaseVehicle = 
    HERO_SHOWCASE_DATA.find((v) => v.id === activeBrandId) || HERO_SHOWCASE_DATA[0];

  const handleSelectVehicle = (id: 'porsche' | 'bmw' | 'audi' | 'mercedes' | 'volkswagen') => {
    setActiveBrandId(id);
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[96vh] flex items-center justify-center">
      
      {/* Dynamic Cinematic Automotive Background Picture with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d0f13] pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
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
                // Fallback to high-reliability car photo if specific URL fails
                e.currentTarget.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer Moody Studio Overlays for Perfect Contrast & Anti-Glare */}
        {/* Layer 1: Top navigation gradient shadow */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0d10]/90 via-[#0b0d10]/50 to-transparent pointer-events-none"></div>
        
        {/* Layer 2: Center radial vignette allowing car details to be clearly visible while maintaining text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,13,16,0.30)_0%,rgba(11,13,16,0.65)_70%,rgba(11,13,16,0.88)_100%)] pointer-events-none"></div>
        
        {/* Layer 3: Bottom seamless fade into page content */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#111317] via-[#111317]/80 to-transparent pointer-events-none"></div>

        {/* Layer 4: High-tech Engineering Grid & Precision Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_65%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Brand Selector Strip */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          
          {/* Top Pill: Direct Air Logistics from Germany */}
          <motion.div 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181b22]/90 border border-[#292e3a] shadow-xl backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-[#f4efea]">
              🇩🇪 شحن مباشر من مستودعات ألمانيا إلى كافة مدن السعودية 🇸🇦
            </span>
            <span className="text-[#383f4f]">•</span>
            <span className="text-xs font-semibold text-[#b88655]">ضمان لمدة 24 شهر من ألمانيا</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#f4efea] tracking-tight leading-[1.22] mb-5"
          >
            DeutschPlex <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#f4efea] via-[#e2d8cd] to-[#b88655] bg-clip-text text-transparent">
              بوابتك المباشرة لقطع غيار السيارات الألمانية
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#c6beb4] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            استيراد فوري وشحن جوي سريع لقطع الغيار الأصلية (OEM) المعتمدة لسيارات <strong className="text-white">بورش، بي إم دبليو، أودي، مرسيدس بنز، وفولكس واجن</strong> بأعلى تصنيف جودة وخصم يصل إلى 45% مقارنة بالوكالات.
          </motion.p>

          {/* Interactive Luxury German Brand Showcase Dock (No text, pure large emblems) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-2 sm:p-3 rounded-2xl bg-[#111317]/90 border border-[#292e3a] backdrop-blur-xl shadow-2xl max-w-2xl mx-auto mb-8 grid grid-cols-5 gap-2 sm:gap-3"
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
                      ? 'bg-[#1b202a] shadow-xl border border-[#a71d2a]/60 ring-1 ring-[#a71d2a]/30 scale-[1.04]' 
                      : 'bg-[#14171e]/70 hover:bg-[#1a1f28] border border-[#252a36] hover:border-[#b88655]/50'
                  }`}
                >
                  <div className={`transition-all duration-300 flex items-center justify-center ${
                    isSelected 
                      ? 'scale-110 drop-shadow-[0_4px_12px_rgba(167,29,42,0.35)]' 
                      : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'
                  }`}>
                    <BrandLogo brandId={car.id} size={54} animateOnHover={false} showWordmark={false} />
                  </div>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeBrandIndicator"
                      className="absolute bottom-1 inset-x-3 sm:inset-x-4 h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-[#a71d2a] to-transparent shadow-[0_0_8px_#a71d2a]"
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
              onClick={() => {
                if (onSelectBrand) {
                  onSelectBrand(activeBrandId);
                }
                if (onNavigate) {
                  onNavigate('order');
                }
              }}
              className="px-7 py-3.5 bg-[#a71d2a] hover:bg-[#bd2432] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#a71d2a]/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>طلب تسعيرة فورية</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('categories')}
              className="px-7 py-3.5 bg-[#181b22]/90 hover:bg-[#202530] text-[#f4efea] border border-[#292e3a] hover:border-[#b88655]/60 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>تصفح كتالوج القطع</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

