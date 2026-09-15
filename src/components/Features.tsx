/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Award, 
  ShieldCheck, 
  Tag, 
  Search, 
  Plane, 
  Wrench 
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Award,
      title: 'صناعة ألمانية 100%',
      desc: 'جميع القطع التي نوفرها (سواء OEM أو Aftermarket معتمد) مصنعة بأعلى مواصفات الجودة الألمانية من شركات كبرى مثل Bosch وBrembo وBilstein.'
    },
    {
      icon: ShieldCheck,
      title: 'ضمان ذهبي عامين',
      desc: 'ثقتنا في جودة واختبارات المنتجات تمكننا من تقديم ضمان استبدال حقيقي لمدة 24 شهراً كاملاً لحماية استثمارك وراحة بالك.'
    },
    {
      icon: Tag,
      title: 'أسعار المصنع المباشرة',
      desc: 'شراء مباشر من ألمانيا بدون حلقات الوسطاء المتعددين أو هوامش أرباح الوكلاء المحليين المرتفعة، مما يوفر لك حتى 45%.'
    },
    {
      icon: Search,
      title: 'مطابقة دقيقة برقم الهيكل (VIN)',
      desc: 'الاعتماد الكامل على رقم الشاصيه المكون من 17 رقماً وحرفاً في استخراج كود القطعة الدقيق، مما يلغي تماماً خطأ عدم التوافق.'
    },
    {
      icon: Plane,
      title: 'شحن جوي سريع ومؤمّن',
      desc: 'شحن مباشر عبر رحلات الشحن الجوي من مطار فرانكفورت إلى الرياض وجدة والدمام مع تتبع دقيق وتخليص جمركي شامل.'
    },
    {
      icon: Wrench,
      title: 'استشارات هندسية مجانية',
      desc: 'فريقنا يضم خبراء ميكانيكا متخصصين في فحص الأعطال ومساعدتك في اختيار القطعة البديلة المناسبة لمشكلتك.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#0a0a0c] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            المميزات التنافسية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            لماذا يختار ملاك السيارات الألمانية DeutschPlex؟
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            نحن لا نوفر مجرد قطع غيار، بل نقدم منظومة متكاملة من الثقة والدقة والأداء لحماية سيارتك الفاخرة.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-700 group-hover:text-white transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
