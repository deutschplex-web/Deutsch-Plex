/**
 * Home page section: cards that link to each page of the site.
 */

import { motion } from 'motion/react';
import { 
  Layers, 
  Send, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { PageId } from '../../types';

interface SectionsHubProps {
  onNavigate: (page: PageId) => void;
}

export default function SectionsHub({ onNavigate }: SectionsHubProps) {
  const sections = [
    {
      id: 'order' as PageId,
      titleAr: 'اطلب عرض سعر',
      titleEn: 'Request a Quote',
      descAr: 'إرسال بيانات سيارتك والقطع المطلوبة لاستخراج أفضل عرض سعر أوروبي مع الشحن الجوي السريع.',
      icon: Send,
      tagAr: 'تسعير مباشر',
      accentColor: '#1d63b8',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'categories' as PageId,
      titleAr: 'كتالوج قطع الغيار',
      titleEn: 'Parts Catalog & Systems',
      descAr: 'تصفح أكثر من 15,000 قطعة أصلية معتمدة للفرامل، المساعدات، المحركات، ونواقل الحركة.',
      icon: Layers,
      tagAr: '6 أنظمة رئيسية',
      accentColor: '#ba1823',
      badgeBg: 'bg-red-50 text-[#ba1823] border-red-200'
    },
    {
      id: 'about' as PageId,
      titleAr: 'عن دويتش بلكس',
      titleEn: 'About DeutschPlex',
      descAr: 'تعرف على شبكتنا اللوجستية المباشرة في ألمانيا، مع ضمان لمدة 24 شهر وتوفير حتى 45% بدون وسطاء.',
      icon: ShieldCheck,
      tagAr: 'الجودة والضمان المعتمد',
      accentColor: '#b88655',
      badgeBg: 'bg-amber-50 text-[#b88655] border-amber-200'
    },
    {
      id: 'process' as PageId,
      titleAr: 'طريقة الطلب والخطوات',
      titleEn: 'Order Workflow & Steps',
      descAr: 'رحلة العميل المبسطة في 4 خطوات واضحة من إدخال رقم الهيكل حتى الاستلام عند بابك.',
      icon: Clock,
      tagAr: '4 خطوات بسيطة',
      accentColor: '#1d63b8',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'faq' as PageId,
      titleAr: 'الأسئلة الشائعة والدعم',
      titleEn: 'FAQ & Direct Support',
      descAr: 'إجابات شاملة عن الشحن، الجمارك، طرق السداد، سياسة الاسترجاع، وخدمة العملاء الفورية.',
      icon: HelpCircle,
      tagAr: 'إجابات فورية',
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#e2e5eb]/80 border-t border-[#C3C4CC] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#535864]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C3C4CC] text-xs font-bold text-[#535864] mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#535864]" />
            <span>بوابة الأقسام والخدمات المتخصصة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] tracking-tight mb-3">
            تصفح أقسام منصة DeutschPlex المستقلة
          </h2>
          <p className="text-xs sm:text-sm text-[#535864] leading-relaxed">
            تم تخصيص صفحة منفصلة متكاملة لكل قسم لتوفير تجربة مستخدم سريعة ودقيقة في فحص وتأمين قطع الغيار.
          </p>
        </div>

        {/* 5-Grid Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => onNavigate(sec.id)}
                className="group relative p-5 rounded-2xl bg-white hover:bg-[#f7f8fb] border border-[#C3C4CC] hover:border-[#535864] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#eff1f5] border border-[#C3C4CC] flex items-center justify-center text-[#535864] group-hover:text-white group-hover:bg-[#535864] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sec.badgeBg}`}>
                      {sec.tagAr}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#181b22] group-hover:text-[#ba1823] mb-1 transition-colors">
                    {sec.titleAr}
                  </h3>
                  
                  <p className="text-[11px] font-mono text-[#535864] mb-2 font-semibold">
                    {sec.titleEn}
                  </p>

                  <p className="text-xs text-[#535864] leading-relaxed mb-4">
                    {sec.descAr}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C3C4CC] flex items-center justify-between text-xs font-bold text-[#181b22] group-hover:text-[#ba1823] transition-colors">
                  <span>فتح الصفحة المستقلة</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
