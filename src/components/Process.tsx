/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FileEdit, Search, CheckCircle2, Truck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: FileEdit,
      title: 'تقديم الطلب وبيانات السيارة',
      desc: 'املأ النموذج بالماركة ورقم الهيكل (VIN) ووصف القطعة المطلوبة، أو تواصل معنا مباشرة عبر الواتساب.'
    },
    {
      num: '02',
      icon: Search,
      title: 'البحث والتدقيق في ألمانيا',
      desc: 'يقوم مهندسونا بمطابقة رقم الهيكل في الكتالوجات الرسمية واختيار أفضل العروض سعراً وجودة في فرانكفورت وميونخ.'
    },
    {
      num: '03',
      icon: CheckCircle2,
      title: 'عرض السعر والتأكيد',
      desc: 'نرسل لك عرض سعر رسمي شامل لثمن القطعة والشحن والضريبة، وبعد موافقتك يتم تجهيز وفحص الطلب فوراً.'
    },
    {
      num: '04',
      icon: Truck,
      title: 'الشحن عبر الشركات المعتمدة ورقم التتبع',
      desc: 'يتم شحن طلبك عبر شركات الشحن الدولية (مثل DHL) وتزويدك برقم بوليصة التتبع لتتبع الشحنة مباشرة عبر موقع شركة الشحن حتى الاستلام.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#eff1f5] border-y border-[#C3C4CC] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-bold text-[#ba1823] tracking-widest uppercase mb-2 block">
            رحلة العميل
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] mb-4">
            كيف تطلب قطعتك من ألمانيا بكل سهولة؟
          </h2>
          <p className="text-sm sm:text-base text-[#535864]">
            خطوات واضحة وسريعة تضمن وصول القطعة المطابقة تماماً لسيارتك دون أي عناء.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-2xl bg-white border border-[#C3C4CC] hover:border-[#ba1823]/60 transition-colors flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#eff1f5] border border-[#C3C4CC] text-[#ba1823] group-hover:bg-[#ba1823] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-3xl font-black text-[#C3C4CC] group-hover:text-[#535864]/40 transition-colors">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#181b22] mb-2 group-hover:text-[#ba1823] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#535864] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#C3C4CC] flex items-center justify-between text-[11px] text-[#535864]">
                  <span>خطوة {idx + 1} من 4</span>
                  <span className="text-emerald-600 font-semibold">مضمونة 100%</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
