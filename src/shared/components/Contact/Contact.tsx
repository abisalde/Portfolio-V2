import { Link } from 'react-router';

import { socials } from '@/data/profile';
import { ROUTE } from '@/routes';

import { ExternalLink } from '../ExternalLink';
import { Icon } from '../Icon';

export function Contact() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-title'
      className='bg-ink text-paper'
    >
      <div className='px-4 pt-20 md:px-10 md:pt-28'>
        <div className='flex flex-wrap justify-between gap-2 font-mono text-xs text-on-ink-muted'>
          <span>Have something in mind?</span>
          <span>Let&rsquo;s make it happen. ↘</span>
        </div>
        <h2
          id='contact-title'
          className='mt-10 max-w-5xl text-[clamp(2.75rem,6vw,6rem)] leading-[0.98] font-semibold tracking-tight semi-condensed'
        >
          Good things start with a{' '}
          <em className='font-serif font-normal text-mint italic'>
            conversation.
          </em>
        </h2>
        <p className='mt-6 max-w-md text-on-ink-muted'>
          A project, a question, or just a hello.
        </p>
        <ul className='mt-12 flex flex-wrap gap-x-8 border-t border-on-ink-line pt-4'>
          {socials.map((social) => (
            <li key={social.name}>
              <ExternalLink
                href={social.href}
                className='inline-flex min-h-11 items-center gap-2 hover:text-mint'
              >
                <Icon name={social.icon} className='size-4' />
                {social.name}
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <Link
        to={ROUTE.lets_chat}
        className='mt-16 flex min-h-22 flex-wrap items-center justify-between gap-x-6 gap-y-1 bg-mint px-4 py-5 text-ink hover:bg-mint-bright md:px-10'
      >
        <span className='text-4xl font-extrabold condensed md:text-5xl'>
          BOOK 30 MINUTES
        </span>
        <span className='font-medium'>Pick a time on Calendly →</span>
      </Link>
    </section>
  );
}
