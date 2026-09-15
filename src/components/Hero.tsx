/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Zap, Sparkles, CheckCircle2, MessageCircle, Barcode } from 'lucide-react';
import { GERMAN_BRANDS } from '../data/brands';
import DeutschPlexLogo from './DeutschPlexLogo';
import BrandLogo from './BrandLogo';

interface HeroProps {
  onSelectBrand?: (brandId: string) => void;
}

export default function Hero({ onSelectBrand }: HeroProps) {
  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center">
      
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[#0a0a0d] -z-20"></div>
      
      {/* Ambient Red & Crimson Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-b from-red-800/15 via-red-950/10 to-transparent blur-[130px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-950/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>

      {/* Subtle Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Main Official DeutschPlex Emblem Showcase */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="relative group cursor-pointer">
              {/* Radial backdrop pulse behind logo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-900/10 to-amber-600/15 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative px-6 py-4 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl shadow-black/80 flex items-center gap-4 hover:border-neutral-700 transition-all">
                <DeutschPlexLogo 
                  variant="horizontal" 
                  size="md" 
                  animated={true}
                />
              </div>
            </div>
          </motion.div>

          {/* Top Pill Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/60 shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-neutral-300">
                🇩🇪 استيراد مباشر من ألمانيا إلى السعودية 🇸🇦
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-semibold text-red-400">ضمان ذهبي سنتين</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] mb-6"
          >
            بوابتك المباشرة لقطع غيار <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
              السيارات الألمانية الأصلية
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            توفير قطع الغيار الأصلية (OEM) والمعتمدة لسيارات <strong className="text-white font-semibold">مرسيدس، بي إم دبليو، أودي، وبورش</strong> عبر المطابقة الرقمية التامة برقم الهيكل <strong className="text-white font-mono uppercase">(VIN)</strong> والشحن الجوي المباشر لباب منزلك.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#order"
              id="hero-cta-order"
              className="w-full sm:w-auto px-8 py-4 bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold text-base shadow-xl shadow-red-950/60 transition-all flex items-center justify-center gap-3 group"
            >
              <span>اطلب قطعتك الآن برقم الهيكل</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#vin-tool"
              id="hero-cta-vin"
              className="w-full sm:w-auto px-7 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-xl font-bold text-base border border-neutral-700/80 transition-all flex items-center justify-center gap-2.5 hover:border-neutral-500"
            >
              <Barcode className="w-5 h-5 text-red-400" />
              <span>فحص وتدقيق رقم الهيكل (VIN)</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%20%D8%BA%D9%8A%D8%A7%D8%B1%20%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A"
              target="_blank"
              rel="noreferrer"
              id="hero-cta-whatsapp"
              className="w-full sm:w-auto px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 rounded-xl font-bold text-base border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>واتساب مباشر</span>
            </motion.a>
          </motion.div>

          {/* Highlights Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-16"
          >
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-white font-mono">100%</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">مطابقة تامة بالـ VIN</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-red-500 font-mono">+15,000</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">قطعة ألمانية معتمدة</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400 font-mono">2 سنة</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">ضمان استبدال ذهبي</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm hover:border-neutral-700 transition-colors">
              <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3-7 أيام</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">شحن جوي سريع لبابك</span>
            </div>
          </motion.div>

          {/* Supported German Brands Showcase with Official Logos */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-neutral-800/80"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-8 bg-neutral-700"></div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                العلامات الألمانية المعتمدة بالكتالوجات الرسمية:
              </p>
              <div className="h-[1px] w-8 bg-neutral-700"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {GERMAN_BRANDS.map((brand) => (
                <motion.a
                  key={brand.id}
                  href="#order"
                  onClick={() => onSelectBrand && onSelectBrand(brand.id)}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 hover:bg-neutral-850 border border-neutral-800 hover:border-red-600/60 transition-all flex flex-col items-center justify-center gap-2.5 group cursor-pointer shadow-lg hover:shadow-red-950/30"
                >
                  {/* Official Brand Logo Icon */}
                  <div className="h-12 flex items-center justify-center">
                    <BrandLogo 
                      brandId={brand.id} 
                      size="sm" 
                      animateOnHover={false} 
                    />
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      {brand.nameAr}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                      {brand.nameEn}
                    </div>
                  </div>

                  <span className="text-[10px] text-neutral-500 bg-neutral-800/80 px-2 py-0.5 rounded-full font-sans group-hover:bg-red-950/60 group-hover:text-red-300 transition-colors">
                    اطلب القطع ←
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
