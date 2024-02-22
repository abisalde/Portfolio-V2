import * as React from 'react';
import {
  useCalendlyEventListener,
  InlineWidget,
  type EventScheduledEvent,
} from 'react-calendly';
import { useNavigate } from 'react-router-dom';

/**
 * ? Local & Shared Imports
 */

export const CalendlySchedule: React.FC = () => {
  const navigate = useNavigate();

  const refreshPage = React.useCallback(
    (e: EventScheduledEvent) => {
      const { event } = e.data.payload;

      if (typeof event !== 'undefined' && event.uri.length > 0) {
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
    },

    [navigate],
  );

  useCalendlyEventListener({
    // onProfilePageViewed: () => console.log('onProfilePageViewed'),
    // onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
    // onEventTypeViewed: () => {},
    onEventScheduled: refreshPage,
  });

  return (
    <InlineWidget
      iframeTitle='Isaiah Abiodun Calendly Schedule Page'
      url='https://calendly.com/abisalde/30min'
      pageSettings={{
        backgroundColor: '141414',
        textColor: 'fff',
      }}
      styles={{
        height: 'inherit',
      }}
    />
  );
};
