/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Workflow, MessageCircle, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenDeploymentModal: () => void;
}

export default function Footer({ onOpenDeploymentModal }: FooterProps) {
  return (
    <footer className="bg-[#070709] border-t border-neutral-800 text-neutral-400 text-xs py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-700 flex items-center justify-center font-mono font-bold text-white text-sm">
                DP
              </div>
              <span className="font-extrabold text-lg text-white font-sans">DeutschPlex</span>
              <span className="text-[10px] bg-red-950 text-red-400 border border-red-800/60 px-1.5 py-0.5 rounded font-mono font-bold">
                GERMANY ➔ KSA
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              المشروع الرائد في المملكة العربية السعودية لاستيراد قطع غيار السيارات الألمانية الأصلية (Mercedes, BMW, Audi, Porsche) مباشرة من ألمانيا بالاعتماد الرقمي الكامل على رقم الهيكل (VIN).
            </p>

            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold">ضمان ذهبي معتمد لمدة عامين كاملين</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#vin-tool" className="hover:text-white transition-colors">فاحص رقم الهيكل VIN</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">كتالوج القطع الألمانية</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">طلب تسعيرة مباشرة</a></li>
              <li><a href="#tracker" className="hover:text-white transition-colors">تتبع الشحنة والطلب</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Presence */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">المواقع والتواصل</h4>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>فرانكفورت، ألمانيا (التجهيز)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>support@deutschplex.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: CI/CD & Deploy */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Workflow className="w-4 h-4 text-emerald-400" />
              <span>النشر التلقائي عبر Netlify</span>
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              المشروع مجهّز بالكامل للربط مع مستودع GitHub وبدء النشر التلقائي السريع المستمر على شبكة Netlify العالمية.
            </p>
            <button
              onClick={onOpenDeploymentModal}
              className="px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs text-emerald-400 border border-neutral-700 flex items-center gap-2 transition-colors font-medium"
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>دليل النشر التلقائي CI/CD</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 DeutschPlex. جميع الحقوق محفوظة. الجودة الألمانية، من المصنع إليك مباشرة.</p>
          <div className="flex items-center gap-4">
            <span>Vite + React 19 + Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-500 font-mono">Netlify CI/CD Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
