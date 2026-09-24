/**
 * Order page: the quote request form.
 */

import { CarBrandId, PageId, PartCategoryId } from '../../types';
import PageHeader from '../../components/layout/PageHeader';
import OrderForm from './OrderForm';

interface OrderPageProps {
  onNavigate: (page: PageId) => void;
  initialBrand?: CarBrandId;
  initialCategory?: PartCategoryId;
}

export default function OrderPage({ onNavigate, initialBrand, initialCategory }: OrderPageProps) {
  return (
    <>
      <PageHeader
        titleAr="اطلب عرض سعر معتمد"
        subtitleAr="املأ تفاصيل سيارتك أو رقم الهيكل لاستخراج أفضل تسعيرة مباشرة من مستودعات ألمانيا مع خيارات الشحن الجوي السريع."
        badgeAr="تسعير مباشر بدون وسطاء"
        onNavigate={onNavigate}
      />
      <OrderForm initialBrand={initialBrand} initialCategory={initialCategory} />
    </>
  );
}
