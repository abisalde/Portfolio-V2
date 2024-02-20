/**
 *
 * ? Local & Shared Imports
 */

import { LetsChat } from '@portfolio-components/LetsChat';
import { SEO } from '@portfolio-components/SEO';

export const HomePage = () => {
  return (
    <section className='flex h-full w-full flex-col justify-center gap-6 px-5  md:gap-10 md:px-12'>
      <SEO title='Isaiah Abiodun | Frontend Engineer' />
      <div className='flex flex-wrap items-center justify-start gap-x-6 gap-y-0 lg:w-[90%]'>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl'>
          Creating interactive{' '}
          <span className='text-slate-400'>digital solutions</span>
        </h1>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl'>
          on <span className='text-slate-400'>web &amp; mobile</span>{' '}
          applications
        </h1>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl lg:text-7xl'>
          for cutting-edge businesses
        </h1>
      </div>
      <div className='flex w-full flex-wrap items-center justify-start md:w-3/5 lg:w-[40%]'>
        <h5 className='font-light text-white md:text-2xl'>
          Adeptness about{' '}
          <span className='text-slate-400'>front-end development</span>,
          crafting compelling user experience based on{' '}
          <span className='text-slate-400'>
            design elements &amp; philosophy
          </span>{' '}
          for your <span className='text-slate-400'>digital products </span>in
          driving growth<span className='text-slate-400'> &amp;</span>{' '}
          increasing engagement
        </h5>

        <div className='relative mt-5 md:mt-12'>
          <LetsChat displayImage={true} />
        </div>
      </div>
    </section>
  );
};
