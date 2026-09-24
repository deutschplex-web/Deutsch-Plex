/**
 * Categories page: the six part-category cards.
 * Card data (titles, images) lives in src/data/categories.ts.
 */

import { PageId, PartCategoryId } from '../../types';
import PageHeader from '../../components/layout/PageHeader';
import CategoryGrid from './CategoryGrid';

interface CategoriesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory: (categoryId: PartCategoryId) => void;
}

export default function CategoriesPage({ onNavigate, onSelectCategory }: CategoriesPageProps) {
  return (
    <>
      <PageHeader
        titleAr="كتالوج قطع الغيار الألمانية المعتمدة"
        subtitleAr="تصفح كافة أنظمة السيارات الألمانية الرئيسية مع إمكانية اختيار أي قسم وطلب تسعيرته فوراً مع الشحن الجوي المباشر."
        badgeAr="أكثر من 15,000 قطعة OEM"
        onNavigate={onNavigate}
      />
      <CategoryGrid onSelectCategory={onSelectCategory} />
    </>
  );
}
