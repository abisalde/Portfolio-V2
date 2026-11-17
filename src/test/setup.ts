import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

class SilentObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', SilentObserver);
vi.stubGlobal('IntersectionObserver', SilentObserver);

export const reducedMotion = { matches: false };

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: reducedMotion.matches,
  media: query,
  addEventListener: () => {},
  removeEventListener: () => {},
}));

Element.prototype.animate = vi.fn(
  () => ({ cancel: vi.fn() }) as unknown as Animation,
);
Element.prototype.scrollIntoView = vi.fn();

afterEach(() => {
  cleanup();
  reducedMotion.matches = false;
  vi.clearAllMocks();
});
