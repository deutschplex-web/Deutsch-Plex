/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/brands';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0a0a0c] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            الأسئلة الشائعة
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            كل ما تحتاج معرفته عن استيراد قطعك مع DeutschPlex
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
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
                className="rounded-2xl bg-neutral-900/60 border border-neutral-800 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 text-white hover:text-red-400 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-red-950 border-red-800 text-red-400' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4 animate-in fade-in duration-200">
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
