import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { snackApps } from '@/data/projects';

import { PhoneFrame } from '../PhoneFrame';

const [app] = snackApps;

describe('GIVEN the PhoneFrame component', () => {
  describe('WHEN it is mounted', () => {
    test('THEN it is expected not to load the Snack yet', () => {
      render(<PhoneFrame app={app} />);

      expect(
        screen.queryByTitle(`${app.title}, running in Expo Snack`),
      ).not.toBeInTheDocument();
    });
  });

  describe('WHEN the person runs the app', () => {
    test('THEN it is expected to load the Snack inside the phone', async () => {
      render(<PhoneFrame app={app} />);

      await userEvent.click(
        screen.getByRole('button', { name: `Run ${app.title}` }),
      );

      expect(
        screen.getByTitle(`${app.title}, running in Expo Snack`),
      ).toHaveAttribute('src', app.src);
    });
  });
});
