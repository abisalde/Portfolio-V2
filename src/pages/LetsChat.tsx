import { InlineWidget } from 'react-calendly';

import { CALENDLY_URL } from '@/data/profile';
import { ExternalLink } from '@/shared/components/ExternalLink';

export function LetsChatPage() {
  return (
    <section
      aria-labelledby='chat-title'
      className='px-4 py-12 md:px-10 md:py-16'
    >
      <title>Let&apos;s chat | Isaiah Abiodun</title>
      <link rel='canonical' href='https://abisalde.dev/lets-chat' />
      <p className='font-mono text-xs text-muted'>30 minutes, on Calendly</p>
      <h1
        id='chat-title'
        className='mt-3 font-serif text-5xl leading-none md:text-7xl'
      >
        Pick a time that <em className='text-teal italic'>works.</em>
      </h1>
      <p className='mt-5 max-w-md text-muted'>
        Prefer a full page?{' '}
        <ExternalLink
          href={CALENDLY_URL}
          className='text-ink underline underline-offset-4'
        >
          Open Calendly
        </ExternalLink>
      </p>
      <div className='mt-10 overflow-hidden rounded-sm border border-line bg-surface'>
        <InlineWidget
          url={CALENDLY_URL}
          iframeTitle='Book a 30-minute call with Isaiah Abiodun'
          pageSettings={{
            backgroundColor: 'ffffff',
            primaryColor: '0b7a66',
            textColor: '141414',
          }}
          styles={{ height: '760px' }}
        />
      </div>
    </section>
  );
}
