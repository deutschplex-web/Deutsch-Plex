/**
 * Fade/slide animation used when switching between pages.
 */

import { type ReactNode } from 'react';
import { motion } from 'motion/react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
