/**
 * Small flag for a parts brand's home country, plus its Arabic label.
 */

import { BrandProfile } from '../../types';

export const COUNTRY_LABEL: Record<BrandProfile['country'], string> = {
  germany: 'ألمانية',
  italy: 'إيطالية',
};

export default function CountryFlag({ country }: { country: BrandProfile['country'] }) {
  // Germany: horizontal black/red/gold. Italy: vertical green/white/red (left to right).
  const stripes =
    country === 'germany'
      ? ['#111111', '#dd0000', '#ffce00']
      : ['#009246', '#ffffff', '#ce2b37'];
  return (
    <span
      aria-hidden="true"
      dir="ltr"
      className={`inline-flex w-4 h-3 rounded-[2px] overflow-hidden ring-1 ring-black/10 shrink-0 ${country === 'italy' ? 'flex-row' : 'flex-col'}`}
    >
      {stripes.map((color) => (
        <span key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}
