/**
 * Keeps the current page in sync with the URL hash (e.g. /#faq), so
 * direct links, page reloads and the browser back button all work.
 *
 * A page can have one sub-path after a slash, e.g. /#categories/brakes
 * opens the brakes section of the categories page.
 */

import { useCallback, useEffect, useState } from 'react';
import { PageId } from '../types';

const PAGES: PageId[] = ['home', 'categories', 'order', 'about', 'process', 'faq'];

interface Route {
  page: PageId;
  /** The part after the slash, if any (e.g. "brakes"). */
  subPath?: string;
}

function readRouteFromHash(): Route {
  const [page, subPath] = window.location.hash.replace('#', '').trim().split('/');
  if (!PAGES.includes(page as PageId)) return { page: 'home' };
  return { page: page as PageId, subPath: subPath || undefined };
}

export function useHashPage() {
  const [route, setRoute] = useState<Route>(readRouteFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(readRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = useCallback((page: PageId, subPath?: string) => {
    setRoute({ page, subPath });
    window.location.hash = '#' + page + (subPath ? '/' + subPath : '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { currentPage: route.page, subPath: route.subPath, navigateTo };
}
