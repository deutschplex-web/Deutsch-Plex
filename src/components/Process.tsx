/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
      desc: 'نرسل لك عرض سعر رسمي شامل لثمن القطعة والشحن السريع والضريبة، وبعد موافقتك يتم إتمام الدفع الآمن.'
    },
    {
      num: '04',
      icon: Truck,
      title: 'الشحن السريع والتوصيل لبابك',
      desc: 'شحن جوي فوري برقم تتبع مباشر حتى وصول الشحنة إلى مدينتك أو ورشة الصيانة المختارة خلال أيام معدودة.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#0c0c10] border-y border-neutral-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            رحلة العميل
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            كيف تطلب قطعتك من ألمانيا بكل سهولة؟
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            خطوات واضحة وسريعة تضمن وصول القطعة المطابقة تماماً لسيارتك دون أي عناء.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-red-600/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-neutral-600 group-hover:text-red-500 transition-colors">
                      {s.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-red-700 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                  <span>المرحلة {s.num}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
