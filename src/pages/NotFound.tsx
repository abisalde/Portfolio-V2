/**
 *
 * ? Local & Shared Imports
 */
import { Layout } from '@portfolio-components/Layout';
import { SEO } from '@portfolio-components/SEO';

export const NotFoundPage = () => {
  return (
    <Layout>
      <SEO pathname='*' title='404 ::: Isaiah Abiodun | Portfolio' />
      <div className='flex h-full w-full flex-col items-center justify-center px-4'>
        <h2 className='font-display text-[5rem] text-slate-400 md:text-[15rem] lg:text-[25rem]'>
          4 0 4
        </h2>
        <p className='font-secondary text-5xl text-slate-400 md:text-[6rem] lg:text-[8rem]'>
          Oh dear. Are you lost?
        </p>
      </div>
    </Layout>
  );
};
