/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function Categories({ onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-20 bg-[#0a0a0c] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            كتالوج القطع الألمانية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            الأنظمة والقطع المتوفرة للاستيراد الفوري
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            نوفر جميع قطع الغيار الميكانيكية، الكهربائية، والهيكلية لسيارات مرسيدس، بي إم دبليو، أودي، وبورش بأعلى تصنيف ألماني معتمد.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PART_CATEGORIES.map((cat) => {
            const IconComp = ICONS_MAP[cat.iconName] || Zap;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="p-6 rounded-2xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-700 group-hover:text-white transition-all shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {cat.titleAr}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {cat.examplesAr}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500 font-mono">
                    الشحن: {cat.avgEstDays}
                  </span>
                  <span className="text-xs text-red-400 font-bold flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                    <span>طلب القطعة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
