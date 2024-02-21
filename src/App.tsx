import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
/**
 * ? Local & Shared Import
 */
import { Layout } from '@portfolio-components/Layout';

import {
  AboutPage,
  HomePage,
  LetsChatPage,
  NotFoundPage,
  PortfolioPage,
} from '@pages';

import { ROUTE } from '@routes';
import { useWindowSize } from '@hooks';

import '@styles/global.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<NotFoundPage />}>
      <Route index element={<HomePage />} path={ROUTE.home_page} />
      <Route element={<AboutPage />} path={ROUTE.about_page} />
      <Route element={<PortfolioPage />} path={ROUTE.portfolio_page} />
      <Route element={<LetsChatPage />} path={ROUTE.lets_chat} />
    </Route>,
  ),
);

function App() {
  useWindowSize();
  return <RouterProvider router={router} />;
}

export default App;
