import { act, render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { routes } from '@/routes/routes';

const observedIds: string[][] = [];

class RecordingObserver {
  ids: string[] = [];
  constructor() {
    observedIds.push(this.ids);
  }
  observe(element: Element) {
    this.ids.push(element.id);
  }
  unobserve() {}
  disconnect() {}
}

afterEach(() => {
  observedIds.length = 0;
  vi.unstubAllGlobals();
});

describe('GIVEN useActiveSection inside the site layout', () => {
  describe('WHEN the visitor leaves the home page and comes back', () => {
    test('THEN it is expected to watch the home sections again', async () => {
      vi.stubGlobal('IntersectionObserver', RecordingObserver);
      const router = createMemoryRouter(routes, { initialEntries: ['/'] });
      render(<RouterProvider router={router} />);

      await act(() => router.navigate('/lets-chat'));
      await screen.findByRole('heading', { name: /Pick a time/ });
      observedIds.length = 0;

      await act(() => router.navigate(-1));

      expect(observedIds.at(-1)).toEqual(
        expect.arrayContaining(['work', 'about', 'contact']),
      );
    });
  });
});
