/**
 * Menu links shown in the navbar and footer, in display order.
 * To add a page: add its id to PageId (src/types), create it in
 * src/pages, register it in src/App.tsx, then list it here.
 */

import { PageId } from '../types';

export interface NavLink {
  id: PageId;
  label: string;
  /** Highlighted in red (the "request a quote" link). */
  highlight?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'categories', label: 'قطع الغيار' },
  { id: 'order', label: 'اطلب عرض سعر', highlight: true },
  { id: 'about', label: 'عن دويتش بلكس' },
  { id: 'process', label: 'طريقة الطلب' },
  { id: 'faq', label: 'الأسئلة الشائعة' },
];
