/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VinChecker from './components/VinChecker';
import Categories from './components/Categories';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import OrderForm from './components/OrderForm';
import OrderTracker from './components/OrderTracker';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import DeploymentModal from './components/DeploymentModal';
import { PartCategoryId, QuoteRequest } from './types';
import { MessageCircle, Workflow, ChevronUp } from 'lucide-react';

export default function App() {
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  const [selectedVin, setSelectedVin] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<PartCategoryId>('brakes');
  const [latestOrder, setLatestOrder] = useState<QuoteRequest | null>(null);

  const handleUseVin = (vin: string, brand?: string) => {
    setSelectedVin(vin);
    if (brand) setSelectedBrand(brand);
    // Smooth scroll to order form
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (catId: PartCategoryId) => {
    setSelectedCategory(catId);
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBrand = (brandId: string) => {
    setSelectedBrand(brandId);
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderCreated = (order: QuoteRequest) => {
    setLatestOrder(order);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 flex flex-col selection:bg-red-700 selection:text-white relative">
      
      {/* Navbar */}
      <Navbar 
        onOpenDeploymentModal={() => setIsDeployModalOpen(true)}
        onOpenVinChecker={() => {
          const vinTool = document.getElementById('vin-tool');
          if (vinTool) vinTool.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onSelectBrand={handleSelectBrand} />
        <VinChecker onUseVin={handleUseVin} />
        <Categories onSelectCategory={handleSelectCategory} />
        <About />
        <Features />
        <Process />
        <OrderForm 
          initialVin={selectedVin}
          initialBrand={selectedBrand}
          initialCategory={selectedCategory}
          onOrderCreated={handleOrderCreated}
        />
        <OrderTracker latestOrder={latestOrder} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenDeploymentModal={() => setIsDeployModalOpen(true)} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Floating CI/CD deployment guide button */}
        <button
          onClick={() => setIsDeployModalOpen(true)}
          title="ربط GitHub و Netlify للنشر التلقائي"
          className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 text-emerald-400 hover:text-white hover:bg-neutral-800 shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        >
          <Workflow className="w-5 h-5" />
          <span className="absolute left-14 bg-neutral-900 text-neutral-200 border border-neutral-700 px-2.5 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            دليل رفع GitHub والنشر على Netlify
          </span>
        </button>

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%82%D8%B7%D8%B9%20%D8%BA%D9%8A%D8%A7%D8%B1%20%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A9"
          target="_blank"
          rel="noreferrer"
          title="تواصل مباشر عبر الواتساب"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/60 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      {/* GitHub & Netlify Continuous Deployment Hub Modal */}
      <DeploymentModal 
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />

    </div>
  );
}
