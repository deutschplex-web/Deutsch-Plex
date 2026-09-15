/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Send, 
  MessageCircle, 
  Barcode, 
  ChevronDown,
  CheckCircle2,
  Copy,
  FileCheck,
  RotateCcw
} from 'lucide-react';
import { GERMAN_BRANDS } from '../data/brands';
import { decodeVin } from '../utils/vinDecoder';
import { QuoteRequest } from '../types';

interface VinCheckerProps {
  onUseVin?: (vin: string, brand?: string) => void;
  onOrderCreated?: (order: QuoteRequest) => void;
  initialBrand?: string;
  initialVin?: string;
}

export default function VinChecker({ 
  onUseVin, 
  onOrderCreated,
  initialBrand,
  initialVin 
}: VinCheckerProps) {
  const [brand, setBrand] = useState('mercedes');
  const [modelYear, setModelYear] = useState('');
  const [vin, setVin] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [partDetails, setPartDetails] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<QuoteRequest | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync external props
  useEffect(() => {
    if (initialVin) {
      setVin(initialVin.toUpperCase().trim());
    }
    if (initialBrand) {
      const match = GERMAN_BRANDS.find(
        (b) => b.id === initialBrand || b.nameEn.toLowerCase() === initialBrand.toLowerCase()
      );
      if (match) setBrand(match.id);
    }
  }, [initialVin, initialBrand]);

  // Real-time VIN analysis & auto-brand detection
  const vinAnalysis = decodeVin(vin);
  const selectedBrandObj = GERMAN_BRANDS.find((b) => b.id === brand) || GERMAN_BRANDS[0];

  const handleVinChange = (val: string) => {
    const clean = val.toUpperCase().replace(/\s+/g, '');
    setVin(clean);
    
    // Auto-detect brand if valid 17-digit VIN entered
    if (clean.length >= 3) {
      const decoded = decodeVin(clean);
      if (decoded.brand) {
        setBrand(decoded.brand);
      }
    }

    if (onUseVin && clean.length === 17) {
      onUseVin(clean, brand);
    }
  };

  // WhatsApp quick contact url
  const buildWhatsAppUrl = () => {
    const brandName = selectedBrandObj ? `${selectedBrandObj.nameAr} (${selectedBrandObj.nameEn})` : 'سيارة ألمانية';
    let text = `مرحباً، أود الاستفسار وطلب تسعيرة قطع غيار عبر DeutschPlex:\n`;
    text += `• الماركة: ${brandName}\n`;
    if (modelYear) text += `• الموديل / السنة: ${modelYear}\n`;
    if (vin) text += `• رقم الهيكل (VIN): ${vin}\n`;
    if (customerName) text += `• الاسم: ${customerName}\n`;
    if (phoneNumber) text += `• الجوال: ${phoneNumber}\n`;
    if (partDetails) text += `• القطع المطلوبة: ${partDetails}\n`;
    
    return `https://wa.me/966500000000?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `DP-2026-${randomSuffix}`;

    const newOrder: QuoteRequest = {
      id: orderId,
      createdAt: new Date().toLocaleDateString('ar-SA'),
      brand: selectedBrandObj.nameAr,
      model: modelYear || selectedBrandObj.popularModels[0],
      year: modelYear || '2022',
      vin: vin.toUpperCase().trim() || 'سيتم تقديمه لاحقاً',
      category: 'maintenance',
      partDetails: partDetails || 'طلب تسعيرة قطع غيار ألمانية',
      partNumber: 'يتم استخراجه بالكتالوج الألماني',
      customerName: customerName || 'عميل DeutschPlex',
      phoneNumber: phoneNumber || 'غير محدد',
      city: 'المملكة العربية السعودية',
      shippingSpeed: 'express',
      estimatedPriceRangeSar: 'جاري استخراج السعر باليورو',
      estimatedDays: '3 - 7 أيام عمل',
      status: 'received'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedOrder(newOrder);
      if (onOrderCreated) {
        onOrderCreated(newOrder);
      }
    }, 800);
  };

  const handleCopyRef = () => {
    if (!submittedOrder) return;
    navigator.clipboard.writeText(submittedOrder.id);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleResetForm = () => {
    setSubmittedOrder(null);
    setPartDetails('');
  };

  return (
    <section id="vin-tool" className="py-14 sm:py-20 bg-[#111317] relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-[#a71d2a]/10 via-[#b88655]/10 to-[#a71d2a]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#181b22] border border-[#292e3a] shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10">
          
          <AnimatePresence mode="wait">
            {submittedOrder ? (
              /* Success Confirmation View */
              <motion.div 
                key="confirmation"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8 sm:py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <FileCheck className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[#f4efea] mb-2">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-sm text-[#c6beb4] max-w-md mx-auto">
                    يقوم مهندسونا الآن بمطابقة رقم الهيكل واستخراج رقم القطعة من الكتالوجات الألمانية الرسمية.
                  </p>
                </div>

                {/* Reference Number */}
                <div className="inline-flex items-center gap-3 bg-[#111317] px-5 py-3 rounded-xl border border-[#292e3a]">
                  <span className="text-xs text-[#c6beb4]">رقم الطلب المرجعي:</span>
                  <span className="font-mono font-bold text-white text-base">{submittedOrder.id}</span>
                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="text-[#c6beb4] hover:text-white transition-colors text-xs flex items-center gap-1 border-r border-[#292e3a] pr-3"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedRef ? 'تم النسخ' : 'نسخ'}</span>
                  </button>
                </div>

                {/* Next Steps */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>متابعة الطلب فوراً عبر الواتساب</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#121418] hover:bg-[#1e222a] text-[#c6beb4] font-semibold rounded-xl border border-[#292e3a] transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>تقديم طلب آخر</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Two-Column Form Layout matching the image */
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
                dir="rtl"
              >
                
                {/* Right Column: Title, Intro, Bullets & WhatsApp CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Main Card Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#f4efea] tracking-tight mb-3">
                      اطلب قطعتك الآن
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-[#c6beb4] leading-relaxed mb-8">
                      املأ النموذج وسنقوم بالرد عليك في أسرع وقت ممكن بعرض سعر يشمل قيمة القطعة وتكلفة الشحن.
                    </p>

                    {/* Features List with Crimson Check Badges */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#a71d2a] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-white">مطابقة 100% برقم الهيكل</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#a71d2a] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-white">ضمان عامين</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#a71d2a] flex items-center justify-center text-white shrink-0 shadow-sm">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-sm font-bold text-white">شحن سريع وآمن</span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="mt-8 pt-6 border-t border-[#292e3a]">
                    <p className="text-xs text-[#c6beb4] text-center mb-3">
                      أو اختصر الوقت واطلب عبر
                    </p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 text-sm sm:text-base"
                    >
                      <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                      <span>واتساب</span>
                    </a>
                  </div>
                </div>

                {/* Left Column: Input Form */}
                <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Brand & Model/Year */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Brand Select */}
                    <div>
                      <label className="block text-xs font-semibold text-[#c6beb4] mb-1.5">
                        ماركة السيارة *
                      </label>
                      <div className="relative">
                        <select
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          className="w-full py-3 pr-4 pl-10 bg-[#121418] border border-[#a71d2a] ring-1 ring-[#a71d2a]/40 rounded-xl text-sm font-semibold text-white focus:outline-none appearance-none cursor-pointer"
                        >
                          {GERMAN_BRANDS.map((b) => (
                            <option key={b.id} value={b.id} className="bg-[#181b22] text-white">
                              {b.nameAr} ({b.nameEn})
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#c6beb4]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Model & Year Input */}
                    <div>
                      <label className="block text-xs font-semibold text-[#c6beb4] mb-1.5">
                        موديل السيارة / السنة *
                      </label>
                      <input
                        type="text"
                        required
                        value={modelYear}
                        onChange={(e) => setModelYear(e.target.value)}
                        placeholder="مثال: S-Class 2022"
                        className="w-full py-3 px-4 bg-[#121418] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a]/40 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: VIN Input with Barcode Icon */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <label className="text-xs font-semibold text-[#c6beb4]">
                        رقم الهيكل (VIN) *
                      </label>
                      <span className="text-[11px] text-[#c6beb4]/80 font-normal">
                        (مطلوب لضمان الدقة)
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={vin}
                        onChange={(e) => handleVinChange(e.target.value)}
                        maxLength={17}
                        placeholder="أدخل رقم الهيكل المكون من 17 حرف ورقم"
                        className="w-full py-3 pr-4 pl-12 bg-[#121418] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a]/40 rounded-xl text-sm font-mono text-white placeholder:font-sans placeholder:text-neutral-500 focus:outline-none uppercase tracking-wider transition-colors"
                      />
                      
                      {/* Barcode Icon on the Left (inside the input) */}
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#c6beb4]">
                        <Barcode className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Subtle Real-time verification notice if 17 chars entered */}
                    {vin.length === 17 && (
                      <motion.div 
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 flex items-center justify-between text-[11px] text-emerald-400 font-medium px-1"
                      >
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>رقم هيكل متطابق ({vinAnalysis.brandName} • {vinAnalysis.originCountry})</span>
                        </span>
                        <span className="font-mono text-[#c6beb4]">17/17 خانة</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Row 3: Customer Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Customer Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#c6beb4] mb-1.5">
                        الاسم الكريم *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="الاسم"
                        className="w-full py-3 px-4 bg-[#121418] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a]/40 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-[#c6beb4] mb-1.5">
                        رقم الجوال *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="05xxxxxxxx"
                        dir="ltr"
                        className="w-full py-3 px-4 bg-[#121418] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a]/40 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors text-right"
                      />
                    </div>
                  </div>

                  {/* Row 4: Part Details Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-[#c6beb4] mb-1.5">
                      تفاصيل القطعة المطلوبة *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={partDetails}
                      onChange={(e) => setPartDetails(e.target.value)}
                      placeholder="يرجى وصف القطعة بدقة (مثال: فحمات أمامية، مساعدات، حساس أكسجين...)"
                      className="w-full p-4 bg-[#121418] border border-[#292e3a] focus:border-[#a71d2a] focus:ring-1 focus:ring-[#a71d2a]/40 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Row 5: Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 px-6 bg-[#a71d2a] hover:bg-[#bd2432] disabled:opacity-75 text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#a71d2a]/30 text-sm sm:text-base active:scale-[0.99]"
                    >
                      <span>{isSubmitting ? 'جاري إرسال الطلب...' : 'أرسل الطلب للبحث'}</span>
                      <Send className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                </form>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
