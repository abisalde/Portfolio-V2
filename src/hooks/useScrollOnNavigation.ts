import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

const scrollPositions = new Map<string, number>();

export function useScrollOnNavigation() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const rememberPosition = () => scrollPositions.set(key, window.scrollY);
    window.addEventListener('scroll', rememberPosition, { passive: true });
    return () => window.removeEventListener('scroll', rememberPosition);
  }, [key]);

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      const saved = scrollPositions.get(key);
      if (saved !== undefined) {
        window.scrollTo({ top: saved, behavior: 'instant' });
      }
      return;
    }
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [key, hash, navigationType]);
}
