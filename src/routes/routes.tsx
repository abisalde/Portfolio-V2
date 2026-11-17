import { HomePage, NotFoundPage } from '@/pages';
import { Layout } from '@/shared/components/Layout';

import { ROUTE } from '.';

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
        lazy: async () => ({
          Component: (await import('@/pages/LetsChat')).LetsChatPage,
        }),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
