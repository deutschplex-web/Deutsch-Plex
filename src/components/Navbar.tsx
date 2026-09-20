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
import { PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ 
  currentPage, 
  onNavigate
}: NavbarProps) {
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
    { id: 'order', label: 'طلب تسعيرة', isOrder: true },
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
          ? 'bg-[#111317]/92 backdrop-blur-md border-b border-[#292e3a] shadow-2xl py-3' 
          : 'bg-transparent border-b border-white/5 py-5'
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
                      ? 'text-white bg-[#1e232d] border border-[#383f4f] shadow-md' 
                      : link.isSpecial
                        ? 'text-[#f4efea] hover:text-[#b88655] bg-[#181b22] border border-[#292e3a] hover:border-[#b88655]/50'
                        : link.isOrder
                          ? 'text-[#f4efea] hover:text-white bg-[#a71d2a]/20 border border-[#a71d2a]/40 hover:bg-[#a71d2a]/30'
                          : 'text-[#c6beb4] hover:text-white hover:bg-[#181b22]'
                  }`}
                >
                  {link.isSpecial && <Search className="w-3 h-3 text-[#b88655]" />}
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbarActiveIndicator"
                      className="absolute bottom-0 inset-x-2 h-[2px] rounded-full bg-[#a71d2a]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Order CTA */}
            <button
              onClick={() => handleLinkClick('order')}
              id="header-order-btn"
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-lg transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                currentPage === 'order'
                  ? 'bg-[#bd2432] text-white ring-2 ring-[#b88655]'
                  : 'bg-[#a71d2a] hover:bg-[#bd2432] text-white shadow-[#a71d2a]/30'
              }`}
            >
              <span>طلب تسعيرة</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
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
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold text-right transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#a71d2a] text-white font-bold' 
                      : 'text-[#c6beb4] hover:text-white hover:bg-[#181b22]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#292e3a] space-y-2">
            <button
              onClick={() => handleLinkClick('order')}
              className="w-full py-3 bg-[#a71d2a] hover:bg-[#bd2432] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#a71d2a]/30"
            >
              <span>طلب تسعيرة القطع برقم الهيكل</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
