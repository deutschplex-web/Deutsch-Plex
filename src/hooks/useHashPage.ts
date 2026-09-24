/**
 * Keeps the current page in sync with the URL hash (e.g. /#faq), so
 * direct links, page reloads and the browser back button all work.
 */

import { useCallback, useEffect, useState } from 'react';
import { PageId } from '../types';

const PAGES: PageId[] = ['home', 'categories', 'order', 'about', 'process', 'faq'];

function readPageFromHash(): PageId {
  const hash = window.location.hash.replace('#', '').trim();
  return PAGES.includes(hash as PageId) ? (hash as PageId) : 'home';
}

export function useHashPage() {
  const [currentPage, setCurrentPage] = useState<PageId>(readPageFromHash);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(readPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.location.hash = '#' + page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { currentPage, navigateTo };
}
