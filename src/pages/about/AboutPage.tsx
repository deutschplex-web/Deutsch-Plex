/**
 * About page: who DeutschPlex is and why customers choose us.
 */

import { PageId } from '../../types';
import PageHeader from '../../components/layout/PageHeader';
import AboutContent from './AboutContent';

export default function AboutPage({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <>
      <PageHeader
        titleAr="عن دويتش بلكس"
        subtitleAr="تعرف على دويتش بلكس: استيراد مباشر من ألمانيا، مطابقة رقم الهيكل VIN بدقة 100%، وضمان معتمد لمدة 24 شهر مع توفير حتى 45%."
        badgeAr="الجودة الألمانية والضمان المعتمد"
        onNavigate={onNavigate}
      />
      <AboutContent />
    </>
  );
}
