/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Layers, 
  Send, 
  Truck, 
  ShieldCheck, 
  Award, 
  Clock, 
  HelpCircle,
  ArrowLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PageId } from '../types';

interface HomeNavigationHubProps {
  onNavigate: (page: PageId) => void;
}

export default function HomeNavigationHub({ onNavigate }: HomeNavigationHubProps) {
  const sections = [
    {
      id: 'order' as PageId,
      titleAr: 'طلب تسعيرة فورية',
      titleEn: 'Instant Quote Request',
      descAr: 'إرسال بيانات سيارتك والقطع المطلوبة لاستخراج أفضل عرض سعر أوروبي مع الشحن الجوي السريع.',
      icon: Send,
      tagAr: 'تسعير فوري',
      accentColor: '#1d63b8',
      badgeBg: 'bg-[#1d63b8]/15 text-[#1d63b8] border-[#1d63b8]/30'
    },
    {
      id: 'categories' as PageId,
      titleAr: 'كتالوج قطع الغيار',
      titleEn: 'Parts Catalog & Systems',
      descAr: 'تصفح أكثر من 15,000 قطعة أصلية معتمدة للفرامل، المساعدات، المحركات، ونواقل الحركة.',
      icon: Layers,
      tagAr: '8 أنظمة رئيسية',
      accentColor: '#a71d2a',
      badgeBg: 'bg-[#a71d2a]/15 text-[#f4efea] border-[#a71d2a]/30'
    },
    {
      id: 'tracker' as PageId,
      titleAr: 'تتبع الشحنة والطلب',
      titleEn: 'Live Shipment Tracker',
      descAr: 'تتبع مسار شحنتك الجوية لحظة بلحظة من مستودعات فرانكفورت وميونخ حتى باب منزلك بالسعودية.',
      icon: Truck,
      tagAr: 'شحن جوي DHL',
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    },
    {
      id: 'about' as PageId,
      titleAr: 'من نحن ومعايير الجودة',
      titleEn: 'About DeutschPlex & Standards',
      descAr: 'تعرف على شبكتنا اللوجستية المباشرة في شتوتغارت وفرانكفورت ومعايير الاعتماد الرسمية VDA.',
      icon: ShieldCheck,
      tagAr: 'اعتماد ألماني',
      accentColor: '#b88655',
      badgeBg: 'bg-[#b88655]/15 text-[#b88655] border-[#b88655]/30'
    },
    {
      id: 'features' as PageId,
      titleAr: 'المميزات وضمان 24 شهر',
      titleEn: 'Features & German Warranty',
      descAr: 'خصم يصل إلى 45% مقارنة بالوكالات، ضمان لمدة 24 شهر من ألمانيا، وشحن جوي مباشر خلال 3-7 أيام.',
      icon: Award,
      tagAr: 'ضمان 24 شهر من ألمانيا',
      accentColor: '#a71d2a',
      badgeBg: 'bg-[#a71d2a]/15 text-[#f4efea] border-[#a71d2a]/30'
    },
    {
      id: 'process' as PageId,
      titleAr: 'طريقة الطلب والخطوات',
      titleEn: 'Order Workflow & Steps',
      descAr: 'رحلة العميل المبسطة في 4 خطوات واضحة من إدخال رقم الهيكل حتى الاستلام عند بابك.',
      icon: Clock,
      tagAr: '4 خطوات بسيطة',
      accentColor: '#1d63b8',
      badgeBg: 'bg-[#1d63b8]/15 text-[#1d63b8] border-[#1d63b8]/30'
    },
    {
      id: 'faq' as PageId,
      titleAr: 'الأسئلة الشائعة والدعم',
      titleEn: 'FAQ & Direct Support',
      descAr: 'إجابات شاملة عن الشحن، الجمارك، طرق السداد، سياسة الاسترجاع، وخدمة العملاء الفورية.',
      icon: HelpCircle,
      tagAr: 'إجابات فورية',
      accentColor: '#10b981',
      badgeBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#0e1014] border-t border-[#292e3a] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#a71d2a]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#292e3a] text-xs font-bold text-[#b88655] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بوابة الأقسام والخدمات المتخصصة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f4efea] tracking-tight mb-3">
            تصفح أقسام منصة DeutschPlex المستقلة
          </h2>
          <p className="text-xs sm:text-sm text-[#c6beb4] leading-relaxed">
            تم تخصيص صفحة منفصلة متكاملة لكل قسم لتوفير تجربة مستخدم سريعة ودقيقة في فحص وتأمين قطع الغيار.
          </p>
        </div>

        {/* 8-Grid Portals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
                className="group relative p-5 rounded-2xl bg-[#181b22] hover:bg-[#1f242e] border border-[#292e3a] hover:border-[#b88655]/60 transition-all cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#111317] border border-[#292e3a] flex items-center justify-center text-[#f4efea] group-hover:text-[#b88655] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sec.badgeBg}`}>
                      {sec.tagAr}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#f4efea] mb-1 transition-colors">
                    {sec.titleAr}
                  </h3>
                  
                  <p className="text-[11px] font-mono text-[#b88655] mb-2 opacity-80">
                    {sec.titleEn}
                  </p>

                  <p className="text-xs text-[#c6beb4] leading-relaxed mb-4">
                    {sec.descAr}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#292e3a]/80 flex items-center justify-between text-xs font-bold text-[#f4efea] group-hover:text-[#b88655] transition-colors">
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
