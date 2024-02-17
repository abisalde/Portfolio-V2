/**
 *
 * ? Local & Shared Imports
 */
import { SEO } from '@portfolio-components/SEO';

export const PortfolioPage = () => {
  return (
    <section className='flex h-full flex-col'>
      <SEO pathname='portfolio' title='My Work ::: Portfolio' />
      <div className='gradient-bg'>
        <h2>Welcome to Portfolio</h2>
      </div>
    </section>
  );
};
