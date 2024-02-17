/**
 *
 * ? Local & Shared Imports
 */
import { SEO } from '@portfolio-components/SEO';

export const AboutPage = () => {
  return (
    <section className='flex h-full flex-col'>
      <SEO pathname='about' title='About Me ::: Portfolio' />
      <div className='gradient-bg'>
        <h2>Welcome to About Page</h2>
      </div>
    </section>
  );
};
