/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
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
      title: 'ضمان لمدة 24 شهر من ألمانيا',
      desc: 'استورد قطع غيار سيارتك من ألمانيا بثقة تامة. نحن نضمن لك جودة القطع التي نوفرها عبر ضمان حقيقي لمدة 24 شهراً يغطي العيوب المصنعية للقطع الميكانيكية والكهربائية. في حال وجود أي خلل مصنعي، نقوم بدورنا كوسيط لضمان استبدال القطعة لك بسلاسة.'
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
    <section id="features" className="py-20 bg-[#eff1f5] border-t border-[#C3C4CC] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-bold text-[#535864] tracking-widest uppercase mb-2 block">
            المميزات التنافسية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] mb-4">
            لماذا يختار ملاك السيارات الألمانية DeutschPlex؟
          </h2>
          <p className="text-sm sm:text-base text-[#535864]">
            نجمع بين دقة الهندسة الألمانية وسرعة الشحن الجوي وخدمة العملاء المحلية على مدار الساعة.
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

                <h3 className="text-lg font-bold text-[#181b22] mb-2.5 group-hover:text-[#ba1823] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#535864] leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
