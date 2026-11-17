import { describe, expect, test } from 'vitest';

import redirects from '../../../public/_redirects?raw';
import { ROUTE } from '..';

const rules = redirects
  .split('\n')
  .filter(Boolean)
  .map((line) => line.trim().split(/\s+/));

const statusFor = (path: string) =>
  rules.find(([from]) => from === path)?.[2];

describe('GIVEN the Netlify redirect rules', () => {
  describe.each(
    Object.values(ROUTE).filter((path) => path !== ROUTE.home_page),
  )('WHEN the app route %s is requested', (path) => {
    test('THEN it is expected to serve the app with status 200', () => {
      expect(statusFor(path)).toBe('200');
    });
  });

  describe('WHEN any other path is requested', () => {
    test('THEN it is expected to serve the app with status 404', () => {
      expect(rules.at(-1)).toEqual(['/*', '/index.html', '404']);
    });
  });

  describe('WHEN a missing build asset is requested', () => {
    test('THEN it is expected to answer 404 before the catch-all', () => {
      expect(rules[0]).toEqual(['/assets/*', '/index.html', '404']);
    });
  });
});
