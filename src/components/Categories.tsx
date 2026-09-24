/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PartCategoryId } from '../types';

interface CategoriesProps {
  onSelectCategory: (catId: PartCategoryId) => void;
}

interface CategoryCardItem {
  id: PartCategoryId;
  image: string;
  fallbackImage: string;
  title: string;
  alt: string;
}

const CATEGORY_ITEMS: CategoryCardItem[] = [
  {
    id: 'transmission',
    image: '/gearbox.webp',
    fallbackImage: '/gearbox.jpg',
    title: 'القير وناقل الحركة والدفرنس',
    alt: 'القير وناقل الحركة والدفرنس - قطع غيار ألمانية أصلية'
  },
  {
    id: 'engine',
    image: '/engine-turbo.webp',
    fallbackImage: '/engine-turbo.jpg',
    title: 'المحرك وملحقاته والتيربو',
    alt: 'المحرك وملحقاته والتيربو - قطع غيار ألمانية أصلية'
  },
  {
    id: 'suspension',
    image: '/suspension.webp',
    fallbackImage: '/suspension.jpg',
    title: 'المساعدات ونظام التعليق الهوائي',
    alt: 'المساعدات ونظام التعليق الهوائي - قطع غيار ألمانية أصلية'
  },
  {
    id: 'brakes',
    image: '/brakes.webp',
    fallbackImage: '/brakes.jpg',
    title: 'أنظمة الفرامل والفحمات',
    alt: 'أنظمة الفرامل والفحمات - قطع غيار ألمانية أصلية'
  },
  {
    id: 'electronics',
    image: '/electronics.webp',
    fallbackImage: '/electronics.jpg',
    title: 'الكمبيوترات والحساسات والإضاءة',
    alt: 'الكمبيوترات والحساسات والإضاءة - قطع غيار ألمانية أصلية'
  },
  {
    id: 'cooling',
    image: '/cooling.webp',
    fallbackImage: '/cooling.jpg',
    title: 'التبريد والرديتر والمكيف',
    alt: 'التبريد والرديتر والمكيف - قطع غيار ألمانية أصلية'
  }
];

export default function Categories({ onSelectCategory }: CategoriesProps) {
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
          {CATEGORY_ITEMS.map((cat, idx) => (
            <motion.div
              key={cat.id}
              role="button"
              tabIndex={0}
              aria-label={cat.title}
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
                src={cat.image}
                alt={cat.alt}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (e.currentTarget.src !== window.location.origin + cat.fallbackImage) {
                    e.currentTarget.src = cat.fallbackImage;
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
