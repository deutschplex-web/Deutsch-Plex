/**
 * Grid of clickable category image cards. Clicking a card opens the order form
 * with that category pre-selected. Card data lives in src/data/categories.ts.
 */

import { motion } from 'motion/react';
import { PartCategoryId } from '../../types';
import { PART_CATEGORIES } from '../../data/categories';

interface CategoryGridProps {
  onSelectCategory: (categoryId: PartCategoryId) => void;
}

export default function CategoryGrid({ onSelectCategory }: CategoryGridProps) {
  return (
    <section id="categories" className="py-20 bg-[#eff1f5] relative" dir="rtl">
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
            كتالوج القطع الألمانية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] mb-4">
            الأنظمة والقطع المتوفرة للاستيراد الفوري
          </h2>
          <p className="text-sm sm:text-base text-[#535864]">
            نوفر جميع قطع الغيار الميكانيكية، الكهربائية، والهيكلية لسيارات مرسيدس، بي إم دبليو، أودي، وبورش بأعلى تصنيف ألماني معتمد.
          </p>
        </motion.div>

        {/* 6-Category Image Grid: Desktop 3 cols x 2 rows, Tablet 2 cols, Mobile 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PART_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              role="button"
              tabIndex={0}
              aria-label={cat.titleAr}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group cursor-pointer rounded-[16px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-[#C3C4CC]/50 hover:border-[#ba1823]/40 aspect-[16/9] flex items-center justify-center"
            >
              <img
                src={cat.imageUrl}
                alt={`${cat.titleAr} - قطع غيار ألمانية أصلية`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + cat.fallbackImageUrl) {
                    e.currentTarget.src = cat.fallbackImageUrl;
                  }
                }}
                className="w-full h-full aspect-[16/9] object-contain block transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
