import { afterEach, describe, expect, test } from 'vitest';

import { loadPageOrReload } from '../loadPageOrReload';

const RELOADED_AFTER_DEPLOY = 'reloaded-after-deploy';

afterEach(() => sessionStorage.clear());

describe('GIVEN loadPageOrReload', () => {
  describe('WHEN the page code loads', () => {
    test('THEN it is expected to return the page and clear the reload mark', async () => {
      sessionStorage.setItem(RELOADED_AFTER_DEPLOY, 'true');

      await expect(
        loadPageOrReload('/lets-chat', async () => 'page'),
      ).resolves.toBe('page');
      expect(sessionStorage.getItem(RELOADED_AFTER_DEPLOY)).toBeNull();
    });
  });

  describe('WHEN the page code fails after a reload already happened', () => {
    test('THEN it is expected to pass the error on instead of reloading again', async () => {
      sessionStorage.setItem(RELOADED_AFTER_DEPLOY, 'true');
      const failure = new Error('chunk missing');

      await expect(
        loadPageOrReload('/lets-chat', () => Promise.reject(failure)),
      ).rejects.toBe(failure);
    });
  });
});
