/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowLeft, 
  MessageCircle, 
  Workflow, 
  ShieldCheck,
  Search
} from 'lucide-react';

interface NavbarProps {
  onOpenDeploymentModal: () => void;
  onOpenVinChecker: () => void;
}

export default function Navbar({ onOpenDeploymentModal, onOpenVinChecker }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'فاحص VIN', href: '#vin-tool', isSpecial: true },
    { label: 'قطع الغيار', href: '#categories' },
    { label: 'من نحن', href: '#about' },
    { label: 'مميزاتنا', href: '#features' },
    { label: 'طريقة الطلب', href: '#process' },
    { label: 'تتبع الطلب', href: '#tracker' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3' 
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-700 via-red-600 to-neutral-900 p-0.5 shadow-lg shadow-red-950/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0d12] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-black text-red-500 text-lg tracking-tighter">DP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-sans">DeutschPlex</span>
                <span className="text-[10px] bg-red-950 text-red-400 border border-red-800/60 px-1.5 py-0.5 rounded font-bold font-mono">🇩🇪 DE</span>
              </div>
              <span className="text-[11px] text-neutral-400 font-medium">قطع غيار ألمانية أصلية • استيراد مباشر</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 hover:text-white ${
                  link.isSpecial 
                    ? 'text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-950/30 px-2.5 py-1 rounded-full border border-red-900/40' 
                    : 'text-neutral-300'
                }`}
              >
                {link.isSpecial && <Search className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* GitHub & Netlify Continuous Deployment Hub */}
            <button
              onClick={onOpenDeploymentModal}
              id="cicd-hub-btn"
              title="إعدادات مستودع GitHub والنشر السحابي المستمر على Netlify"
              className="px-3 py-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/60 text-xs font-semibold flex items-center gap-2 transition-all hover:border-neutral-500 group"
            >
              <Workflow className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-45 transition-transform" />
              <span>نشر GitHub & Netlify</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            {/* Order CTA */}
            <a
              href="#order"
              id="header-order-btn"
              className="bg-red-700 hover:bg-red-600 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-red-950/50 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>طلب تسعيرة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDeploymentModal}
              className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 text-xs"
              title="GitHub & Netlify CI/CD"
            >
              <Workflow className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 text-neutral-300 hover:text-white focus:outline-none rounded-lg bg-neutral-900 border border-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d12]/98 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeploymentModal();
              }}
              className="w-full py-2.5 px-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs font-bold text-neutral-200 flex items-center justify-center gap-2"
            >
              <Workflow className="w-4 h-4 text-emerald-400" />
              <span>دليل ربط المستودع بـ GitHub & Netlify</span>
            </button>

            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-red-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-950"
            >
              <span>طلب تسعيرة القطع برقم الهيكل</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
