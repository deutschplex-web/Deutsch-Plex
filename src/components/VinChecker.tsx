/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Barcode, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowLeft, 
  Copy, 
  Check, 
  ShieldCheck,
  Car
} from 'lucide-react';
import { decodeVin } from '../utils/vinDecoder';
import { SAMPLE_VINS } from '../data/brands';
import { VinAnalysis } from '../types';
import BrandLogo from './BrandLogo';

interface VinCheckerProps {
  onUseVin: (vin: string, brand?: string) => void;
}

export default function VinChecker({ onUseVin }: VinCheckerProps) {
  const [vinInput, setVinInput] = useState('WDD2230621A049821');
  const [analysis, setAnalysis] = useState<VinAnalysis>(() => decodeVin('WDD2230621A049821'));
  const [copied, setCopied] = useState(false);

  const handleInputChange = (val: string) => {
    const clean = val.toUpperCase().replace(/\s+/g, '');
    setVinInput(clean);
    setAnalysis(decodeVin(clean));
  };

  const handleSelectSample = (sampleVin: string) => {
    setVinInput(sampleVin);
    setAnalysis(decodeVin(sampleVin));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(vinInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="vin-tool" className="py-20 bg-[#0d0d12] border-y border-neutral-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-900/60 text-xs font-bold text-red-400 mb-3">
            <Barcode className="w-3.5 h-3.5" />
            <span>نظام التدقيق الرقمي ISO 3779</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            فاحص ومحلل رقم الهيكل (VIN Decoder)
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            أدخل رقم الهيكل المكون من 17 حرفاً ورقماً للتحقق من بيانات السيارة وبلد الصنع ومصنع التجميع وسنة الموديل بدقة 100%.
          </p>
        </div>

        {/* Card Box */}
        <div className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Sample Chips */}
          <div className="mb-6">
            <span className="text-xs text-neutral-400 block mb-2 font-medium">جرّب نماذج لأرقام هياكل معتمدة:</span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_VINS.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectSample(s.vin)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    vinInput === s.vin 
                      ? 'bg-red-950 border-red-700 text-red-200' 
                      : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <span className="font-semibold">{s.label}</span>
                  <span className="text-[10px] text-neutral-400 font-mono mr-1.5">({s.vin.slice(0, 7)}...)</span>
                </button>
              ))}
            </div>
          </div>

          {/* VIN Input Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={vinInput}
                onChange={(e) => handleInputChange(e.target.value)}
                maxLength={17}
                placeholder="أدخل رقم الهيكل المكون من 17 خانة..."
                dir="ltr"
                className="w-full py-4 px-4 sm:px-6 bg-black/60 border-2 border-neutral-700 focus:border-red-600 rounded-xl text-lg sm:text-xl font-mono uppercase text-white tracking-widest focus:outline-none transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-mono text-neutral-500 pointer-events-none">
                <span className={vinInput.length === 17 ? 'text-emerald-400 font-bold' : 'text-neutral-400'}>
                  {vinInput.length}/17
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Analysis Visualizer */}
          <div className="space-y-6">
            {/* Visual Segments */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center" dir="ltr">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  1. WMI (المنشأ والماركة)
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-red-400">
                  {analysis.wmi || '---'}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">الخانات 1 - 3</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  2. VDS (مواصفات الموديل)
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-amber-400">
                  {analysis.vds || '------'}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">الخانات 4 - 9</span>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  3. VIS (الرقم التسلسلي والمصنع)
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-emerald-400">
                  {analysis.vis || '--------'}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">الخانات 10 - 17</span>
              </div>
            </div>

            {/* Analysis Results Box */}
            <motion.div 
              key={analysis.vin + (analysis.brand || '')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-4 sm:p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  {analysis.brand ? (
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-700/80 p-1 flex items-center justify-center shadow-md">
                      <BrandLogo brandId={analysis.brand} size={28} animateOnHover={false} />
                    </div>
                  ) : analysis.isValid ? (
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>
                        {analysis.isValid 
                          ? 'رقم هيكل متطابق ومعتمد 100%' 
                          : (vinInput.length < 17 ? `يرجى إكمال 17 خانة (متبقي ${17 - vinInput.length})` : 'تحقق من صحة رقم الهيكل')}
                      </span>
                      {analysis.isValid && (
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-1.5 py-0.5 rounded font-mono">
                          OEM VERIFIED
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {analysis.brandName} • {analysis.originCountry}
                    </p>
                  </div>
                </div>

                {analysis.modelYear && (
                  <div className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                    سنة الموديل: <strong className="text-white">{analysis.modelYear}</strong>
                  </div>
                )}
              </div>

              {/* Notes */}
              {analysis.notesAr && analysis.notesAr.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  {analysis.notesAr.map((note, idx) => (
                    <p key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>{note}</span>
                    </p>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">تم نسخ رقم الهيكل</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>نسخ رقم الهيكل</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onUseVin(vinInput, analysis.brand)}
                disabled={vinInput.length < 17}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-700 hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>طلب تسعيرة لقطع هذا الهيكل</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
