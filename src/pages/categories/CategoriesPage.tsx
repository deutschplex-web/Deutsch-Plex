/**
 * Categories page (/#categories): the six part-category cards.
 * Clicking a card opens that category (/#categories/<id>) with the brands
 * we sell in it.
 *
 * Card data lives in src/data/categories.ts; brands in src/data/brandProfiles.ts.
 */

import { PageId, PartCategoryId } from '../../types';
import { PART_CATEGORIES } from '../../data/categories';
import PageHeader from '../../components/layout/PageHeader';
import CategoryGrid from './CategoryGrid';
import CategoryDetail from './CategoryDetail';

interface CategoriesPageProps {
  onNavigate: (page: PageId, subPath?: string) => void;
  /** Category id from the URL, e.g. "brakes" in /#categories/brakes. */
  categoryPath?: string;
  onOrderCategory: (categoryId: PartCategoryId) => void;
}

export default function CategoriesPage({ onNavigate, categoryPath, onOrderCategory }: CategoriesPageProps) {
  const openCategory = (categoryId: PartCategoryId) => onNavigate('categories', categoryId);
  const category = PART_CATEGORIES.find((c) => c.id === categoryPath);

  if (category) {
    return (
      <div key={category.id}>
        <PageHeader
          titleAr={category.titleAr}
          subtitleAr="تعرّف على كل علامة قبل أن تطلب: من هي الشركة، ولماذا نختارها، وما القطع التي نوفرها منها، والسيارات المتوافقة معها."
          badgeAr={category.titleEn}
          onNavigate={onNavigate}
          parent={{ labelAr: 'قطع الغيار', onClick: () => onNavigate('categories') }}
        />
        <CategoryDetail
          category={category}
          onOpenCategory={openCategory}
          onOrderCategory={onOrderCategory}
        />
      </div>
    );
  }

  return (
    <>
      <PageHeader
        titleAr="كتالوج قطع الغيار الألمانية المعتمدة"
        subtitleAr="اختر القسم لتتعرّف على العلامات الألمانية التي نوفرها فيه والقطع المتوفرة من كل علامة، ثم اطلب تسعيرتك مباشرة."
        badgeAr="أكثر من 15,000 قطعة OEM"
        onNavigate={onNavigate}
      />
      <CategoryGrid onOpenCategory={openCategory} />
    </>
  );
}
