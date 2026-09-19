/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import DeutschPlexLogo from './DeutschPlexLogo';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#14171e] border-t border-[#292e3a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#292e3a] bg-[#181b22] shadow-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#292e3a]">
                <div className="flex items-center gap-3">
                  <DeutschPlexLogo variant="emblem" size="sm" animated={false} />
                  <div>
                    <h4 className="text-sm font-bold text-white">الاستيراد المباشر من ألمانيا</h4>
                    <p className="text-xs text-[#c6beb4]">مقر التجهيز: فرانكفورت / شتوتغارت 🇩🇪</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold">
                  LIVE
                </span>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-[#292e3a]">
                <div className="p-4 rounded-xl bg-[#111317] border border-[#292e3a]">
                  <span className="block text-2xl font-black text-white font-mono">100%</span>
                  <span className="text-xs text-[#c6beb4]">مطابقة رقم الهيكل VIN</span>
                </div>
                <div className="p-4 rounded-xl bg-[#111317] border border-[#292e3a]">
                  <span className="block text-2xl font-black text-[#a71d2a] font-mono">24 شهر</span>
                  <span className="text-xs text-[#c6beb4]">ضمان معتمد من ألمانيا</span>
                </div>
                <div className="p-4 rounded-xl bg-[#111317] border border-[#292e3a]">
                  <span className="block text-2xl font-black text-[#b88655] font-mono">35% - 45%</span>
                  <span className="text-xs text-[#c6beb4]">توفير مقارنة بالوكالات</span>
                </div>
                <div className="p-4 rounded-xl bg-[#111317] border border-[#292e3a]">
                  <span className="block text-2xl font-black text-emerald-400 font-mono">3 - 7 أيام</span>
                  <span className="text-xs text-[#c6beb4]">شحن جوي سريع لبابك</span>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs text-[#c6beb4]">
                <span>الاعتماد: المنظومة الألمانية الرسمية VDA</span>
                <span className="font-mono text-neutral-500">ISO 9001:2026</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold text-[#a71d2a] tracking-widest uppercase block">
              عن المشروع
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f4efea] leading-tight">
              الجودة الألمانية الأصيلة، <br className="hidden sm:block" />
              من المصنع إلى سيارتك في السعودية مباشرة.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#c6beb4] leading-relaxed">
              <p>
                <strong className="text-white font-semibold">DeutschPlex</strong> هو مشروع متخصص في توفير قطع غيار السيارات الألمانية الفاخرة، يتم شراؤها وتوريدها مباشرة من مستودعات ومصانع كبرى في ألمانيا إلى المملكة العربية السعودية.
              </p>
              <p>
                نحن نفهم حساسية السيارات الألمانية ودقة هندستها، لذلك لا نعتمد على الاجتهاد أو التخمين؛ نطلب كل قطعة بناءً على الكتالوج الرقمي المصنعي الخاص برقم الهيكل <strong className="text-white font-mono uppercase">(VIN)</strong> لضمان التطابق الميكانيكي والبرمجي بنسبة 100%.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181b22] border border-[#292e3a]">
                <CheckCircle2 className="w-5 h-5 text-[#a71d2a] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">فواتير رسمية ورقم تتبع شحنة مباشر</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181b22] border border-[#292e3a]">
                <CheckCircle2 className="w-5 h-5 text-[#a71d2a] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">تغطية شاملة لجميع مناطق المملكة</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181b22] border border-[#292e3a]">
                <CheckCircle2 className="w-5 h-5 text-[#a71d2a] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">استبدال فوري عند وجود أي عيب مصنعي</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181b22] border border-[#292e3a]">
                <CheckCircle2 className="w-5 h-5 text-[#a71d2a] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">خبراء متخصصون بالسيارات الألمانية</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
