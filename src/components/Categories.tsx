/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PART_CATEGORIES } from '../data/brands';
import { PartCategoryId } from '../types';
import { 
  Disc, 
  Sliders, 
  Zap, 
  Cpu, 
  Wind, 
  Shield, 
  Truck, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (catId: PartCategoryId) => void;
}

const ICONS_MAP: Record<string, any> = {
  Disc,
  Sliders,
  Zap,
  Cpu,
  Wind,
  Shield,
  Truck,
  CheckCircle2
};

export default function Categories({ onSelectCategory}: CategoriesProps) {
  return (
    <section id="categories" className="py-20 bg-[#111317] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-bold text-[#a71d2a] tracking-widest uppercase mb-2 block">
            كتالوج القطع الألمانية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f4efea] mb-4">
            الأنظمة والقطع المتوفرة للاستيراد الفوري
          </h2>
          <p className="text-sm sm:text-base text-[#c6beb4]">
            نوفر جميع قطع الغيار الميكانيكية، الكهربائية، والهيكلية لسيارات مرسيدس، بي إم دبليو، أودي، وبورش بأعلى تصنيف ألماني معتمد.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PART_CATEGORIES.map((cat, idx) => {
            const IconComp = ICONS_MAP[cat.iconName] || Zap;
            return (
              <motion.div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl bg-[#181b22] hover:bg-[#1e232c] border border-[#292e3a] hover:border-[#a71d2a]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#111317] border border-[#292e3a] flex items-center justify-center text-[#a71d2a] mb-5 group-hover:bg-[#a71d2a] group-hover:text-white transition-all shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#b88655] transition-colors">
                    {cat.titleAr}
                  </h3>

                  <p className="text-xs text-[#c6beb4] leading-relaxed mb-4">
                    {cat.examplesAr}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#292e3a] flex items-center justify-between">
                  <span className="text-[11px] text-[#c6beb4] font-mono">
                    الشحن: {cat.avgEstDays}
                  </span>
                  <span className="text-xs text-[#a71d2a] font-bold flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                    <span>طلب القطعة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
