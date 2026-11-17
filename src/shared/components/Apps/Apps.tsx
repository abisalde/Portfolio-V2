import { mobileHighlights } from '@/data/profile';
import { snackApps } from '@/data/projects';

import { PhoneFrame } from '../PhoneFrame';
import { SectionHeading } from '../SectionHeading';

export function Apps() {
  return (
    <section
      id='apps'
      aria-labelledby='apps-title'
      className='bg-ink px-4 py-20 text-paper md:px-10 md:py-28'
    >
      <div className='grid gap-14 lg:grid-cols-12 lg:gap-5'>
        <div className='lg:col-span-5'>
          <SectionHeading
            id='apps-title'
            tone='ink'
            eyebrow='Apps on a phone'
            title={
              <>
                I build mobile apps,
                <br />
                <span className='text-on-ink-muted'>
                  so here are two running.
                </span>
              </>
            }
          />
          <p className='mt-6 max-w-md text-on-ink-muted'>
            Both run live in Expo Snack. Start one and tap around.
          </p>
          <h3 className='mt-12 font-mono text-xs text-on-ink-muted'>
            What I build on mobile
          </h3>
          <ul className='mt-3 border-t border-on-ink-line'>
            {mobileHighlights.map((highlight) => (
              <li key={highlight} className='border-b border-on-ink-line py-3'>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-wrap justify-center gap-8 lg:col-span-7'>
          {snackApps.map((app) => (
            <PhoneFrame key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
