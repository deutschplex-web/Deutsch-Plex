/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import DeutschPlexLogo from './DeutschPlexLogo';
import BrandLogo from './BrandLogo';
import { GERMAN_BRANDS } from '../data/brands';
import { PageId } from '../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };
  return (
    <footer className="bg-[#0b0d10] border-t border-[#292e3a] text-[#c6beb4] text-xs py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#292e3a]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <DeutschPlexLogo variant="horizontal" size="sm" animated={false} />
            </div>
            
            <p className="text-xs text-[#c6beb4] leading-relaxed max-w-sm">
              المشروع الرائد في المملكة العربية السعودية لاستيراد قطع غيار السيارات الألمانية الأصلية (Mercedes, BMW, Audi, Porsche, Volkswagen) مباشرة من ألمانيا بالاعتماد الرقمي الكامل على رقم الهيكل (VIN).
            </p>

            <div className="flex items-center gap-2 text-[#b88655]">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold">ضمان لمدة 24 شهر من ألمانيا</span>
            </div>

            {/* Brand Logos Row in Footer */}
            <div className="pt-2">
              <span className="text-[10px] text-neutral-500 block mb-2 font-mono">الكتالوجات المعتمدة:</span>
              <div className="flex items-center gap-3">
                {GERMAN_BRANDS.map((b) => (
                  <div 
                    key={b.id} 
                    title={`${b.nameAr} - ${b.nameEn}`}
                    className="w-9 h-9 rounded-lg bg-[#181b22] border border-[#292e3a] flex items-center justify-center p-1.5 hover:border-[#b88655]/60 transition-colors"
                  >
                    <BrandLogo brandId={b.id} size={22} animateOnHover={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">صفحات المنصة</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer text-right">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('order')} className="hover:text-white transition-colors cursor-pointer text-right text-[#b88655] font-semibold">
                  طلب تسعيرة فورية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('categories')} className="hover:text-white transition-colors cursor-pointer text-right">
                  كتالوج القطع الألمانية
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tracker')} className="hover:text-white transition-colors cursor-pointer text-right">
                  تتبع الطلب
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer text-right">
                  عن دويتش بلكس
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('process')} className="hover:text-white transition-colors cursor-pointer text-right">
                  طريقة وخطوات الطلب
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors cursor-pointer text-right">
                  الأسئلة الشائعة
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Presence */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white">المواقع والتواصل</h4>
            <ul className="space-y-2 text-[#c6beb4]">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#a71d2a] shrink-0" />
                <span>جدة، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b88655] shrink-0" />
                <span>فرانكفورت، ألمانيا (التجهيز)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c6beb4] shrink-0" />
                <span>support@deutschplex.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a 
                  href="https://wa.me/966536152188"
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="font-mono text-white hover:text-[#25D366] transition-colors"
                >
                  +966 53 615 2188
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 DeutschPlex. جميع الحقوق محفوظة. الجودة الألمانية، من المصنع إليك مباشرة.</p>
          <div className="flex items-center gap-4">
            <span>قطع غيار أصلية معتمدة VDA / OEM</span>
            <span>•</span>
            <span className="text-neutral-400 font-mono">شحن جوي سريع DHL Express</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
