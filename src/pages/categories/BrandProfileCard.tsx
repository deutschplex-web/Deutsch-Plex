/**
 * One parts brand inside a category: name, country and its profile sections
 * (about, why this brand, parts we sell, compatible cars, important tip).
 * Data lives in src/data/brandProfiles.ts.
 */

import { Info } from 'lucide-react';
import { BrandProfile } from '../../types';

const COUNTRY_LABEL: Record<BrandProfile['country'], string> = {
  germany: 'ألمانية',
  italy: 'إيطالية',
};

function Flag({ country }: { country: BrandProfile['country'] }) {
  const stripes =
    country === 'germany'
      ? ['#111111', '#dd0000', '#ffce00']
      : ['#009246', '#ffffff', '#ce2b37'];
  const vertical = country === 'italy';
  return (
    <span
      aria-hidden="true"
      className={`inline-flex w-4 h-3 rounded-[2px] overflow-hidden ring-1 ring-black/10 ${vertical ? 'flex-row-reverse' : 'flex-col'}`}
    >
      {stripes.map((color) => (
        <span key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

export default function BrandProfileCard({ brand }: { brand: BrandProfile }) {
  return (
    <article
      id={`brand-${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="scroll-mt-28 bg-white rounded-[16px] border border-[#C3C4CC]/60 shadow-sm p-5 sm:p-6"
    >
      <header className="flex items-center justify-between gap-3 pb-3 mb-4 border-b-2 border-[#ba1823]/80">
        <h3 dir="ltr" className="text-xl sm:text-2xl font-extrabold text-[#181b22] tracking-tight font-sans">
          {brand.name}
        </h3>
        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#eff1f5] border border-[#C3C4CC]/60 text-[11px] font-bold text-[#535864]">
          <Flag country={brand.country} />
          {COUNTRY_LABEL[brand.country]}
        </span>
      </header>

      <div className="space-y-4">
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
