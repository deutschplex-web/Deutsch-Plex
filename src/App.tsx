/**
 * App shell: navbar, the active page, footer and WhatsApp button.
 *
 * Each page lives in its own folder under src/pages/.
 * The current page comes from the URL hash (see src/hooks/useHashPage.ts).
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { useHashPage } from './hooks/useHashPage';
import { CarBrandId, PartCategoryId } from './types';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';
import WhatsAppButton from './components/layout/WhatsAppButton';

import HomePage from './pages/home/HomePage';
import CategoriesPage from './pages/categories/CategoriesPage';
import OrderPage from './pages/order/OrderPage';
import AboutPage from './pages/about/AboutPage';
import ProcessPage from './pages/process/ProcessPage';
import FaqPage from './pages/faq/FaqPage';

function Site() {
  const { currentPage, subPath, navigateTo } = useHashPage();

  // Pre-fill the order form when a visitor picks a brand or category elsewhere.
  const [selectedBrand, setSelectedBrand] = useState<CarBrandId>();
  const [selectedCategory, setSelectedCategory] = useState<PartCategoryId>();

  const orderForBrand = (brandId: CarBrandId) => {
    setSelectedBrand(brandId);
    navigateTo('order');
  };

  const orderForCategory = (categoryId: PartCategoryId) => {
    setSelectedCategory(categoryId);
    navigateTo('order');
  };

  return (
    <div className="min-h-screen bg-[#eff1f5] text-[#535864] flex flex-col selection:bg-[#535864] selection:text-white relative font-sans">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageTransition key={currentPage}>
            {currentPage === 'home' && (
              <HomePage onNavigate={navigateTo} onSelectBrand={orderForBrand} />
            )}
            {currentPage === 'categories' && (
              <CategoriesPage
                onNavigate={navigateTo}
                categoryPath={subPath}
                onOrderCategory={orderForCategory}
              />
            )}
            {currentPage === 'order' && (
              <OrderPage
                onNavigate={navigateTo}
                initialBrand={selectedBrand}
                initialCategory={selectedCategory}
              />
            )}
            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {currentPage === 'process' && <ProcessPage onNavigate={navigateTo} />}
            {currentPage === 'faq' && <FaqPage onNavigate={navigateTo} />}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  );
}
