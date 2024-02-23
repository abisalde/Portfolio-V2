import * as React from 'react';

/**
 * ? Local & Shared Imports
 */
import { CalendlySchedule } from '@portfolio-components/CalendlySchedule';
import { LoadingAnimation } from '@portfolio-components/LoadingAnimation';

export const ContactPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timeOutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <section className='relative flex h-full w-full flex-col'>
      {isLoading ? (
        <div className='flex h-full w-full items-center justify-center'>
          <LoadingAnimation variants='large' />
        </div>
      ) : (
        <CalendlySchedule />
      )}
    </section>
  );
};
