/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  Truck, 
  MapPin, 
  FileText, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { QuoteRequest } from '../types';

interface OrderTrackerProps {
  latestOrder?: QuoteRequest | null;
}

export default function OrderTracker({ latestOrder }: OrderTrackerProps) {
  const [trackQuery, setTrackQuery] = useState(latestOrder?.id || 'DP-2026-9842');
  const [activeTracking, setActiveTracking] = useState<any>(() => ({
    id: latestOrder?.id || 'DP-2026-9842',
    car: latestOrder ? `${latestOrder.brand} ${latestOrder.model}` : 'مرسيدس S-Class 2022',
    vin: latestOrder?.vin || 'WDD2230621A049821',
    part: latestOrder?.partDetails || 'طقم فحمات كربون سيراميك مع حساسات',
    destination: latestOrder?.city || 'جدة',
    steps: [
      {
        title: 'استلام الطلب وتدقيق رقم الهيكل',
        desc: 'تمت مطابقة رقم الهيكل (VIN) بنجاح مع قاعدة بيانات دايملر في شتوتغارت.',
        date: 'أمس - 09:30 ص',
        location: 'جدة / فرانكفورت',
        completed: true,
      },
      {
        title: 'تأمين القطعة من المورد الألماني المعتمد',
        desc: 'تم شراء القطعة الأصلية OEM وتجهيز الفاتورة وشهادة المنشأ.',
        date: 'أمس - 03:15 م',
        location: 'ميونخ، ألمانيا',
        completed: true,
      },
      {
        title: 'الفحص المخبري والتغليف للشحن الجوي',
        desc: 'اجتياز الفحص البصري والرقمي وإصدار بوليصة الشحن الجوي الدولي.',
        date: 'اليوم - 11:00 ص',
        location: 'مطار فرانكفورت الدولي (FRA)',
        completed: true,
        current: true,
      },
      {
        title: 'الوصول لمطار الملك عبدالعزيز والتخليص الجمركي',
        desc: 'معالجة البيان الجمركي وسداد الرسوم والضريبة المسبقة.',
        date: 'متوقع غداً',
        location: 'جدة (JED)',
        completed: false,
      },
      {
        title: 'التوصيل النهائي للعنوان أو الورشة',
        desc: 'تسليم الشحنة مع كرت الضمان المعتمد لمدة 24 شهر من ألمانيا.',
        date: 'خلال 48 ساعة',
        location: 'عنوان العميل',
        completed: false,
      }
    ]
  }));

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!trackQuery.trim()) return;

    if (latestOrder && trackQuery.trim() === latestOrder.id) {
      setActiveTracking({
        id: latestOrder.id,
        car: `${latestOrder.brand} ${latestOrder.model}`,
        vin: latestOrder.vin,
        part: latestOrder.partDetails,
        destination: latestOrder.city,
        steps: [
          {
            title: 'تم استلام طلبك بنجاح',
            desc: 'طلبك قيد المراجعة الفورية من قبل مهندسي DeutschPlex في فرانكفورت.',
            date: 'الآن',
            location: `${latestOrder.city || 'جدة'} / ألمانيا`,
            completed: true,
            current: true,
          },
          {
            title: 'مطابقة رقم الهيكل في الكتالوج الألماني',
            desc: 'استخراج كود القطعة المحدد بالميلّيمتر وضمان التوافق 100%.',
            date: 'قريباً',
            location: 'ألمانيا',
            completed: false,
          },
          {
            title: 'الشحن الجوي السريع',
            desc: 'إرسال الشحنة مع رقم التتبع المباشر من مطار فرانكفورت.',
            date: 'قريباً',
            location: 'ألمانيا',
            completed: false,
          }
        ]
      });
    } else {
      // Default sample tracker
      setActiveTracking({
        id: trackQuery.trim().toUpperCase(),
        car: 'بي إم دبليو الفئة السابعة (7-Series)',
        vin: 'WBA13AY06NFS82914',
        part: 'مساعد هيدروليك هوائي أصلي (Air Strut)',
        destination: 'جدة',
        steps: [
          {
            title: 'استلام الطلب وتدقيق رقم الهيكل',
            desc: 'تمت مطابقة الهيكل عبر كتالوج BMW ETK الرسمي.',
            date: '14 سبتمبر',
            location: 'ميونخ',
            completed: true,
          },
          {
            title: 'تأمين القطعة وشحنها عبر DHL Express',
            desc: 'تم تجهيز الشحنة ومغادرة مركز الفرز الأوروبي.',
            date: '15 سبتمبر',
            location: 'فرانكفورت',
            completed: true,
            current: true,
          },
          {
            title: 'الوصول إلى مطار الملك عبدالعزيز بجدة',
            desc: 'تجهيز التسليم لمندوب التوصيل.',
            date: '17 سبتمبر',
            location: 'جدة',
            completed: false,
          }
        ]
      });
    }
  };

  return (
    <section id="tracker" className="py-20 bg-[#0c0c10] border-t border-neutral-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            المتابعة الحية
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            تتبع حالة الطلب والشحن من ألمانيا
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            أدخل رقم المرجع الخاص بطلبك (مثل DP-2026-9842) للاطلاع على مسار الشحنة من مستودع المصنع في ألمانيا حتى وصولها.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                placeholder="أدخل رقم الطلب (مثال: DP-2026-9842)..."
                dir="ltr"
                className="w-full py-3.5 px-4 bg-neutral-900 border border-neutral-700 focus:border-red-600 rounded-xl text-sm font-mono uppercase text-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-red-700 hover:bg-red-600 text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg shadow-red-950"
            >
              <Search className="w-4 h-4" />
              <span>تتبع</span>
            </button>
          </form>
        </div>

        {/* Tracking Details Card */}
        {activeTracking && (
          <div className="max-w-3xl mx-auto bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-[11px] text-neutral-400 block">رقم التتبع المرجعي:</span>
                <span className="text-lg font-bold font-mono text-red-400">{activeTracking.id}</span>
              </div>

              <div>
                <span className="text-[11px] text-neutral-400 block">السيارة:</span>
                <span className="text-sm font-semibold text-white">{activeTracking.car}</span>
              </div>

              <div>
                <span className="text-[11px] text-neutral-400 block">الهيكل (VIN):</span>
                <span className="text-xs font-mono text-neutral-300" dir="ltr">{activeTracking.vin}</span>
              </div>

              <div>
                <span className="text-[11px] text-neutral-400 block">الوجهة:</span>
                <span className="text-sm font-semibold text-emerald-400">{activeTracking.destination}</span>
              </div>
            </div>

            {/* Steps Timeline */}
            <div className="pt-8 space-y-6">
              {activeTracking.steps.map((step: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  
                  {/* Timeline icon */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.current 
                        ? 'bg-red-600 text-white ring-4 ring-red-900/50 animate-pulse' 
                        : (step.completed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-neutral-800 text-neutral-500')
                    }`}>
                      {step.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>

                    {idx < activeTracking.steps.length - 1 && (
                      <div className={`w-0.5 h-12 my-1 ${
                        step.completed ? 'bg-emerald-500/30' : 'bg-neutral-800'
                      }`} />
                    )}
                  </div>

                  {/* Step info */}
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className={`text-sm font-bold ${step.completed || step.current ? 'text-white' : 'text-neutral-500'}`}>
                        {step.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                        <span>{step.location}</span>
                        <span>•</span>
                        <span>{step.date}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>مغطى بضمان لمدة 24 شهر من ألمانيا</span>
              </span>
              <span className="font-mono text-neutral-500">Live API Sync</span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
