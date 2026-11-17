import { socials } from '@/data/profile';

import { ExternalLink } from '../ExternalLink';
import { SectionHeading } from '../SectionHeading';
import { StylesPanel } from '../StylesPanel';

const linkedIn = socials.find((social) => social.name === 'LinkedIn');

export function About() {
  return (
    <section
      id='about'
      aria-labelledby='about-title'
      className='border-t border-line px-4 py-20 md:px-10 md:py-28'
    >
      <div className='grid gap-14 lg:grid-cols-12 lg:gap-5'>
        <div className='lg:col-span-7 lg:pr-10'>
          <SectionHeading
            id='about-title'
            eyebrow='The person behind the pixels'
            title={
              <>
                Curious by nature.
                <br />
                <em className='font-serif font-normal text-teal italic'>
                  Engineer by craft.
                </em>
              </>
            }
          />
          <div className='mt-8 max-w-xl space-y-5 text-lg/relaxed text-muted'>
            <p className='text-xl text-ink'>
              I&rsquo;m Isaiah Abiodun, a software engineer. I started on the
              front end and now build whole products: the React Native app, the
              web front end, and the Go services, GraphQL gateway and database
              behind them.
            </p>
            <p>
              I like the space where design decisions become working software:
              translating a layout, connecting the right data, and making an
              interaction feel natural.
            </p>
            <p>
              <span className='block font-mono text-xs'>What I care about</span>
              Readable code. Accessible interfaces. Small details that make a
              difference.
            </p>
          </div>
          {linkedIn && (
            <ExternalLink
              href={linkedIn.href}
              className='mt-6 inline-flex min-h-11 items-center text-sm underline underline-offset-4'
            >
              Find me on LinkedIn ↗
            </ExternalLink>
          )}
        </div>
        <div className='lg:col-span-5'>
          <StylesPanel />
        </div>
      </div>
    </section>
  );
}
