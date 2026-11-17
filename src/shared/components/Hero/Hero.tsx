import { Link } from 'react-router';

import { ROUTE } from '@/routes';

import { Inspectable } from '../Inspectable';
import { MotionStudy } from '../MotionStudy';

const COLUMNS = Array.from({ length: 12 }, (_, index) => index);
const SPECIALTIES = [
  'React Native & Expo',
  'React & TypeScript',
  'Go & GraphQL',
];

export function Hero() {
  return (
    <section
      id='top'
      aria-labelledby='hero-title'
      className='@container relative overflow-hidden bg-ink text-paper'
    >
      <div
        aria-hidden='true'
        className='absolute inset-0 grid grid-cols-4 gap-4 px-4 md:grid-cols-12 md:gap-5 md:px-10'
      >
        {COLUMNS.map((column) => (
          <span
            key={column}
            className='border-x border-on-ink-line/50 max-md:nth-[n+5]:hidden'
          />
        ))}
      </div>

      <div className='relative px-4 pt-10 pb-14 md:px-10 md:pt-14 md:pb-20'>
        <p className='flex items-center gap-3 text-sm text-on-ink-muted'>
          <img
            src='/image/isaiah-abiodun@abisalde56x56.webp'
            width={36}
            height={36}
            alt=''
            className='size-9 rounded-full'
          />
          Hey, I&rsquo;m Isaiah.
        </p>

        <Inspectable element='h1' name='wordmark' className='mt-16 w-fit'>
          <h1
            id='hero-title'
            className='text-[clamp(4rem,22cqw,22rem)] leading-[0.8] font-black whitespace-nowrap condensed'
          >
            <span aria-hidden='true'>
              ABISALDE<span className='text-mint'>.</span>
            </span>
            <span className='sr-only'>Isaiah Abiodun, software engineer</span>
          </h1>
        </Inspectable>

        <div className='mt-14 grid gap-12 lg:grid-cols-12 lg:gap-5'>
          <div className='lg:col-span-7'>
            <Inspectable element='p' name='lead' className='w-fit'>
              <p className='text-[clamp(2.5rem,6cqw,4.75rem)] leading-[1.02] font-semibold tracking-tight semi-condensed'>
                Built to work.
                <br />
                Made to{' '}
                <em className='font-serif font-normal text-mint italic'>
                  feel.
                </em>
              </p>
            </Inspectable>
            <p className='mt-6 max-w-md text-lg/relaxed text-on-ink-muted'>
              I build mobile and web apps, and the Go services behind them,
              right down to the last interaction.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href='#work'
                className='inline-flex min-h-13 items-center gap-8 rounded-sm bg-mint px-5 font-semibold text-ink hover:bg-mint-bright'
              >
                Explore my work <span aria-hidden='true'>↘</span>
              </a>
              <Link
                to={ROUTE.lets_chat}
                className='inline-flex min-h-13 items-center gap-8 rounded-sm border border-on-ink-line px-5 font-semibold hover:border-paper'
              >
                Book a call <span aria-hidden='true'>↗</span>
              </Link>
            </div>
            <ul className='mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-on-ink-muted'>
              {SPECIALTIES.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-5'>
            <MotionStudy />
          </div>
        </div>
      </div>
    </section>
  );
}
