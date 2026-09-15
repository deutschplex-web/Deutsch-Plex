/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft, ShieldCheck, Zap, Sparkles, CheckCircle2, MessageCircle, Barcode } from 'lucide-react';
import { GERMAN_BRANDS } from '../data/brands';

interface HeroProps {
  onSelectBrand?: (brandId: string) => void;
}

export default function Hero({ onSelectBrand }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center">
      
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[#0a0a0d] -z-20"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-red-900/15 via-red-950/10 to-transparent blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-900/40 blur-3xl rounded-full -z-10 pointer-events-none"></div>

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/60 shadow-lg mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold text-neutral-300">
              🇩🇪 استيراد مباشر من ألمانيا إلى السعودية 🇸🇦
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-xs font-semibold text-red-400">ضمان ذهبي سنتين</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] mb-6">
            بوابتك المباشرة لقطع غيار <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-400 bg-clip-text text-transparent">
              السيارات الألمانية الأصلية
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            توفير قطع الغيار الأصلية (OEM) والمعتمدة لسيارات <strong className="text-white font-semibold">مرسيدس، بي إم دبليو، أودي، وبورش</strong> عبر المطابقة الرقمية التامة برقم الهيكل <strong className="text-white font-mono uppercase">(VIN)</strong> والشحن الجوي المباشر لباب منزلك.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#order"
              id="hero-cta-order"
              className="w-full sm:w-auto px-8 py-4 bg-red-700 hover:bg-red-600 text-white rounded-xl font-bold text-base shadow-xl shadow-red-950/60 transition-all flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>اطلب قطعتك الآن برقم الهيكل</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </a>

            <a
              href="#vin-tool"
              id="hero-cta-vin"
              className="w-full sm:w-auto px-7 py-4 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-xl font-bold text-base border border-neutral-700/80 transition-all flex items-center justify-center gap-2.5 hover:border-neutral-500"
            >
              <Barcode className="w-5 h-5 text-red-400" />
              <span>فحص وتدقيق رقم الهيكل (VIN)</span>
            </a>

            <a
              href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%20%D8%BA%D9%8A%D8%A7%D8%B1%20%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%AA%D9%8A"
              target="_blank"
              rel="noreferrer"
              id="hero-cta-whatsapp"
              className="w-full sm:w-auto px-6 py-4 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 rounded-xl font-bold text-base border border-emerald-500/40 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>واتساب مباشر</span>
            </a>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-16">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-black text-white font-mono">100%</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">مطابقة تامة بالـ VIN</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-black text-red-500 font-mono">+15,000</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">قطعة ألمانية معتمدة</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-black text-amber-400 font-mono">2 سنة</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">ضمان استبدال ذهبي</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
              <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3-7 أيام</span>
              <span className="text-xs text-neutral-400 font-medium mt-1 block">شحن جوي سريع لبابك</span>
            </div>
          </div>

          {/* Supported German Brands Bar */}
          <div className="pt-8 border-t border-neutral-800/80">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-4">
              العلامات الألمانية المدعومة بالكتالوجات الرسمية:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {GERMAN_BRANDS.map((brand) => (
                <a
                  key={brand.id}
                  href="#order"
                  onClick={() => onSelectBrand && onSelectBrand(brand.id)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-red-600/50 transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 group-hover:scale-125 transition-transform"></span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                    {brand.nameAr}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">({brand.nameEn})</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
