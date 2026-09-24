/**
 * FAQ page. The questions and answers live in src/data/faqs.ts.
 */

import { PageId } from '../../types';
import PageHeader from '../../components/layout/PageHeader';
import FaqList from './FaqList';

export default function FaqPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <>
      <PageHeader
        titleAr="مركز الأسئلة الشائعة والدعم الفني"
        subtitleAr="إجابات شاملة ومفصلة حول آلية الشحن، الجمارك، طرق الدفع المعتمدة، وسياسات الضمان والاستبدال."
        badgeAr="دعم فني واستشارات متخصصة"
        onNavigate={onNavigate}
      />
      <FaqList />
    </>
  );
}
