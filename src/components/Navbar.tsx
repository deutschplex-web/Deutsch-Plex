/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowLeft, 
  MessageCircle, 
  Workflow, 
  ShieldCheck,
  Search
} from 'lucide-react';
import DeutschPlexLogo from './DeutschPlexLogo';

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
          ? 'bg-[#111317]/92 backdrop-blur-md border-b border-[#292e3a] shadow-2xl py-3' 
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="#home" 
            id="brand-logo"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none"
          >
            <DeutschPlexLogo 
              variant="horizontal" 
              size="sm" 
              animated={false}
              className="py-1"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 hover:text-white ${
                  link.isSpecial 
                    ? 'text-[#f4efea] hover:text-[#b88655] flex items-center gap-1.5 bg-[#1e222a] px-3 py-1 rounded-full border border-[#b88655]/40 shadow-sm' 
                    : 'text-[#c6beb4]'
                }`}
              >
                {link.isSpecial && <Search className="w-3.5 h-3.5 text-[#b88655]" />}
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
              className="px-3 py-2 rounded-xl bg-[#181b22] hover:bg-[#202530] text-[#c6beb4] hover:text-white border border-[#292e3a] text-xs font-semibold flex items-center gap-2 transition-all hover:border-[#b88655]/50 group"
            >
              <Workflow className="w-3.5 h-3.5 text-[#b88655] group-hover:rotate-45 transition-transform" />
              <span>نشر GitHub & Netlify</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>

            {/* Order CTA */}
            <a
              href="#vin-tool"
              id="header-order-btn"
              className="bg-[#a71d2a] hover:bg-[#bd2432] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-[#a71d2a]/30 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>طلب تسعيرة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDeploymentModal}
              className="p-2 rounded-lg bg-[#181b22] text-[#c6beb4] border border-[#292e3a] text-xs"
              title="GitHub & Netlify CI/CD"
            >
              <Workflow className="w-4 h-4 text-[#b88655]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 text-[#c6beb4] hover:text-white focus:outline-none rounded-lg bg-[#181b22] border border-[#292e3a]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111317]/98 border-b border-[#292e3a] px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#c6beb4] hover:text-white hover:bg-[#181b22] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#292e3a] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeploymentModal();
              }}
              className="w-full py-2.5 px-3 bg-[#181b22] border border-[#292e3a] rounded-xl text-xs font-bold text-[#c6beb4] flex items-center justify-center gap-2"
            >
              <Workflow className="w-4 h-4 text-[#b88655]" />
              <span>دليل ربط المستودع بـ GitHub & Netlify</span>
            </button>

            <a
              href="#vin-tool"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#a71d2a] hover:bg-[#bd2432] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#a71d2a]/30"
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
