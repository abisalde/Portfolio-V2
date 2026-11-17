import { render, screen } from '@testing-library/react';
import { createMemoryRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { describe, expect, test, vi } from 'vitest';

import { routes } from '../routes';

const renderAt = (path: string) =>
  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: [path] })}
    />,
  );

describe('GIVEN the site routes', () => {
  describe('WHEN the home page opens', () => {
    test('THEN it is expected to show the wordmark heading', () => {
      renderAt('/');

      expect(
        screen.getByRole('heading', {
          level: 1,
          name: 'Isaiah Abiodun, software engineer',
        }),
      ).toBeInTheDocument();
    });
  });

  describe.each([
    ['/portfolio', 'work'],
    ['/about', 'about'],
  ])('WHEN the old %s address opens', (path, sectionId) => {
    test('THEN it is expected to scroll to the matching section', () => {
      renderAt(path);

      expect(
        vi.mocked(Element.prototype.scrollIntoView).mock.contexts,
      ).toContain(document.getElementById(sectionId));
    });
  });

  describe('WHEN an unknown address opens', () => {
    test('THEN it is expected to show the not found page', () => {
      renderAt('/nowhere');

      expect(
        screen.getByRole('heading', { name: 'Oh dear. Are you lost?' }),
      ).toBeInTheDocument();
    });
  });
});
