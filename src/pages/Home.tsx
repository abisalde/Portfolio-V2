/**
 *
 * ? Local & Shared Imports
 */

import { SEO } from '@portfolio-components/SEO';

export const HomePage = () => {
  return (
    <section className='px-24md:px-12 relative flex h-full w-full flex-col justify-center gap-10'>
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

        <div className='mt-5 md:mt-12'>
          <div className='inline-flex items-center space-x-4'>
            <img
              width='60'
              height='60'
              src='image/isaiah-abiodun@abisalde.jpg'
              alt='Isaiah Abiodun ::: Thumbnail Portfolio'
              className='border-w h-14 w-14 rounded-full border-white'
            />
            <button
              type='button'
              className='say-hello w-full max-w-40 cursor-pointer text-nowrap rounded-xl  border-0 border-solid px-5  py-1.5 text-2xl font-medium tracking-wider text-white outline outline-2 outline-offset-0  outline-white ring-0 hover:border-2 hover:border-solid hover:stroke-indigo-300 hover:outline-offset-[15px] hover:outline-dark'
            >
              Let's Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
