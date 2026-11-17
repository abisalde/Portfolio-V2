import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { reducedMotion } from '@/test/setup';

import { MotionStudy } from '../MotionStudy';

describe('GIVEN the MotionStudy component', () => {
  describe('WHEN it is mounted', () => {
    test('THEN it is expected to select the spring style', () => {
      render(<MotionStudy />);

      expect(screen.getByRole('button', { name: 'Spring' })).toHaveAttribute(
        'aria-pressed',
        'true',
      );
      expect(screen.getByRole('button', { name: 'Glide' })).toHaveAttribute(
        'aria-pressed',
        'false',
      );
    });
  });

  describe('WHEN the person picks the snap style', () => {
    test('THEN it is expected to mark snap as pressed and describe it', async () => {
      render(<MotionStudy />);

      await userEvent.click(screen.getByRole('button', { name: 'Snap' }));

      expect(screen.getByRole('button', { name: 'Snap' })).toHaveAttribute(
        'aria-pressed',
        'true',
      );
      expect(
        screen.getByText('A clear response. Right when you need it.'),
      ).toBeInTheDocument();
    });

    test('THEN it is expected to play the animation once', async () => {
      render(<MotionStudy />);

      await userEvent.click(screen.getByRole('button', { name: 'Snap' }));

      expect(Element.prototype.animate).toHaveBeenCalledTimes(1);
    });

    describe('AND reduced motion is on', () => {
      test('THEN it is expected to stay still and say why', async () => {
        reducedMotion.matches = true;
        render(<MotionStudy />);

        await userEvent.click(screen.getByRole('button', { name: 'Snap' }));

        expect(Element.prototype.animate).not.toHaveBeenCalled();
        expect(
          screen.getByText('Snap: reduced motion is on, so it stays still.'),
        ).toBeInTheDocument();
      });
    });
  });
});
