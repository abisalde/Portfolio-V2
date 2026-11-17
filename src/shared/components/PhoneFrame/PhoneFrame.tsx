import { useState } from 'react';

import type { SnackApp } from '@/data/projects';

export function PhoneFrame({ app }: { app: SnackApp }) {
  const [running, setRunning] = useState(false);

  return (
    <figure className='h-150 w-75 shrink-0 overflow-hidden rounded-[2.875rem] border-10 border-black bg-phone-screen text-ink'>
      {running ? (
        <iframe
          title={`${app.title}, running in Expo Snack`}
          src={app.src}
          className='size-full'
        />
      ) : (
        <div className='flex h-full flex-col px-5 pb-6'>
          <div
            aria-hidden='true'
            className='flex items-center justify-between pt-3 text-[11px] font-semibold'
          >
            <span>9:41</span>
            <span className='h-6 w-20 rounded-full bg-black' />
            <span className='flex gap-0.5'>
              <span className='size-1 rounded-full bg-ink' />
              <span className='size-1 rounded-full bg-ink' />
              <span className='size-1 rounded-full bg-ink' />
            </span>
          </div>
          <p className='mt-10 text-[13px] font-semibold text-phone-muted'>
            Expo Snack
          </p>
          <p className='mt-1 text-[2rem] leading-tight font-extrabold tracking-tight text-balance'>
            {app.title}
          </p>
          <p className='mt-2.5 text-[15px] text-phone-text'>{app.summary}</p>
          <button
            type='button'
            onClick={() => setRunning(true)}
            className='mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-teal font-semibold text-white transition-colors hover:bg-ink focus-visible:outline-offset-4 motion-reduce:transition-none'
          >
            <span aria-hidden='true'>▶</span>
            Run {app.title}
          </button>
          <p className='mt-3 text-center text-xs text-phone-muted'>
            Loads from snack.expo.dev
          </p>
        </div>
      )}
    </figure>
  );
}
