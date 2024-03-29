/**
 *
 * ? Local & Shared Imports
 */

import { LetsChat } from '@portfolio-components/LetsChat';
import { SEO } from '@portfolio-components/SEO';

export const HomePage = () => {
  return (
    <section className='flex h-full w-full flex-col justify-center gap-6 px-5  md:gap-8 md:px-12'>
      <SEO title='Isaiah Abiodun | Software Engineer' />
      <div className='flex flex-wrap items-center justify-start gap-x-6 gap-y-0 lg:w-[80%] xl:w-[75%]'>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl '>
          Creating interactive{' '}
          <span className='text-slate-400'>digital solutions</span>
        </h1>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl '>
          on <span className='text-slate-400'>web &amp; mobile</span>{' '}
          applications
        </h1>
        <h1 className='text-4xl font-normal leading-tight text-white md:text-6xl '>
          for cutting-edge businesses
        </h1>
      </div>
      <div className='flex w-full flex-wrap items-center justify-start md:w-3/5 lg:w-[40%]'>
        <h5 className='font-light text-white md:text-2xl'>
          Adeptness in{' '}
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
