/**
 * One category opened from the categories grid (/#categories/<id>):
 * the brands we sell in it, each with its full profile, plus a button to
 * request a quote for this category and links to the other categories.
 */

import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, PackageCheck, Truck } from 'lucide-react';
import { PartCategory, PartCategoryId } from '../../types';
import { PART_CATEGORIES } from '../../data/categories';
import { BRAND_PROFILES } from '../../data/brandProfiles';
import BrandProfileCard from './BrandProfileCard';

interface CategoryDetailProps {
  category: PartCategory;
  onOpenCategory: (categoryId: PartCategoryId) => void;
  onOrderCategory: (categoryId: PartCategoryId) => void;
}

export default function CategoryDetail({ category, onOpenCategory, onOrderCategory }: CategoryDetailProps) {
  const brands = BRAND_PROFILES[category.id];
  const index = PART_CATEGORIES.findIndex((c) => c.id === category.id);
  const previous = PART_CATEGORIES[index - 1];
  const next = PART_CATEGORIES[index + 1];

  const scrollToBrand = (name: string) => {
    document
      .getElementById(`brand-${name.toLowerCase().replace(/\s+/g, '-')}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-12 sm:py-16 bg-[#eff1f5]" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Overview: image, parts summary, brand shortcuts, order button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10 items-center bg-white rounded-[20px] border border-[#C3C4CC]/60 shadow-sm p-4 sm:p-6 mb-10"
        >
          <img
            src={category.imageUrl}
            alt={`${category.titleAr} - قطع غيار ألمانية أصلية`}
            onError={(e) => {
              if (e.currentTarget.src !== window.location.origin + category.fallbackImageUrl) {
                e.currentTarget.src = category.fallbackImageUrl;
              }
            }}
            className="w-full aspect-[16/9] object-contain rounded-[14px]"
          />

          <div>
            <span className="text-xs font-bold text-[#ba1823] tracking-widest block mb-2">
              العلامات التي نوفرها في هذا القسم
            </span>
            <p className="text-sm sm:text-base text-[#535864] leading-7 mb-4">
              {category.examplesAr}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {brands.map((brand) => (
                <button
                  key={brand.name}
                  onClick={() => scrollToBrand(brand.name)}
                  dir="ltr"
                  className="px-3.5 py-1.5 rounded-full bg-[#eff1f5] border border-[#C3C4CC] text-sm font-bold text-[#181b22] hover:border-[#ba1823] hover:text-[#ba1823] transition-colors"
                >
                  {brand.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => onOrderCategory(category.id)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#ba1823] hover:bg-[#9e141d] text-white text-sm font-bold shadow-md transition-colors"
            >
              <PackageCheck className="w-4 h-4" />
              اطلب قطعة من هذا القسم
            </button>
          </div>
        </motion.div>

        {/* Brand profiles (two balanced columns on large screens) */}
        <div className="lg:columns-2 gap-6 [&>*]:break-inside-avoid [&>*]:mb-6">
          {brands.map((brand) => (
            <BrandProfileCard key={brand.name} brand={brand} />
          ))}
        </div>

        {/* Shipping note */}
        <div className="mt-4 flex gap-3 rounded-[16px] bg-[#faf7f2] border border-[#ded5cb] p-5">
          <Truck className="w-5 h-5 text-[#b88655] shrink-0 mt-1" />
          <p className="text-sm text-[#535864] leading-7">
            <strong className="text-[#181b22]">عن الشحن من ألمانيا: </strong>
            جميع القطع التي نوفرها جديدة وأصلية، نشتريها من ألمانيا ونشحنها إليك مباشرة. لا نشحن السوائل مثل زيت القير وزيت الفرامل، ولا القطع التي تحتوي على بطاريات ليثيوم مثل حساسات ضغط الإطارات، وتتوفر هذه لدى الوكلاء ومراكز الصيانة في المملكة.
          </p>
        </div>

        {/* Previous / next category */}
        <nav className="mt-8 grid grid-cols-2 gap-4">
          <div>
            {previous && (
              <button
                onClick={() => onOpenCategory(previous.id)}
                className="w-full h-full text-right bg-white rounded-[14px] border border-[#C3C4CC]/60 p-4 hover:border-[#ba1823]/50 transition-colors group"
              >
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#535864] mb-1">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  القسم السابق
                </span>
                <span className="block text-sm font-extrabold text-[#181b22]">{previous.titleAr}</span>
              </button>
            )}
          </div>
          <div>
            {next && (
              <button
                onClick={() => onOpenCategory(next.id)}
                className="w-full h-full text-left bg-white rounded-[14px] border border-[#C3C4CC]/60 p-4 hover:border-[#ba1823]/50 transition-colors group"
              >
                <span className="flex items-center justify-end gap-1 text-[11px] font-bold text-[#535864] mb-1">
                  القسم التالي
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </span>
                <span className="block text-sm font-extrabold text-[#181b22]">{next.titleAr}</span>
              </button>
            )}
          </div>
        </nav>

      </div>
    </section>
  );
}
