/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Barcode, 
  Gauge, 
  MapPin, 
  Search, 
  Flame,
  Award
} from 'lucide-react';
import { HERO_SHOWCASE_DATA, ShowcaseVehicle } from '../data/heroShowcase';
import DeutschPlexLogo from './DeutschPlexLogo';
import BrandLogo from './BrandLogo';
import { PageId } from '../types';

interface HeroProps {
  onSelectBrand?: (brandId: string) => void;
  onSearchVin?: (vin: string, brand?: string) => void;
  onNavigate?: (page: PageId) => void;
}

export default function Hero({ onSelectBrand, onSearchVin, onNavigate }: HeroProps) {
  const [activeBrandId, setActiveBrandId] = useState<'porsche' | 'bmw' | 'audi' | 'mercedes'>('porsche');
  const [heroVinInput, setHeroVinInput] = useState<string>('');

  const activeVehicle: ShowcaseVehicle = 
    HERO_SHOWCASE_DATA.find((v) => v.id === activeBrandId) || HERO_SHOWCASE_DATA[0];

  const handleSelectVehicle = (id: 'porsche' | 'bmw' | 'audi' | 'mercedes') => {
    setActiveBrandId(id);
    if (onSelectBrand) {
      onSelectBrand(id);
    }
  };

  const handleVinSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanVin = heroVinInput.trim().toUpperCase();
    if (cleanVin) {
      if (onSearchVin) {
        onSearchVin(cleanVin, activeBrandId);
      } else if (onNavigate) {
        onNavigate('order');
      }
    } else {
      // Use active vehicle's sample VIN if empty
      if (onSearchVin) {
        onSearchVin(activeVehicle.sampleVin, activeBrandId);
      } else if (onNavigate) {
        onNavigate('order');
      }
    }
  };

  const handleUseSampleVin = (sampleVin: string, brandId: string) => {
    setHeroVinInput(sampleVin);
    if (onSearchVin) {
      onSearchVin(sampleVin, brandId);
    } else if (onNavigate) {
      onNavigate('order');
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[96vh] flex items-center justify-center">
      
      {/* Dynamic Cinematic Automotive Background Picture with Smooth Crossfade */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-[#0d0f13]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeVehicle.bgImageUrl}
              alt={`${activeVehicle.brandNameEn} ${activeVehicle.modelHighlightEn}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.15]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer Moody Studio Overlays for Perfect Contrast & Anti-Glare */}
        {/* Layer 1: Top navigation gradient shadow */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b0d10]/95 via-[#0b0d10]/75 to-transparent pointer-events-none"></div>
        
        {/* Layer 2: Center radial vignette focusing attention on vehicle and text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,19,23,0.5)_0%,rgba(11,13,16,0.85)_85%,rgba(11,13,16,0.98)_100%)] pointer-events-none"></div>
        
        {/* Layer 3: Bottom seamless fade into page content */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111317] via-[#111317]/90 to-transparent pointer-events-none"></div>

        {/* Layer 4: High-tech Engineering Grid & Precision Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_45%,#000_65%,transparent_100%)] pointer-events-none"></div>
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
            قطع غيار سيارات النخبة الألمانية <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#f4efea] via-[#e2d8cd] to-[#b88655] bg-clip-text text-transparent">
              مباشرة من المصنع برقم الهيكل (VIN)
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#c6beb4] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            استيراد فوري وشحن جوي سريع لقطع الغيار الأصلية (OEM) المعتمدة لسيارات <strong className="text-white">بورش، بي إم دبليو، أودي، ومرسيدس</strong> بأعلى تصنيف جودة وخصم يصل إلى 45% مقارنة بالوكالات.
          </motion.p>

          {/* Interactive Dribbble-Style Brand Switcher (Porsche, BMW, Audi, Mercedes) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-1.5 rounded-2xl bg-[#111317]/85 border border-[#292e3a] backdrop-blur-xl shadow-2xl max-w-2xl mx-auto mb-8 grid grid-cols-4 gap-1.5"
          >
            {HERO_SHOWCASE_DATA.map((car) => {
              const isSelected = activeBrandId === car.id;
              return (
                <button
                  key={car.id}
                  onClick={() => handleSelectVehicle(car.id as 'porsche' | 'bmw' | 'audi' | 'mercedes')}
                  className={`relative py-3 px-2 rounded-xl text-xs font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1.5 ${
                    isSelected 
                      ? 'bg-[#1e232d] text-white shadow-lg border border-[#383f4f]' 
                      : 'text-[#c6beb4] hover:text-white hover:bg-[#181b22]/70'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <BrandLogo brandId={car.id} size={18} animateOnHover={false} />
                    <span className="font-extrabold tracking-wide">{car.brandNameAr}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-70 hidden sm:inline-block">
                    {car.brandNameEn}
                  </span>
                  
                  {isSelected && (
                    <motion.div 
                      layoutId="activeBrandIndicator"
                      className="absolute bottom-0 inset-x-3 h-[2.5px] rounded-full bg-[#a71d2a]"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Dribbble Style Spotlight Showcase & Quick VIN Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto mb-10">
          
          {/* Right/Top Card: Active Vehicle Telemetry & Origin HUD Card */}
          <motion.div 
            key={activeVehicle.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 rounded-2xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-md shadow-2xl space-y-4"
          >
            {/* Header with Origin & Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-[#292e3a]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#111317] border border-[#292e3a] flex items-center justify-center">
                  <BrandLogo brandId={activeVehicle.id} size={22} animateOnHover={false} />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">
                    {activeVehicle.modelHighlightAr}
                  </h3>
                  <p className="text-[11px] text-[#b88655] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{activeVehicle.originCityAr}</span>
                  </p>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#111317] border border-[#292e3a] text-[#f4efea]">
                {activeVehicle.vinPrefix}
              </span>
            </div>

            {/* Performance Specs Grid */}
            <div className="grid grid-cols-3 gap-2.5 py-1 text-center">
              <div className="p-2.5 rounded-xl bg-[#111317]/80 border border-[#292e3a]">
                <span className="block text-[10px] text-[#c6beb4]">المحرك المعتمد</span>
                <span className="text-xs font-bold text-white font-mono mt-0.5 block truncate" title={activeVehicle.engineSpecAr}>
                  {activeVehicle.engineSpecAr.split(' ')[0]} {activeVehicle.engineSpecAr.split(' ')[1]}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111317]/80 border border-[#292e3a]">
                <span className="block text-[10px] text-[#c6beb4]">التسارع</span>
                <span className="text-xs font-bold text-[#b88655] font-mono mt-0.5 block">
                  {activeVehicle.accelerationAr.replace('0-100 كم/س: ', '')}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#111317]/80 border border-[#292e3a]">
                <span className="block text-[10px] text-[#c6beb4]">الضمان</span>
                <span className="text-xs font-bold text-emerald-400 font-mono mt-0.5 block">
                  24 شهر
                </span>
              </div>
            </div>

            {/* Top Recommended Catalog Category */}
            <div className="p-3 rounded-xl bg-[#111317]/60 border border-[#292e3a]/80 text-xs text-[#c6beb4]">
              <span className="text-white font-semibold block mb-1">القطع الأكثر طلباً بالمستودعات:</span>
              <p className="text-[11px] leading-relaxed text-[#c6beb4]">
                {activeVehicle.primaryCategoryAr}
              </p>
            </div>

            {/* Quick Sample Action */}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => handleUseSampleVin(activeVehicle.sampleVin, activeVehicle.id)}
                className="text-xs font-bold text-[#b88655] hover:text-[#e2d8cd] flex items-center gap-1.5 transition-colors"
              >
                <Barcode className="w-4 h-4" />
                <span>تجربة فحص VIN تجريبي: <strong className="font-mono">{activeVehicle.sampleVin.slice(0, 7)}...</strong></span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('order');
                  }
                }}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#a71d2a] hover:bg-[#bd2432] text-white font-bold transition-all shadow-md cursor-pointer"
              >
                طلب تسعيرة ←
              </button>
            </div>
          </motion.div>

          {/* Left/Bottom Card: High Precision VIN Decoder Search Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-md shadow-2xl space-y-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#a71d2a] tracking-wider uppercase block mb-1">
                  تسعير مباشر ومعتمد
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  البحث وتسعير القطع برقم الهيكل (VIN)
                </h3>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>مطابقة 100% مضمونة</span>
              </div>
            </div>

            {/* Interactive Search Bar Form */}
            <form onSubmit={handleVinSubmit} className="space-y-3">
              <div className="relative flex items-center">
                <div className="absolute right-4 text-[#c6beb4]">
                  <Barcode className="w-5 h-5 text-[#b88655]" />
                </div>
                <input
                  type="text"
                  value={heroVinInput}
                  onChange={(e) => setHeroVinInput(e.target.value.toUpperCase())}
                  maxLength={17}
                  placeholder="أدخل رقم الهيكل (VIN) المكون من 17 خانة..."
                  className="w-full pr-12 pl-36 py-4 rounded-xl bg-[#111317] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a] text-white placeholder:text-neutral-500 font-mono text-sm sm:text-base uppercase tracking-wider outline-none transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute left-2 px-5 py-2.5 bg-[#a71d2a] hover:bg-[#bd2432] text-white rounded-lg font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>طلب تسعيرة</span>
                </button>
              </div>

              {/* Sample VIN Chips for Fast Testing */}
              <div className="flex items-center gap-2 flex-wrap pt-1 text-xs text-[#c6beb4]">
                <span className="font-semibold text-neutral-400">عينة سريعة:</span>
                {HERO_SHOWCASE_DATA.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleUseSampleVin(c.sampleVin, c.id)}
                    className="px-2.5 py-1 rounded-lg bg-[#111317] hover:bg-[#202530] border border-[#292e3a] hover:border-[#b88655]/60 text-[#f4efea] font-mono text-[11px] transition-all flex items-center gap-1"
                  >
                    <span>{c.brandNameAr}:</span>
                    <span className="text-[#b88655] font-bold">{c.sampleVin.slice(0, 6)}...</span>
                  </button>
                ))}
              </div>
            </form>

            {/* Key Assurance Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#292e3a] text-center text-xs">
              <div className="flex items-center justify-center gap-1.5 text-[#c6beb4]">
                <ShieldCheck className="w-4 h-4 text-[#a71d2a]" />
                <span>فواتير رسمية VDA</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#c6beb4]">
                <Zap className="w-4 h-4 text-[#b88655]" />
                <span>شحن جوي 3-7 أيام</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[#c6beb4]">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>توفير حتى 45%</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-sm hover:border-[#b88655]/50 transition-colors">
            <span className="block text-2xl sm:text-3xl font-black text-white font-mono">100%</span>
            <span className="text-xs text-[#c6beb4] font-medium mt-1 block">مطابقة تامة برقم الهيكل VIN</span>
          </div>
          <div className="p-4 rounded-xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-sm hover:border-[#a71d2a]/50 transition-colors">
            <span className="block text-2xl sm:text-3xl font-black text-[#a71d2a] font-mono">+15,000</span>
            <span className="text-xs text-[#c6beb4] font-medium mt-1 block">قطعة متوفرة للشحن الفوري</span>
          </div>
          <div className="p-4 rounded-xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-sm hover:border-[#b88655]/50 transition-colors">
            <span className="block text-2xl sm:text-3xl font-black text-[#b88655] font-mono">24 شهر</span>
            <span className="text-xs text-[#c6beb4] font-medium mt-1 block">ضمان معتمد من ألمانيا</span>
          </div>
          <div className="p-4 rounded-xl bg-[#181b22]/90 border border-[#292e3a] backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
            <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3 - 7 أيام</span>
            <span className="text-xs text-[#c6beb4] font-medium mt-1 block">شحن DHL Express لبابك</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

