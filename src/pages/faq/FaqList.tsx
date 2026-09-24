/**
 * Expandable list of questions and answers (data in src/data/faqs.ts).
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#dce0e8]/50 border-t border-[#C3C4CC] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#ba1823] tracking-widest uppercase mb-2 block">
            الأسئلة الشائعة
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] mb-3">
            كل ما تحتاج معرفته عن استيراد قطعك مع DeutschPlex
          </h2>
          <p className="text-sm sm:text-base text-[#535864]">
            إجابات واضحة وشفافة حول آلية المطابقة برقم الهيكل والضمان والشحن السريع.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#C3C4CC] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 text-[#181b22] hover:text-[#ba1823] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#ba1823] border border-[#ba1823] text-white' : 'bg-[#eff1f5] border border-[#C3C4CC] text-[#535864]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#535864] leading-relaxed border-t border-[#C3C4CC] pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
