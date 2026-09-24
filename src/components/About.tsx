/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Tag, 
  Search, 
  Plane, 
  Wrench,
  Sparkles,
  Building2,
  Check
} from 'lucide-react';
import DeutschPlexLogo from './DeutschPlexLogo';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDarkMode } = useTheme();
  const features = [
    {
      icon: Award,
      title: 'صناعة ألمانية 100%',
      desc: 'جميع القطع التي نوفرها (سواء OEM أو Aftermarket معتمد) مصنعة بأعلى مواصفات الجودة الألمانية من كبرى الشركات العالمية مثل Bosch وBrembo وBilstein.'
    },
    {
      icon: ShieldCheck,
      title: 'ضمان لمدة 24 شهر من ألمانيا',
      desc: 'استورد قطع غيار سيارتك من ألمانيا بثقة تامة. نحن نضمن لك جودة القطع التي نوفرها عبر ضمان حقيقي لمدة 24 شهراً يغطي العيوب المصنعية للقطع الميكانيكية والكهربائية.'
    },
    {
      icon: Tag,
      title: 'أسعار المصنع المباشرة',
      desc: 'شراء مباشر من ألمانيا بدون حلقات الوسطاء المتعددين أو هوامش أرباح الوكلاء المحليين المرتفعة، مما يوفر لك حتى 45% من التكلفة.'
    },
    {
      icon: Search,
      title: 'مطابقة دقيقة برقم الهيكل (VIN)',
      desc: 'الاعتماد الكامل على رقم الشاصيه المكون من 17 رقماً وحرفاً في استخراج كود القطعة المصنعي الدقيق، مما يلغي تماماً خطأ عدم التوافق بنسبة 100%.'
    },
    {
      icon: Plane,
      title: 'شحن جوي دولي سريع ومؤمّن',
      desc: 'شحن طلبك عبر شركات الشحن الدولية المتخصصة (مثل DHL) وتزويدك برقم بوليصة الشحن لتتبع خط سير الشحنة مباشرة عبر موقع الناقل.'
    },
    {
      icon: Wrench,
      title: 'استشارات فنية وهندسية مجانية',
      desc: 'فريقنا يضم خبراء ميكانيكا متخصصين في فحص الأعطال ومساعدتك في اختيار القطعة البديلة المناسبة لمشكلتك.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#dce0e8]/50 border-t border-[#C3C4CC] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ba1823]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#535864]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Part 1: Who We Are (About DeutschPlex) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C3C4CC] bg-white shadow-xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 border-b border-[#C3C4CC]">
                <div className="flex items-center gap-3">
                  <DeutschPlexLogo variant="emblem" size="sm" animated={false} isLightMode={!isDarkMode} />
                  <div>
                    <h4 className="text-sm font-bold text-[#181b22]">الاستيراد المباشر من ألمانيا</h4>
                    <p className="text-xs text-[#535864]">مقر التجهيز: فرانكفورت / شتوتغارت 🇩🇪</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold">
                  LIVE
                </span>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-4 py-6 border-b border-[#C3C4CC]">
                <div className="p-4 rounded-xl bg-[#eff1f5] border border-[#C3C4CC]">
                  <span className="block text-2xl font-black text-[#181b22] font-mono">100%</span>
                  <span className="text-xs text-[#535864]">مطابقة رقم الهيكل VIN</span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff1f5] border border-[#C3C4CC]">
                  <span className="block text-2xl font-black text-[#ba1823] font-mono">24 شهر</span>
                  <span className="text-xs text-[#535864]">ضمان معتمد من ألمانيا</span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff1f5] border border-[#C3C4CC]">
                  <span className="block text-2xl font-black text-[#535864] font-mono">35% - 45%</span>
                  <span className="text-xs text-[#535864]">توفير مقارنة بالوكالات</span>
                </div>
                <div className="p-4 rounded-xl bg-[#eff1f5] border border-[#C3C4CC]">
                  <span className="block text-2xl font-black text-emerald-700 font-mono">3 - 7 أيام</span>
                  <span className="text-xs text-[#535864]">شحن جوي سريع للعنوان</span>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between text-xs text-[#535864]">
                <span>الاعتماد: المنظومة الألمانية الرسمية VDA</span>
                <span className="font-mono text-[#535864]">ISO 9001:2026</span>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C3C4CC] text-xs font-bold text-[#ba1823] shadow-xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>من نحن | DeutschPlex</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] leading-tight">
              الجودة الألمانية الأصيلة، <br className="hidden sm:block" />
              من المصنع إلى سيارتك في السعودية مباشرة.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#535864] leading-relaxed">
              <p>
                <strong className="text-[#181b22] font-semibold">DeutschPlex</strong> هو مشروع متخصص في توفير قطع غيار السيارات الألمانية الفاخرة، يتم شراؤها وتوريدها مباشرة من مستودعات ومصانع كبرى في ألمانيا إلى المملكة العربية السعودية.
              </p>
              <p>
                نحن نفهم حساسية السيارات الألمانية ودقة هندستها، لذلك لا نعتمد على الاجتهاد أو التخمين؛ نطلب كل قطعة بناءً على الكتالوج الرقمي المصنعي الخاص برقم الهيكل <strong className="text-[#181b22] font-mono uppercase">(VIN)</strong> لضمان التطابق الميكانيكي والبرمجي بنسبة 100%.
              </p>
            </div>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C3C4CC] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#ba1823] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#181b22]">فواتير رسمية ورقم تتبع شحنة مباشر</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C3C4CC] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#ba1823] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#181b22]">تغطية شاملة لجميع مناطق المملكة</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C3C4CC] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#ba1823] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#181b22]">استبدال فوري عند وجود أي عيب مصنعي</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C3C4CC] shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#ba1823] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#181b22]">خبراء فنيون متخصصون بالسيارات الألمانية</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Subtle Elegant Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-[#C3C4CC]" />
          <div className="absolute px-4 bg-[#eff1f5] text-xs font-bold text-[#535864] uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ba1823]" />
            <span>المميزات والضمان</span>
          </div>
        </div>

        {/* Part 2: Our Competitive Features (مميزاتنا) */}
        <div>
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-bold text-[#535864] tracking-widest uppercase mb-2 block">
              مميزاتنا التنافسية
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] mb-4">
              لماذا يختار ملاك السيارات الألمانية DeutschPlex؟
            </h3>
            <p className="text-sm sm:text-base text-[#535864]">
              نجمع بين دقة الهندسة الألمانية، أسعار الشراء المباشرة بدون وسطاء، وضمان لمدة 24 شهر مع خدمة عملاء محلية.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#C3C4CC] hover:border-[#535864]/50 transition-colors group shadow-xs hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eff1f5] border border-[#C3C4CC] text-[#535864] group-hover:bg-[#535864] group-hover:text-white transition-colors flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="text-lg font-bold text-[#181b22] mb-2.5 group-hover:text-[#ba1823] transition-colors">
                    {feat.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#535864] leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
