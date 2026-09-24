/**
 * Home page: brand showcase hero + cards linking to the other pages.
 */

import { CarBrandId, PageId } from '../../types';
import Hero from './Hero';
import SectionsHub from './SectionsHub';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectBrand: (brandId: CarBrandId) => void;
}

export default function HomePage({ onNavigate, onSelectBrand }: HomePageProps) {
  return (
    <>
      <Hero onSelectBrand={onSelectBrand} />
      <SectionsHub onNavigate={onNavigate} />
    </>
  );
}
