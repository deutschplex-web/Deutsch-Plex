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
  ShieldCheck,
  Search,
  Layers,
  Send,
  Truck
} from 'lucide-react';
import DeutschPlexLogo from './DeutschPlexLogo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ 
  currentPage, 
  onNavigate
}: NavbarProps) {
  const { isDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string; isSpecial?: boolean; isOrder?: boolean }[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'categories', label: 'قطع الغيار' },
    { id: 'order', label: 'اطلب عرض سعر', isOrder: true },
    { id: 'tracker', label: 'تتبع الطلب' },
    { id: 'about', label: 'عن دويتش بلكس' },
    { id: 'process', label: 'طريقة الطلب' },
    { id: 'faq', label: 'الأسئلة الشائعة' },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#eff1f5]/95 backdrop-blur-md border-b border-[#C3C4CC] shadow-xs py-3' 
          : 'bg-[#eff1f5]/85 backdrop-blur-sm border-b border-[#C3C4CC]/60 py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            id="brand-logo"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none cursor-pointer"
          >
            <DeutschPlexLogo 
              variant="horizontal" 
              size="sm" 
              animated={false}
              isLightMode={!isDarkMode}
              className="py-1"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-reverse space-x-1.5 text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive 
                      ? 'text-[#181b22] bg-[#ffffff] border border-[#C3C4CC] shadow-xs font-bold' 
                      : link.isSpecial
                        ? 'text-[#181b22] hover:text-[#535864] bg-[#ffffff]/70 border border-[#C3C4CC] hover:border-[#535864]'
                        : link.isOrder
                          ? 'text-[#ba1823] hover:text-white bg-[#ba1823]/10 border border-[#ba1823]/30 hover:bg-[#ba1823] font-bold'
                          : 'text-[#535864] hover:text-[#181b22] hover:bg-[#ffffff]/80'
                  }`}
                >
                  {link.isSpecial && <Search className="w-3 h-3 text-[#535864]" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 inset-x-2 h-[2px] rounded-full bg-[#ba1823]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Dark Mode Switch Button */}
            <ThemeToggle />

            {/* Order CTA */}
            <button
              onClick={() => handleLinkClick('order')}
              id="header-order-btn"
              className={`hidden sm:flex text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md transition-all items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                currentPage === 'order'
                  ? 'bg-[#a0141e] text-white ring-2 ring-[#535864]'
                  : 'bg-[#ba1823] hover:bg-[#a0141e] text-white shadow-[#535864]/20'
              }`}
            >
              <span>اطلب عرض سعر</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 lg:hidden text-[#535864] hover:text-[#181b22] focus:outline-none rounded-lg bg-[#ffffff] border border-[#C3C4CC] shadow-xs"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#eff1f5]/98 border-b border-[#C3C4CC] px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold text-right transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#535864] text-white font-bold' 
                      : 'text-[#535864] hover:text-[#181b22] hover:bg-[#ffffff]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </button>
              );
            })}
          </div>

          {/* Theme switcher row in mobile menu */}
          <div className="pt-2 border-t border-[#C3C4CC] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#181b22]">المظهر والسمة:</span>
            <ThemeToggle showLabel={true} />
          </div>

          <div className="pt-2 border-t border-[#C3C4CC] space-y-2">
            <button
              onClick={() => handleLinkClick('order')}
              className="w-full py-3 bg-[#ba1823] hover:bg-[#a0141e] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ba1823]/20"
            >
              <span>اطلب عرض سعر برقم الهيكل</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
