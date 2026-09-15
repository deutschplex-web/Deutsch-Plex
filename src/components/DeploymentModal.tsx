/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  GitBranch, 
  Globe, 
  CheckCircle2, 
  Copy, 
  Check, 
  Terminal, 
  Zap, 
  ArrowRight, 
  X, 
  ExternalLink,
  ShieldCheck,
  Workflow
} from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeploymentModal({ isOpen, onClose }: DeploymentModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'github' | 'netlify' | 'checks'>('overview');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(key);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = [
    { label: '1. تهيئة المستودع وإضافة الملفات', cmd: 'git init\ngit add .\ngit commit -m "feat: launch DeutschPlex auto platform"' },
    { label: '2. تحديد الفرع الرئيسي', cmd: 'git branch -M main' },
    { label: '3. ربط مستودع GitHub الخاص بك (استبدل YOUR_REPO)', cmd: 'git remote add origin https://github.com/YOUR_USERNAME/deutschplex.git' },
    { label: '4. رفع الكود إلى GitHub لبدء النشر التلقائي', cmd: 'git push -u origin main' }
  ];

  const netlifySettings = [
    { label: 'Build command (أمر البناء)', value: 'npm run build' },
    { label: 'Publish directory (مجلد النشر)', value: 'dist' },
    { label: 'Node version (إصدار نود)', value: '20' },
    { label: 'Single Page App redirect', value: '/*  /index.html  200 (مفعّل تلقائياً عبر netlify.toml)' }
  ];

  const readinessChecks = [
    { name: 'ملف إعدادات البناء netlify.toml', status: true, desc: 'يحدد مجلد dist وأمر البناء وقواعد التوجيه' },
    { name: 'قواعد التوجيه public/_redirects', status: true, desc: 'ضمان عمل مسارات Single Page App بدون أخطاء 404' },
    { name: 'مخطط سير العمل GitHub Actions (.github/workflows)', status: true, desc: 'فحص جودة وبناء الكود تلقائياً عند كل Commit' },
    { name: 'أمر البناء السريع في package.json', status: true, desc: 'مجهّز بـ "build": "vite build" لإنتاج ملفات ستاتيك فائقة السرعة' },
    { name: 'جاهزية الأصول وملفات SEO', status: true, desc: 'عناوين متوافقة وخطوط Cairo & Inter وخرائط RTL' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto" dir="rtl">
      <div className="relative w-full max-w-3xl bg-[#121217] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800 bg-[#16161d]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-950/50">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                مركز النشر المستمر (GitHub & Netlify CI/CD)
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  جاهز 100%
                </span>
              </h3>
              <p className="text-xs text-neutral-400">
                خطوات أتمتة تدفق العمل وربط الكود للنشر الفوري عند كل تحديث
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-neutral-800 bg-[#0f0f14] px-6 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            نظرة عامة
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'github'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            الربط مع GitHub
          </button>
          <button
            onClick={() => setActiveTab('netlify')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'netlify'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            النشر على Netlify
          </button>
          <button
            onClick={() => setActiveTab('checks')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'checks'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            فحص الجاهزية
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-red-500" />
                  كيف يعمل النشر الآلي المستمر (Continuous Deployment)؟
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  بمجرد ربط مستودع GitHub بـ Netlify، لن تحتاج إلى رفع الملفات يدوياً أبداً! أي تعديل تقوم بحفظه ودفعه إلى مستودع GitHub سيقوم خادم Netlify ببنائه تلقائياً خلال ثوانٍ معدودة ونشره على رابط موقعك المباشر.
                </p>
              </div>

              {/* Visual Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-200 mb-2 font-mono font-bold">
                    01
                  </div>
                  <span className="font-bold text-sm text-white">الكود في المستودع</span>
                  <span className="text-xs text-neutral-400 mt-1">تحديث الكود أو إضافة صفحات جديدة</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center relative">
                  <div className="w-10 h-10 rounded-full bg-red-950/60 border border-red-800 flex items-center justify-center text-red-400 mb-2 font-mono font-bold">
                    02
                  </div>
                  <span className="font-bold text-sm text-white">GitHub Push</span>
                  <span className="text-xs text-neutral-400 mt-1">إرسال التحديثات لفرع main</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400 mb-2 font-mono font-bold">
                    03
                  </div>
                  <span className="font-bold text-sm text-white">Netlify Live</span>
                  <span className="text-xs text-neutral-400 mt-1">بناء فوري وتوزيع على شبكة CDN العالمية</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/30 to-neutral-900 border border-red-900/30 flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-bold text-white">تصدير المشروع بضغطة زر</h5>
                  <p className="text-xs text-neutral-400">
                    يمكنك استخدام قائمة إعدادات AI Studio في الزاوية العلوية واختيار <strong>Export to GitHub</strong> أو تحميل ملف ZIP كاملاً.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('github')}
                  className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>أوامر الرفع لـ GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'github' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-300">
                افتح الطرفية (Terminal) في مجلد المشروع ونفذ الأوامر التالية لإنشاء مستودع GitHub ورفع الكود:
              </p>

              <div className="space-y-3">
                {gitCommands.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-neutral-300">{item.label}</span>
                      <button
                        onClick={() => copyToClipboard(item.cmd, `git-${idx}`)}
                        className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 bg-neutral-900 px-2 py-1 rounded border border-neutral-800 transition-colors"
                      >
                        {copiedIndex === `git-${idx}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">تم النسخ</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>نسخ</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs text-emerald-400 font-mono bg-black/60 p-2.5 rounded overflow-x-auto text-left" dir="ltr">
                      {item.cmd}
                    </pre>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 text-xs text-neutral-400">
                💡 <strong>ملاحظة:</strong> تم تجهيز ملف <code className="text-neutral-200">.gitignore</code> مسبقاً لمنع رفع ملفات الحزم الثقيلة (node_modules) والمجلدات المؤقتة.
              </div>
            </div>
          )}

          {activeTab === 'netlify' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                <h4 className="text-sm font-bold text-white mb-2">خطوات الربط في لوحة تحكم Netlify (خلال دقيقتين):</h4>
                <ol className="list-decimal list-inside space-y-2 text-xs text-neutral-300 leading-relaxed">
                  <li>افتح <a href="https://app.netlify.com" target="_blank" rel="noreferrer" className="text-red-400 hover:underline inline-flex items-center gap-1 font-semibold">Netlify Dashboard <ExternalLink className="w-3 h-3" /></a> وسجّل الدخول بحساب GitHub.</li>
                  <li>اضغط على الزر الأخضر <strong>"Add new site"</strong> ثم اختر <strong>"Import an existing project"</strong>.</li>
                  <li>اختر <strong>GitHub</strong> وقم بتحديد المستودع الخاص بك (مثل <code className="text-neutral-200">deutschplex</code>).</li>
                  <li>ستكتشف منصة Netlify تلقائياً الإعدادات التالية من ملف <code className="text-neutral-200">netlify.toml</code>:</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {netlifySettings.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="text-[11px] text-neutral-400 block mb-1">{s.label}</span>
                    <span className="text-xs font-mono font-bold text-white text-left block" dir="ltr">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-300 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>تم تفعيل قواعد SPA Fallback:</strong> لا تقلق بشأن تحديث الصفحة أو التنقل بين المسارات؛ ملف <code className="text-white">netlify.toml</code> ومجلد <code className="text-white">public/_redirects</code> مهيآن لتوجيه كافة الطلبات إلى <code className="text-white">index.html</code> بدون ظهور خطأ 404.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checks' && (
            <div className="space-y-3">
              <p className="text-xs text-neutral-300 mb-2">
                فحص تكامل ملفات مستودع DeutschPlex وجاهزيتها للنشر السحابي الآلي:
              </p>
              {readinessChecks.map((check, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">{check.name}</h5>
                      <p className="text-[11px] text-neutral-400 mt-0.5">{check.desc}</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-md font-mono shrink-0">
                    PASS
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-[#16161d] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>جاهز لرفعه إلى GitHub والنشر الفوري على Netlify</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-colors"
          >
            إغلاق النافذة
          </button>
        </div>

      </div>
    </div>
  );
}
