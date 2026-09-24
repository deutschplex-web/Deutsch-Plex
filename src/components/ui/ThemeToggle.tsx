/**
 * Light / dark mode switch button.
 */

import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      id="theme-mode-toggle-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ba1823]/40 ${
        showLabel
          ? 'px-3.5 py-2 rounded-xl text-xs font-semibold gap-2.5 ' +
            (isDarkMode
              ? 'bg-[#1e2533] text-[#f3f4f6] hover:bg-[#252e3f] border border-[#2d3648]'
              : 'bg-white text-[#535864] hover:text-[#181b22] hover:bg-white/90 border border-[#C3C4CC] shadow-xs')
          : 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl ' +
            (isDarkMode
              ? 'bg-[#1e2533] text-amber-300 hover:text-amber-200 hover:bg-[#252e3f] border border-[#2d3648] shadow-xs'
              : 'bg-white text-[#535864] hover:text-[#181b22] hover:bg-[#fafafa] border border-[#C3C4CC] shadow-xs')
      } ${className}`}
      aria-label={isDarkMode ? 'التبديل إلى الوضع النهاري (Light Mode)' : 'التبديل إلى الوضع الليلي (Dark Mode)'}
      title={isDarkMode ? 'التبديل إلى الوضع النهاري' : 'التبديل إلى الوضع الليلي'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDarkMode ? (
            <motion.div
              key="sun-icon"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center text-amber-400"
            >
              <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </motion.div>
          ) : (
            <motion.div
              key="moon-icon"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center text-[#535864]"
            >
              <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs whitespace-nowrap">
          {isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي'}
        </span>
      )}
    </motion.button>
  );
}
