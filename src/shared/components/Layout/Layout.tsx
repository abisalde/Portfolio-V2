import { Outlet, useLocation } from 'react-router';

import { InspectProvider } from '@/hooks/InspectProvider';
import { useActiveSection } from '@/hooks/useActiveSection';
import { HOME_SECTIONS, ROUTE } from '@/routes';

import { Footer } from '../Footer';
import { GridOverlay } from '../GridOverlay';
import { Rail } from '../Rail';
import { TabBar } from '../TabBar';
import { Topline } from '../Topline';

const HOME_PATHS: readonly string[] = [
  ROUTE.home_page,
  ROUTE.about_page,
  ROUTE.portfolio_page,
];

export function Layout() {
  const { pathname } = useLocation();
  const activeSection = useActiveSection(HOME_SECTIONS);
  const activeId = HOME_PATHS.includes(pathname) ? activeSection : undefined;

  return (
    <InspectProvider>
      <a
        href='#main'
        className='sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4'
      >
        Skip to content
      </a>
      <Rail activeId={activeId} />
      <main
        id='main'
        className='pb-[calc(var(--spacing-tabbar)+env(safe-area-inset-bottom))] md:ml-rail md:pb-0'
      >
        <Topline />
        <Outlet />
        <Footer />
      </main>
      <TabBar activeId={activeId} />
      <GridOverlay />
    </InspectProvider>
  );
}
