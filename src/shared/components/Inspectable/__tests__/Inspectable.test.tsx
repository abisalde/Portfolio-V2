import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { InspectProvider } from '@/hooks/InspectProvider';

import { InspectToggle } from '../../InspectToggle';
import { Inspectable } from '../Inspectable';

const renderInspectable = () =>
  render(
    <InspectProvider>
      <InspectToggle />
      <Inspectable element='h1' name='wordmark'>
        <h1>ABISALDE.</h1>
      </Inspectable>
    </InspectProvider>,
  );

describe('GIVEN the Inspectable component', () => {
  describe('WHEN inspecting is off', () => {
    test('THEN it is expected to show only its content', () => {
      renderInspectable();

      expect(
        screen.getByRole('heading', { name: 'ABISALDE.' }),
      ).toBeInTheDocument();
      expect(screen.queryByText('.wordmark')).not.toBeInTheDocument();
    });
  });

  describe('WHEN the person turns on Inspect layout', () => {
    test('THEN it is expected to label the element like dev tools do', async () => {
      renderInspectable();

      await userEvent.click(
        screen.getByRole('button', { name: 'Inspect layout' }),
      );

      expect(
        screen.getByRole('button', { name: 'Inspect layout' }),
      ).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByText('.wordmark')).toBeInTheDocument();
    });

    describe('AND turns it off again', () => {
      test('THEN it is expected to remove the label', async () => {
        renderInspectable();
        const toggle = screen.getByRole('button', { name: 'Inspect layout' });

        await userEvent.click(toggle);
        await userEvent.click(toggle);

        expect(screen.queryByText('.wordmark')).not.toBeInTheDocument();
      });
    });
  });
});
