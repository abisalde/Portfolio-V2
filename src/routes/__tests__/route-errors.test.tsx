import { render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { routes } from '../routes';

vi.mock('@/pages/LetsChat', () => {
  throw new Error('chunk missing');
});

afterEach(() => sessionStorage.clear());

describe('GIVEN the site routes', () => {
  describe('WHEN the Let’s chat page code still fails after a reload', () => {
    test('THEN it is expected to show the error page, not the 404 page', async () => {
      sessionStorage.setItem('reloaded-after-deploy', 'true');

      render(
        <RouterProvider
          router={createMemoryRouter(routes, {
            initialEntries: ['/lets-chat'],
          })}
        />,
      );

      expect(
        await screen.findByRole('heading', { name: 'Something went wrong.' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Reload the page' }),
      ).toBeInTheDocument();
      expect(screen.queryByText('Oh dear. Are you lost?')).not.toBeInTheDocument();
    });
  });
});
