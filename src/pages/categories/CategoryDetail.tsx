/**
 * One category opened from the categories grid (/#categories/<id>):
 * the logos of the brands we sell in it. Clicking a logo shows that brand's
 * full profile. Also: a button to request a quote for this category,
 * a shipping note and links to the other categories.
 */

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Check, MousePointerClick, PackageCheck, Truck } from 'lucide-react';
import { PartCategory, PartCategoryId } from '../../types';
import { PART_CATEGORIES } from '../../data/categories';
import { BRAND_PROFILES } from '../../data/brandProfiles';
import BrandProfileCard from './BrandProfileCard';
import PartBrandLogo from './PartBrandLogo';
import CountryFlag, { COUNTRY_LABEL } from './CountryFlag';

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

  const [selectedName, setSelectedName] = useState<string>();
  const selected = brands.find((b) => b.name === selectedName);
  const pickerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const selectBrand = (name: string) => {
    if (name === selectedName) {
      setSelectedName(undefined);
      return;
    }
    setSelectedName(name);
    // Large screens: keep the logos at the top with the profile right under them.
    // Phones: jump to the profile, since the logos take up most of the screen.
    const target = window.innerWidth >= 1024 ? pickerRef.current : profileRef.current;
    setTimeout(() => target?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#eff1f5]" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Overview: image, parts summary, order button */}
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
              القطع التي نوفرها في هذا القسم
            </span>
            <p className="text-sm sm:text-base text-[#535864] leading-7 mb-5">
              {category.examplesAr}
            </p>


            <button
              onClick={() => onOrderCategory(category.id)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#ba1823] hover:bg-[#9e141d] text-white text-sm font-bold shadow-md transition-colors"
            >
              <PackageCheck className="w-4 h-4" />
              اطلب قطعة من هذا القسم
            </button>
          </div>
        </motion.div>

        {/* Brand logos: click one to show its profile */}
        <div ref={pickerRef} className="scroll-mt-24 mb-6">
          <div className="flex flex-wrap items-end justify-between gap-2 mb-4">
            <div>
              <span className="text-xs font-bold text-[#ba1823] tracking-widest block mb-1">
                العلامات التي نوفرها
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#181b22]">اختر العلامة لعرض تفاصيلها</h2>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#535864]">
              <MousePointerClick className="w-4 h-4 text-[#ba1823]" />
              اضغط على الشعار
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {brands.map((brand) => {
              const isSelected = brand.name === selectedName;
              return (
                <button
                  key={brand.name}
                  onClick={() => selectBrand(brand.name)}
                  aria-pressed={isSelected}
                  aria-label={`عرض تفاصيل ${brand.name}`}
                  className={`group relative flex flex-col w-[calc(50%-0.375rem)] sm:w-44 lg:w-52 rounded-[16px] overflow-hidden border-2 transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 ${
                    isSelected ? 'border-[#ba1823] ring-4 ring-[#ba1823]/15' : 'border-[#C3C4CC]/60 hover:border-[#ba1823]/50'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#ba1823] text-white flex items-center justify-center z-10">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  )}
                  <span className="h-24 sm:h-28 bg-[#fdfdfd] flex items-center justify-center px-4">
                    <PartBrandLogo name={brand.name} />
                  </span>
                  <span className="flex items-center justify-center gap-1.5 py-2 bg-white border-t border-[#C3C4CC]/60 text-[11px] font-bold text-[#535864]">
                    <CountryFlag country={brand.country} />
                    {COUNTRY_LABEL[brand.country]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The selected brand's profile */}
        <div ref={profileRef} className="scroll-mt-24 mb-4">
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <BrandProfileCard brand={selected} onClose={() => setSelectedName(undefined)} />
              </motion.div>
            )}
          </AnimatePresence>
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
