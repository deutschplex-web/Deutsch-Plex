/**
 * Title banner at the top of every inner page (breadcrumb, badge, title, subtitle).
 * Pass `parent` for a sub-page (e.g. one category): it adds a middle breadcrumb
 * and makes the back button return to the parent instead of the home page.
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, Home } from 'lucide-react';
import { PageId } from '../../types';

interface PageHeaderProps {
  titleAr: string;
  subtitleAr: string;
  badgeAr: string;
  onNavigate: (page: PageId) => void;
  parent?: { labelAr: string; onClick: () => void };
}

export default function PageHeader({
  titleAr,
  subtitleAr,
  badgeAr,
  onNavigate,
  parent
}: PageHeaderProps) {
  return (
    <div className="pt-24 pb-8 sm:pt-28 sm:pb-10 border-b border-[#C3C4CC] bg-gradient-to-b from-[#e2e5eb] via-[#eff1f5] to-[#eff1f5] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-[#ba1823]/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-40 bg-[#535864]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#535864] min-w-0">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 hover:text-[#181b22] transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#535864]" />
              <span>الرئيسية</span>
            </button>
            <ChevronLeft className="w-3.5 h-3.5 text-[#C3C4CC]" />
            {parent && (
              <>
                <button
                  onClick={parent.onClick}
                  className="hover:text-[#181b22] transition-colors"
                >
                  {parent.labelAr}
                </button>
                <ChevronLeft className="w-3.5 h-3.5 text-[#C3C4CC]" />
              </>
            )}
            <span className="text-[#181b22] font-bold">{titleAr}</span>
          </nav>

          <button
            onClick={parent ? parent.onClick : () => onNavigate('home')}
            className="text-xs font-semibold text-[#535864] hover:text-[#ba1823] flex items-center gap-1.5 transition-colors group shrink-0"
          >
            <span>{parent ? `العودة إلى ${parent.labelAr}` : 'العودة للرئيسية'}</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C3C4CC] text-[11px] font-bold text-[#535864] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ba1823]" />
            <span>{badgeAr}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#181b22] tracking-tight mb-2">
            {titleAr}
          </h1>

          <p className="text-xs sm:text-sm text-[#535864] leading-relaxed max-w-2xl">
            {subtitleAr}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
