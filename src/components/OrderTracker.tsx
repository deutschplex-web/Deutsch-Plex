/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type FormEvent } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  Package, 
  FileText, 
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  Info,
  Building2
} from 'lucide-react';
import { QuoteRequest } from '../types';

interface OrderTrackerProps {
  latestOrder?: QuoteRequest | null;
}

export default function OrderTracker({ latestOrder }: OrderTrackerProps) {
  const [trackQuery, setTrackQuery] = useState(latestOrder?.id || 'DP-2026-9842');
  const [copied, setCopied] = useState(false);

  const [activeTracking, setActiveTracking] = useState<any>(() => ({
    id: latestOrder?.id || 'DP-2026-9842',
    car: latestOrder ? `${latestOrder.brand} ${latestOrder.model}` : 'مرسيدس S-Class 2022',
    vin: latestOrder?.vin || 'WDD2230621A049821',
    part: latestOrder?.partDetails || 'طقم فحمات كربون سيراميك مع حساسات',
    destination: latestOrder?.city || 'جدة',
    orderStatus: 'تم التسليم لشركة الشحن',
    carrier: {
      name: 'DHL Express International',
      carrierCode: 'DHL',
      trackingNumber: 'WAYBILL-9482710482',
      trackingUrl: 'https://www.dhl.com/global-en/home/tracking.html?tracking-id=9482710482',
      dispatchedDate: 'اليوم - 11:30 ص',
      originHub: 'مطار فرانكفورت (FRA) - ألمانيا'
    },
    steps: [
      {
        title: 'استلام الطلب وتدقيق رقم الهيكل (VIN)',
        desc: 'تمت مطابقة رقم الهيكل بنجاح مع الكتالوج الرسمي وضمان التوافق التام بنسبة 100%.',
        date: 'أمس - 09:30 ص',
        location: 'دويتش بلكس (فرانكفورت)',
        completed: true,
      },
      {
        title: 'تأمين القطعة من المورد الألماني المعتمد',
        desc: 'تم شراء وتوريد القطعة الأصلية OEM وإصدار الفاتورة الرسمية وشهادة المنشأ.',
        date: 'أمس - 03:15 م',
        location: 'ميونخ، ألمانيا',
        completed: true,
      },
      {
        title: 'الفحص الفني والتغليف الآمن',
        desc: 'اجتياز فحص الجودة الميكانيكي والرقمي والتغليف المخصص لحماية القطعة أثناء الشحن الجوي.',
        date: 'اليوم - 10:00 ص',
        location: 'مركز تجهيز الطلبات (فرانكفورت)',
        completed: true,
      },
      {
        title: 'تسليم الطلب لشركة الشحن وإصدار بوليصة التتبع',
        desc: 'تم تسليم الطرد لشركة DHL Express وتزويد العميل برقم بوليصة الشحن لمتابعة مسار الشحنة مباشرة عبر موقع الناقل.',
        date: 'اليوم - 11:30 ص',
        location: 'مركز فرز DHL بمطار فرانكفورت',
        completed: true,
        current: true,
      }
    ]
  }));

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!trackQuery.trim()) return;

    if (latestOrder && trackQuery.trim().toUpperCase() === latestOrder.id.toUpperCase()) {
      setActiveTracking({
        id: latestOrder.id,
        car: `${latestOrder.brand} ${latestOrder.model}`,
        vin: latestOrder.vin,
        part: latestOrder.partDetails,
        destination: latestOrder.city,
        orderStatus: 'قيد التدقيق والتجهيز في ألمانيا',
        carrier: null, // Not yet handed to carrier
        steps: [
          {
            title: 'تم استلام طلبك بنجاح',
            desc: 'طلبك قيد المراجعة الفورية من قبل الفريق الفني لدويتش بلكس في ألمانيا.',
            date: 'الآن',
            location: 'دويتش بلكس (ألمانيا)',
            completed: true,
            current: true,
          },
          {
            title: 'تدقيق رقم الهيكل (VIN) في الكتالوج المصنعي',
            desc: 'استخراج كود القطعة المطابق بالميلّيمتر وتأكيد التوافر وأفضل سعر أصلي.',
            date: 'قيد التنفيذ',
            location: 'فرانكفورت، ألمانيا',
            completed: false,
          },
          {
            title: 'تأمين القطعة والفحص المخبري',
            desc: 'تجهيز القطعة من المستودع المعتمد وفحص الباركود ورقم القطعة المصنعي.',
            date: 'قريباً',
            location: 'ألمانيا',
            completed: false,
          },
          {
            title: 'التسليم لشركة الشحن وتزويدك برقم التتبع',
            desc: 'تسليم الطرد لشركة الشحن وتزويدك برقم بوليصة الشحن ورابط المتابعة على موقع شركة الشحن.',
            date: 'خلال 24-48 ساعة',
            location: 'مطار فرانكفورت الدولي',
            completed: false,
          }
        ]
      });
    } else {
      // Sample tracking
      setActiveTracking({
        id: trackQuery.trim().toUpperCase(),
        car: 'بي إم دبليو الفئة السابعة (7-Series)',
        vin: 'WBA13AY06NFS82914',
        part: 'مساعد هيدروليك هوائي أصلي (Air Strut)',
        destination: 'الرياض',
        orderStatus: 'تم التسليم لشركة الشحن',
        carrier: {
          name: 'DHL Express International',
          carrierCode: 'DHL',
          trackingNumber: 'WAYBILL-8291048201',
          trackingUrl: 'https://www.dhl.com/global-en/home/tracking.html?tracking-id=8291048201',
          dispatchedDate: 'اليوم - 01:15 م',
          originHub: 'مطار فرانكفورت (FRA) - ألمانيا'
        },
        steps: [
          {
            title: 'استلام الطلب وتدقيق رقم الهيكل',
            desc: 'تمت مطابقة الهيكل عبر كتالوج BMW ETK الرسمي.',
            date: '14 سبتمبر',
            location: 'ميونخ',
            completed: true,
          },
          {
            title: 'تأمين وفحص القطعة في ألمانيا',
            desc: 'تجهيز القطعة الأصلية من المورد المعتمد وضمان توافقها 100%.',
            date: '15 سبتمبر',
            location: 'فرانكفورت',
            completed: true,
          },
          {
            title: 'التسليم لشركة الشحن وتزويدك برقم التتبع',
            desc: 'تم تسليم الطرد لشركة DHL Express وتوليد رقم بوليصة التتبع لمتابعة الشحنة عبر موقع الشركة.',
            date: '16 سبتمبر',
            location: 'فرانكفورت',
            completed: true,
            current: true,
          }
        ]
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="tracker" className="py-20 bg-[#0c0e12] border-t border-[#292e3a] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-bold text-[#a71d2a] tracking-widest uppercase mb-2 block">
            متابعة حالة الطلب الداخلي
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f4efea] mb-3">
            تتبع معالجة وتجهيز طلبك
          </h2>
          <p className="text-sm sm:text-base text-[#c6beb4] leading-relaxed">
            أدخل رقم طلبك (مثل <span className="font-mono text-white font-bold">DP-2026-9842</span>) لمتابعة مراحل مراجعة الهيكل وتجهيز وتأمين القطعة في ألمانيا حتى تسليمها لشركة الشحن وتزويدك برقم التتبع.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={trackQuery}
                onChange={(e) => setTrackQuery(e.target.value)}
                placeholder="أدخل رقم الطلب (مثال: DP-2026-9842)..."
                dir="ltr"
                className="w-full py-3.5 px-4 bg-[#14171e] border border-[#292e3a] focus:border-[#a71d2a] rounded-xl text-sm font-mono uppercase text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#a71d2a] hover:bg-[#bd2432] text-white rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#a71d2a]/30 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>بحث عن الطلب</span>
            </button>
          </form>
        </div>

        {/* Important Clarification Banner */}
        <div className="max-w-3xl mx-auto mb-8 p-4 rounded-2xl bg-[#14171e] border border-[#292e3a] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#b88655] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#c6beb4] leading-relaxed">
            <strong className="text-white block mb-1">كيف يعمل نظام تتبع الطلب والشحن لدينا؟</strong>
            نحن في <span className="text-white font-semibold">دويتش بلكس</span> نتولى تدقيق رقم الهيكل، تأمين القطع الأصلية من الموردين المعتمدين في ألمانيا، وفحصها وتجهيزها. <span className="text-amber-300 font-semibold">نحن لا نقوم بالشحن المباشر بأنفسنا</span>، بل نشحن طلبك عبر شركات الشحن العالمية المتخصصة (مثل DHL Express و FedEx)، وبمجرد تسليم الشحنة للناقل نقوم بتزويدك برقم بوليصة التتبع لتتبع خط سير الطرد مباشرة عبر الموقع الرسمي لشركة الشحن.
          </div>
        </div>

        {/* Tracking Details Card */}
        {activeTracking && (
          <div className="max-w-3xl mx-auto bg-[#14171e]/90 border border-[#292e3a] rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#292e3a]">
              <div>
                <span className="text-[11px] text-neutral-400 block">رقم الطلب الداخلي:</span>
                <span className="text-lg font-bold font-mono text-[#a71d2a]">{activeTracking.id}</span>
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
                <span className="text-[11px] text-neutral-400 block">مدينة الاستلام:</span>
                <span className="text-sm font-semibold text-emerald-400">{activeTracking.destination}</span>
              </div>
            </div>

            {/* Carrier Shipment Tracking Card (When Dispatched) */}
            {activeTracking.carrier ? (
              <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-[#1a1f29] to-[#14171e] border border-[#b88655]/40 shadow-lg">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#b88655]" />
                    <span className="text-xs font-bold text-neutral-300">شركة الشحن الدولية الناقلة:</span>
                    <span className="text-xs sm:text-sm font-bold text-white bg-[#252b38] px-2.5 py-1 rounded-md border border-[#374052]">
                      {activeTracking.carrier.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تم التسليم لشركة الشحن</span>
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  تم تسليم طردك رسمياً لشركة الشحن الدولية. يمكنك استخدام رقم بوليصة الشحن أدناه لتتبع تحركات الشحنة ومسار الرحلة الجوية وتحديثات الوصول عبر موقع شركة الشحن الرسمي:
                </p>

                {/* Waybill / Tracking Box */}
                <div className="p-3.5 rounded-lg bg-[#0c0e12] border border-[#292e3a] flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-mono">رقم تتبع الشحنة (Waybill No.)</span>
                    <span className="text-sm sm:text-base font-mono font-bold text-amber-400 tracking-wider" dir="ltr">
                      {activeTracking.carrier.trackingNumber}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard(activeTracking.carrier.trackingNumber)}
                      className="px-3 py-2 rounded-lg bg-[#1e232d] hover:bg-[#282f3d] text-xs font-semibold text-neutral-200 border border-[#383f4f] transition-all flex items-center gap-1.5 cursor-pointer"
                      title="نسخ رقم بوليصة الشحن"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">تم النسخ!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-neutral-400" />
                          <span>نسخ الرقم</span>
                        </>
                      )}
                    </button>

                    <a
                      href={activeTracking.carrier.trackingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#a71d2a] hover:bg-[#bd2432] text-xs font-bold text-white transition-all flex items-center gap-1.5 shadow-md shadow-[#a71d2a]/20"
                    >
                      <span>تتبع الشحنة على موقع شركة الشحن</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                  <span>مركز الانطلاق: {activeTracking.carrier.originHub}</span>
                  <span>تاريخ التسليم للناقل: {activeTracking.carrier.dispatchedDate}</span>
                </div>
              </div>
            ) : (
              <div className="mt-6 p-4 rounded-xl bg-[#181b22] border border-[#292e3a] flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs text-neutral-300">
                  <strong className="text-white block mb-0.5">بوليصة الشحن قيد التجهيز:</strong>
                  سيتم تزويدك برقم تتبع الشحنة المباشر ورابط تتبعها على موقع شركة الشحن فور اكتمال الفحص وتسليم الطرد للناقل الدولي.
                </div>
              </div>
            )}

            {/* Internal Steps Timeline */}
            <div className="pt-8">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#a71d2a]" />
                <span>مراحل معالجة وتجهيز طلبك لدى DeutschPlex</span>
              </h3>

              <div className="space-y-6">
                {activeTracking.steps.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 relative">
                    
                    {/* Timeline icon */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        step.current 
                          ? 'bg-[#a71d2a] text-white ring-4 ring-[#a71d2a]/30 shadow-lg shadow-[#a71d2a]/50' 
                          : (step.completed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-[#181b22] text-neutral-500 border border-[#292e3a]')
                      }`}>
                        {step.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>

                      {idx < activeTracking.steps.length - 1 && (
                        <div className={`w-0.5 h-12 my-1 ${
                          step.completed ? 'bg-emerald-500/30' : 'bg-[#292e3a]'
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
            </div>

            {/* Footer warranty note */}
            <div className="mt-4 pt-4 border-t border-[#292e3a] flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#b88655]" />
                <span>جميع القطع أصلية ومطابقة 100% برقم الهيكل ومضمونة</span>
              </span>
              <span className="font-mono text-neutral-500 text-[11px]">
                نظام إدارة ومتابعة الطلبات - دويتش بلكس
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

