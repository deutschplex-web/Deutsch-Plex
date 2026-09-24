/**
 * Process page: the four steps from request to delivery.
 */

import { PageId } from '../../types';
import PageHeader from '../../components/layout/PageHeader';
import ProcessSteps from './ProcessSteps';

export default function ProcessPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <>
      <PageHeader
        titleAr="رحلة الطلب وخطوات التنفيذ"
        subtitleAr="أربع خطوات واضحة وموثقة تضمن لك استلام القطعة المطابقة لمواصفات سيارتك بأعلى سرعة وأقل تكلفة."
        badgeAr="4 خطوات بسيطة ومباشرة"
        onNavigate={onNavigate}
      />
      <ProcessSteps />
    </>
  );
}
