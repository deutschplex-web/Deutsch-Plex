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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PART_CATEGORIES.map((cat, idx) => {
            const IconComp = ICONS_MAP[cat.iconName] || Zap;
            return (
              <motion.div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-[#181b22] hover:bg-[#1e232c] border border-[#292e3a] hover:border-[#a71d2a]/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-xl overflow-hidden"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#111317]">
                    <img
                      src={cat.imageUrl}
                      alt={cat.titleAr}
                      loading="eager"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        if (e.currentTarget.src !== cat.fallbackImageUrl) {
                          e.currentTarget.src = cat.fallbackImageUrl;
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                    />
                    {/* Atmospheric gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181b22] via-[#181b22]/30 to-transparent pointer-events-none" />
                    
                    {/* Floating Icon Emblem */}
                    <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-[#111317]/90 backdrop-blur-md border border-[#292e3a] flex items-center justify-center text-[#a71d2a] shadow-lg group-hover:bg-[#a71d2a] group-hover:text-white transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* OEM Quality Badge */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[11px] font-bold font-mono tracking-wider bg-black/75 backdrop-blur-md border border-white/15 text-[#f4efea] shadow">
                      OEM GENUINE
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 pt-3">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#b88655] transition-colors leading-snug">
                      {cat.titleAr}
                    </h3>

                    <p className="text-xs text-[#c6beb4] leading-relaxed mb-4">
                      {cat.examplesAr}
                    </p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#292e3a] flex items-center justify-between">
                    <span className="text-[11px] text-[#c6beb4] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                      الشحن: {cat.avgEstDays}
                    </span>
                    <span className="text-xs text-[#a71d2a] font-bold flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                      <span>طلب القطعة</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
