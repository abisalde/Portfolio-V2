import { HomePage, NotFoundPage } from '@/pages';
import { Layout } from '@/shared/components/Layout';

import { ROUTE } from '.';
import { loadPageOrReload } from './loadPageOrReload';

export const routes = [
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: ROUTE.home_page, element: <HomePage /> },
      { path: ROUTE.portfolio_page, element: <HomePage section='work' /> },
      { path: ROUTE.about_page, element: <HomePage section='about' /> },
      {
        path: ROUTE.lets_chat,
        lazy: async () => {
          const { LetsChatPage } = await loadPageOrReload(
            ROUTE.lets_chat,
            () => import('@/pages/LetsChat'),
          );
          return { Component: LetsChatPage };
        },
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
