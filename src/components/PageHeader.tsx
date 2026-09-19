/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Home } from 'lucide-react';
import { PageId } from '../types';

interface PageHeaderProps {
  pageId: PageId;
  titleAr: string;
  subtitleAr: string;
  badgeAr: string;
  onNavigate: (page: PageId) => void;
}

export default function PageHeader({
  pageId,
  titleAr,
  subtitleAr,
  badgeAr,
  onNavigate
}: PageHeaderProps) {
  return (
    <div className="pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-[#292e3a] bg-gradient-to-b from-[#111317] via-[#14171e] to-[#0e1014] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-[#a71d2a]/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-40 bg-[#b88655]/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <nav className="flex items-center gap-2 text-xs text-[#c6beb4]">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#b88655]" />
              <span>الرئيسية</span>
            </button>
            <ChevronLeft className="w-3.5 h-3.5 text-[#383f4f]" />
            <span className="text-[#f4efea] font-bold">{titleAr}</span>
          </nav>

          <button
            onClick={() => onNavigate('home')}
            className="text-xs font-semibold text-[#b88655] hover:text-[#f4efea] flex items-center gap-1.5 transition-colors group"
          >
            <span>العودة للرئيسية</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Page Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#292e3a] text-[11px] font-bold text-[#b88655] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a71d2a]" />
            <span>{badgeAr}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#f4efea] tracking-tight mb-2">
            {titleAr}
          </h1>

          <p className="text-xs sm:text-sm text-[#c6beb4] leading-relaxed max-w-2xl">
            {subtitleAr}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
