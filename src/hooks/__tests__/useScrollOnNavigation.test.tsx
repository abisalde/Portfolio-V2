import { act, render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { describe, expect, test } from 'vitest';

import { routes } from '@/routes/routes';

const scrollWindowTo = (top: number) => {
  Object.defineProperty(window, 'scrollY', { value: top, configurable: true });
  window.dispatchEvent(new Event('scroll'));
};

const renderSite = async () => {
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
  scrollWindowTo(1200);
  await act(() => router.navigate('/lets-chat'));
  await screen.findByRole('heading', { name: /Pick a time/ });
  return router;
};

describe('GIVEN useScrollOnNavigation inside the site layout', () => {
  describe('WHEN the visitor opens another page', () => {
    test('THEN it is expected to jump to the top without animating', async () => {
      await renderSite();

      expect(window.scrollTo).toHaveBeenLastCalledWith({
        top: 0,
        behavior: 'instant',
      });
    });

    describe('AND goes back', () => {
      test('THEN it is expected to restore the earlier position', async () => {
        const router = await renderSite();

        await act(() => router.navigate(-1));

        expect(window.scrollTo).toHaveBeenLastCalledWith({
          top: 1200,
          behavior: 'instant',
        });
      });
    });
  });
});
