/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Barcode, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Copy, 
  Check, 
  Info,
  Car,
  FileCheck
} from 'lucide-react';
import { GERMAN_BRANDS, PART_CATEGORIES, SAUDI_CITIES } from '../data/brands';
import { decodeVin } from '../utils/vinDecoder';
import { PartCategoryId, QuoteRequest, ShippingSpeed } from '../types';
import BrandLogo from './BrandLogo';

interface OrderFormProps {
  initialVin?: string;
  initialBrand?: string;
  initialCategory?: PartCategoryId;
  onOrderCreated?: (order: QuoteRequest) => void;
}

export default function OrderForm({ 
  initialVin, 
  initialBrand, 
  initialCategory,
  onOrderCreated 
}: OrderFormProps) {
  const [brand, setBrand] = useState('mercedes');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('2022');
  const [vin, setVin] = useState('');
  const [category, setCategory] = useState<PartCategoryId>('brakes');
  const [partDetails, setPartDetails] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('الرياض');
  const [shippingSpeed, setShippingSpeed] = useState<ShippingSpeed>('express');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<QuoteRequest | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Sync props when user clicks from VIN tool or Categories
  useEffect(() => {
    if (initialVin) setVin(initialVin);
    if (initialBrand) {
      const match = GERMAN_BRANDS.find(b => b.id === initialBrand || b.nameEn.toLowerCase() === initialBrand.toLowerCase());
      if (match) setBrand(match.id);
    }
  }, [initialVin, initialBrand]);

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory);
  }, [initialCategory]);

  const vinAnalysis = decodeVin(vin);

  const selectedBrandObj = GERMAN_BRANDS.find(b => b.id === brand) || GERMAN_BRANDS[0];
  const selectedCatObj = PART_CATEGORIES.find(c => c.id === category) || PART_CATEGORIES[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `DP-2026-${randomSuffix}`;

    const newOrder: QuoteRequest = {
      id: orderId,
      createdAt: new Date().toLocaleDateString('ar-SA'),
      brand: selectedBrandObj.nameAr,
      model: model || selectedBrandObj.popularModels[0],
      year,
      vin: vin.toUpperCase().trim(),
      category,
      partDetails,
      partNumber: partNumber || 'غير محدد (سيتم استخراجه بالكتالوج)',
      customerName,
      phoneNumber,
      city,
      shippingSpeed,
      estimatedPriceRangeSar: 'يتم التدقيق في الكتالوج الألماني',
      estimatedDays: shippingSpeed === 'express' ? '3 - 7 أيام عمل' : '7 - 14 يوم عمل',
      status: 'received'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedOrder(newOrder);
      if (onOrderCreated) {
        onOrderCreated(newOrder);
      }
    }, 1000);
  };

  const handleCopyRef = () => {
    if (!submittedOrder) return;
    navigator.clipboard.writeText(submittedOrder.id);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  // WhatsApp formatted URL
  const generateWhatsAppUrl = (order: QuoteRequest) => {
    const text = `السلام عليكم ورحمة الله،
أرغب في طلب تسعيرة قطع غيار ألمانية عبر DeutschPlex:
*رقم المرجع:* ${order.id}
*السيارة:* ${order.brand} - ${order.model} (${order.year})
*رقم الهيكل (VIN):* ${order.vin}
*القسم:* ${selectedCatObj.titleAr}
*تفاصيل القطعة:* ${order.partDetails}
*رقم القطعة (إن وجد):* ${order.partNumber}
*الاسم:* ${order.customerName}
*المدينة:* ${order.city}
*نوع الشحن المطلوب:* ${order.shippingSpeed === 'express' ? 'جوي سريع DHL (3-7 أيام)' : 'جوي قياسي (7-14 يوم)'}`;

    return `https://wa.me/966500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="order" className="py-20 bg-[#0a0a0c] relative">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-red-950/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase mb-2 block">
            نموذج الطلب المباشر
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            طلب تسعيرة قطع غيار أصلية برقم الهيكل
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            أدخل بيانات السيارة والقطع المطلوبة لاستلام تسعيرة فورية شاملة للشحن الدولي وضريبة القيمة المضافة مع ضمان سنتين.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          
          {submittedOrder ? (
            /* Confirmation Screen */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 text-center space-y-6"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <FileCheck className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center p-2 shadow-lg">
                  <BrandLogo brandId={brand} size={36} animateOnHover={false} />
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800">
                  تم استلام طلبك بنجاح!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                  طلبك رقم <span className="font-mono text-red-400">{submittedOrder.id}</span>
                </h3>
                <p className="text-sm text-neutral-300 max-w-lg mx-auto">
                  يقوم فريق DeutschPlex الآن بالبحث في الكتالوج الألماني المعتمد لمطابقة رقم الهيكل واستخراج أفضل تسعيرة.
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-right space-y-2.5 text-xs">
                <div className="flex justify-between pb-2 border-b border-neutral-800 text-neutral-400">
                  <span>السيارة والموديل:</span>
                  <strong className="text-white">{submittedOrder.brand} {submittedOrder.model} ({submittedOrder.year})</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-neutral-800 text-neutral-400">
                  <span>رقم الهيكل (VIN):</span>
                  <strong className="text-red-400 font-mono" dir="ltr">{submittedOrder.vin}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-neutral-800 text-neutral-400">
                  <span>القسم المطلوب:</span>
                  <strong className="text-white">{selectedCatObj.titleAr}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-neutral-800 text-neutral-400">
                  <span>المدينة ونوع الشحن:</span>
                  <strong className="text-white">{submittedOrder.city} • {submittedOrder.estimatedDays}</strong>
                </div>
                <div className="flex justify-between text-neutral-400 pt-1">
                  <span>الضمان:</span>
                  <span className="text-amber-400 font-bold">24 شهر ضمان ذهبي</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppUrl(submittedOrder)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-sm shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تأكيد ومتابعة عبر الواتساب فوراً</span>
                </a>

                <button
                  onClick={handleCopyRef}
                  className="w-full sm:w-auto px-5 py-3.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-neutral-700"
                >
                  {copiedRef ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">تم نسخ رقم المرجع</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>نسخ رقم الطلب</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSubmittedOrder(null)}
                  className="w-full sm:w-auto px-4 py-3.5 text-xs text-neutral-400 hover:text-white underline"
                >
                  طلب قطعة أخرى
                </button>
              </div>

            </motion.div>
          ) : (
            /* Request Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* Step 1: Vehicle Details */}
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="w-6 h-6 rounded-md bg-red-950 text-red-400 border border-red-800/80 flex items-center justify-center text-xs font-mono font-bold">
                    1
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">بيانات السيارة ورقم الهيكل (VIN)</h3>
                </div>

                {/* Brand Selector Cards with Official Logos */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-neutral-300 mb-2.5">
                    اختر العلامة الألمانية *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {GERMAN_BRANDS.map((b) => {
                      const isSelected = brand === b.id;
                      return (
                        <motion.button
                          key={b.id}
                          type="button"
                          onClick={() => setBrand(b.id)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-2 transition-all relative ${
                            isSelected
                              ? 'bg-red-950/40 border-red-600 shadow-lg shadow-red-950/50 ring-1 ring-red-600'
                              : 'bg-neutral-950/80 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          )}
                          <div className="h-10 flex items-center justify-center">
                            <BrandLogo brandId={b.id} size={32} animateOnHover={false} />
                          </div>
                          <div>
                            <span className={`block text-xs font-bold ${isSelected ? 'text-white' : 'text-neutral-300'}`}>
                              {b.nameAr}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono">
                              {b.nameEn}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Model */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      الموديل / الفئة *
                    </label>
                    <input
                      type="text"
                      required
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="مثال: S500 / M5 / Cayenne"
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm text-white focus:outline-none placeholder-neutral-600"
                    />
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      سنة الصنع *
                    </label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm text-white focus:outline-none font-mono"
                    >
                      {Array.from({ length: 22 }, (_, i) => 2026 - i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* VIN Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                      <Barcode className="w-3.5 h-3.5 text-red-500" />
                      <span>رقم الهيكل (VIN) المكون من 17 خانة *</span>
                    </label>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {vin.length}/17 خانة
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={vin}
                      onChange={(e) => setVin(e.target.value.toUpperCase().replace(/\s+/g, ''))}
                      maxLength={17}
                      placeholder="أدخل رقم الشاصيه (مثال: WDD2230621A049821)"
                      dir="ltr"
                      className="w-full p-3.5 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm sm:text-base font-mono uppercase text-white tracking-wider focus:outline-none placeholder-neutral-600"
                    />
                    {vin.length === 17 && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                    )}
                  </div>

                  {vin.length > 0 && vin.length < 17 && (
                    <p className="text-[11px] text-amber-400 mt-1">
                      متبقي {17 - vin.length} خانة لاكتمال رقم الهيكل الدولي (17 خانة).
                    </p>
                  )}
                </div>
              </div>

              {/* Step 2: Part Categories & Description */}
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="w-6 h-6 rounded-md bg-red-950 text-red-400 border border-red-800/80 flex items-center justify-center text-xs font-mono font-bold">
                    2
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">القطع المطلوبة</h3>
                </div>

                {/* Category Pills */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    اختر تصنيف القطعة:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {PART_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-right ${
                          category === cat.id
                            ? 'bg-red-950/80 border-red-600 text-white font-bold shadow-md shadow-red-950'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <div className="text-white text-xs truncate">{cat.titleAr}</div>
                        <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{cat.avgEstDays}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      تفاصيل القطعة بالتحديد *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={partDetails}
                      onChange={(e) => setPartDetails(e.target.value)}
                      placeholder="صف القطعة بدقة (مثال: فحمات أمامية مع حساسات التيل، أو مساعد هواء يمين...)"
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm text-white focus:outline-none placeholder-neutral-600 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      رقم القطعة OEM المصنعي (اختياري إن وجد)
                    </label>
                    <input
                      type="text"
                      value={partNumber}
                      onChange={(e) => setPartNumber(e.target.value)}
                      placeholder="مثال: A0004209500 أو 34116860017"
                      dir="ltr"
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm font-mono text-white focus:outline-none placeholder-neutral-600"
                    />
                    <p className="text-[11px] text-neutral-500 mt-1">
                      إذا لم تكن تعرف كود القطعة، مهندسونا سيقومون باستخراجه مباشرة من رقم الهيكل.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Shipping */}
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="w-6 h-6 rounded-md bg-red-950 text-red-400 border border-red-800/80 flex items-center justify-center text-xs font-mono font-bold">
                    3
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">بيانات التواصل والتسليم</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="الاسم الثلاثي"
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm text-white focus:outline-none placeholder-neutral-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      رقم الجوال السعودي *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm font-mono text-white focus:outline-none placeholder-neutral-600 text-right"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      المدينة *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-3 bg-neutral-950 border border-neutral-700 focus:border-red-600 rounded-xl text-sm text-white focus:outline-none"
                    >
                      {SAUDI_CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Shipping Selection */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-2">
                    طريقة الشحن المفضلة:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setShippingSpeed('express')}
                      className={`p-3.5 rounded-xl border text-right transition-all flex items-start gap-3 ${
                        shippingSpeed === 'express'
                          ? 'bg-red-950/60 border-red-600 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">شحن جوي سريع DHL من فرانكفورت</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">التوصيل خلال 3 إلى 7 أيام عمل لباب المنزل</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setShippingSpeed('standard')}
                      className={`p-3.5 rounded-xl border text-right transition-all flex items-start gap-3 ${
                        shippingSpeed === 'standard'
                          ? 'bg-red-950/60 border-red-600 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-neutral-800 text-neutral-400 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">شحن جوي اقتصادي</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">التوصيل خلال 7 إلى 14 يوم عمل (أقل تكلفة)</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>جميع القطع مشمولة بضمان ذهبي سنتين واستبدال فوري</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-red-700 hover:bg-red-600 disabled:opacity-75 text-white rounded-xl font-bold text-sm shadow-xl shadow-red-950 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span>جاري تسجيل الطلب ومطابقة الهيكل...</span>
                  ) : (
                    <>
                      <span>إرسال طلب التسعيرة للبحث في ألمانيا</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
