/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeNavigationHub from './components/HomeNavigationHub';
import PageHeader from './components/PageHeader';
import Categories from './components/Categories';
import About from './components/About';
import Process from './components/Process';
import OrderForm from './components/OrderForm';
import OrderTracker from './components/OrderTracker';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { PageId, PartCategoryId, QuoteRequest } from './types';
import { MessageCircle } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { isDarkMode } = useTheme();
  const [selectedVin, setSelectedVin] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<PartCategoryId>('brakes');
  const [latestOrder, setLatestOrder] = useState<QuoteRequest | null>(null);

  // Read URL Hash to support direct links, reload and browser back/forward buttons
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages: PageId[] = [
      'home', 
      'categories', 
      'order', 
      'tracker', 
      'about', 
      'features', 
      'process', 
      'faq'
    ];
    if (validPages.includes(hash as PageId)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = '#' + page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUseVin = (vin: string, brand?: string) => {
    setSelectedVin(vin);
    if (brand) setSelectedBrand(brand);
    navigateTo('order');
  };

  const handleSelectCategory = (catId: PartCategoryId) => {
    setSelectedCategory(catId);
    navigateTo('order');
  };

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrand(brandId);
    navigateTo('order');
  };

  const handleOrderCreated = (order: QuoteRequest) => {
    setLatestOrder(order);
  };

  return (
    <div className="min-h-screen bg-[#eff1f5] text-[#535864] flex flex-col selection:bg-[#535864] selection:text-white relative font-sans">
      
      {/* Navbar with Multi-Page Navigation and active indicators */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* Main Content Area Rendering the Active Page */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="page-home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              {/* Showcase & Hero for Porsche, BMW, Audi, Mercedes */}
              <Hero 
                onSelectBrand={handleSelectBrand} 
                onSearchVin={handleUseVin}
                onNavigate={navigateTo}
              />

              {/* Specialized Services Portals */}
              <HomeNavigationHub onNavigate={navigateTo} />
            </motion.div>
          )}

          {currentPage === 'categories' && (
            <motion.div
              key="page-categories"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="categories"
                titleAr="كتالوج قطع الغيار الألمانية المعتمدة"
                subtitleAr="تصفح كافة أنظمة السيارات الألمانية الرئيسية مع إمكانية اختيار أي قسم وطلب تسعيرته فوراً مع الشحن الجوي المباشر."
                badgeAr="أكثر من 15,000 قطعة OEM"
                onNavigate={navigateTo}
              />
              <Categories onSelectCategory={handleSelectCategory} />
            </motion.div>
          )}

          {currentPage === 'order' && (
            <motion.div
              key="page-order"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="order"
                titleAr="اطلب عرض سعر معتمد"
                subtitleAr="املأ تفاصيل سيارتك أو رقم الهيكل لاستخراج أفضل تسعيرة مباشرة من مستودعات ألمانيا مع خيارات الشحن الجوي السريع."
                badgeAr="تسعير مباشر بدون وسطاء"
                onNavigate={navigateTo}
              />
              <OrderForm 
                initialVin={selectedVin}
                initialBrand={selectedBrand}
                initialCategory={selectedCategory}
                onOrderCreated={handleOrderCreated}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}

          {currentPage === 'tracker' && (
            <motion.div
              key="page-tracker"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="tracker"
                titleAr="تتبع الطلب"
                subtitleAr="تابع مراحل معالجة وتجهيز طلبك لدى دويتش بلكس. يتم شحن الطلبات عبر شركات الشحن الدولية المعتمدة ونزودك برقم بوليصة التتبع لمتابعة الشحنة مباشرة عبر موقع شركة الشحن."
                badgeAr="متابعة حالة الطلب وتفاصيل بوليصة الشحن"
                onNavigate={navigateTo}
              />
              <OrderTracker latestOrder={latestOrder} />
            </motion.div>
          )}

          {(currentPage === 'about' || currentPage === 'features') && (
            <motion.div
              key="page-about"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="about"
                titleAr="عن دويتش بلكس"
                subtitleAr="تعرف على دويتش بلكس: استيراد مباشر من ألمانيا، مطابقة رقم الهيكل VIN بدقة 100%، وضمان معتمد لمدة 24 شهر مع توفير حتى 45%."
                badgeAr="الجودة الألمانية والضمان المعتمد"
                onNavigate={navigateTo}
              />
              <About />
            </motion.div>
          )}

          {currentPage === 'process' && (
            <motion.div
              key="page-process"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="process"
                titleAr="رحلة الطلب وخطوات التنفيذ"
                subtitleAr="أربع خطوات واضحة وموثقة تضمن لك استلام القطعة المطابقة لمواصفات سيارتك بأعلى سرعة وأقل تكلفة."
                badgeAr="4 خطوات بسيطة ومباشرة"
                onNavigate={navigateTo}
              />
              <Process />
            </motion.div>
          )}

          {currentPage === 'faq' && (
            <motion.div
              key="page-faq"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            >
              <PageHeader
                pageId="faq"
                titleAr="مركز الأسئلة الشائعة والدعم الفني"
                subtitleAr="إجابات شاملة ومفصلة حول آلية الشحن، الجمارك، طرق الدفع المعتمدة، وسياسات الضمان والاستبدال."
                badgeAr="دعم فني واستشارات متخصصة"
                onNavigate={navigateTo}
              />
              <FaqSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer with onNavigate page links */}
      <Footer 
        onNavigate={navigateTo}
      />

      {/* Floating Action Button (WhatsApp) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/966536152188?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%20%D8%BA%D9%8A%D8%A7%D8%B1%20%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9"
          target="_blank"
          rel="noreferrer"
          title="تواصل مباشر عبر الواتساب: +966 53 615 2188"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
