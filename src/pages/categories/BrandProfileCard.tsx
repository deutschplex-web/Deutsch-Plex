/**
 * The full profile of one parts brand, shown after the customer clicks its
 * logo: about, why this brand, parts we sell, compatible cars, important tip.
 * Data lives in src/data/brandProfiles.ts.
 */

import { Info, X } from 'lucide-react';
import { BrandProfile } from '../../types';
import BrandLogo from './BrandLogo';
import { PART_BRAND_LOGOS } from '../../data/partBrandLogos';
import CountryFlag, { COUNTRY_LABEL } from './CountryFlag';

interface BrandProfileCardProps {
  brand: BrandProfile;
  onClose: () => void;
}

export default function BrandProfileCard({ brand, onClose }: BrandProfileCardProps) {
  const hasLogo = Boolean(PART_BRAND_LOGOS[brand.name]);
  return (
    <article className="bg-white rounded-[20px] border border-[#C3C4CC]/60 shadow-md p-5 sm:p-7">
      <header className="flex items-center gap-4 pb-4 mb-5 border-b-2 border-[#ba1823]/80">
        {hasLogo && (
          <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-[12px] bg-[#fdfdfd] border border-[#C3C4CC]/60 flex items-center justify-center shrink-0">
            <BrandLogo name={brand.name} imageClass="max-h-10 sm:max-h-12 max-w-[82%]" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 dir="ltr" className="text-right text-xl sm:text-2xl font-extrabold text-[#181b22] tracking-tight font-sans">
            {brand.name}
          </h3>
          <span className="mt-1 inline-flex items-center gap-2 text-xs font-bold text-[#535864]">
            <CountryFlag country={brand.country} />
            علامة {COUNTRY_LABEL[brand.country]}
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="إغلاق"
          className="w-9 h-9 rounded-full border border-[#C3C4CC] flex items-center justify-center text-[#535864] hover:text-[#ba1823] hover:border-[#ba1823] transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Two balanced columns on large screens */}
      <div className="lg:columns-2 gap-10 [&>*]:break-inside-avoid [&>*]:mb-5">
        {brand.sections.map((section) =>
          section.highlight ? (
            <div
              key={section.title}
              className="rounded-[12px] bg-[#faf7f2] border border-[#ded5cb] border-r-4 border-r-[#b88655] p-4"
            >
              <h4 className="flex items-center gap-1.5 text-sm font-extrabold text-[#181b22] mb-1.5">
                <Info className="w-4 h-4 text-[#b88655]" />
                {section.title}
              </h4>
              <SectionBody text={section.text} items={section.items} />
            </div>
          ) : (
            <div key={section.title}>
              <h4 className="text-sm font-extrabold text-[#ba1823] mb-1">{section.title}</h4>
              <SectionBody text={section.text} items={section.items} />
            </div>
          ),
        )}
      </div>
    </article>
  );
}

function SectionBody({ text, items }: { text?: string[]; items?: string[] }) {
  return (
    <>
      {text?.map((paragraph) => (
        <p key={paragraph} className="text-sm text-[#535864] leading-7">
          {paragraph}
        </p>
      ))}
      {items && (
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-[#535864] leading-7">
              <span className="mt-[11px] w-1.5 h-1.5 rounded-full bg-[#ba1823] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
