import type { ReactNode } from 'react';

import { Inspectable } from '../Inspectable';

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  tone?: 'paper' | 'ink';
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  action,
  tone = 'paper',
}: SectionHeadingProps) {
  const eyebrowColor = tone === 'ink' ? 'text-on-ink-muted' : 'text-muted';

  return (
    <div className='flex flex-wrap items-end justify-between gap-4'>
      <div>
        <p className={`font-mono text-xs ${eyebrowColor}`}>{eyebrow}</p>
        <Inspectable element='h2' name='section-title' className='mt-3 w-fit'>
          <h2
            id={id}
            className='text-4xl leading-[1.02] font-semibold tracking-tight semi-condensed md:text-6xl'
          >
            {title}
          </h2>
        </Inspectable>
      </div>
      {action}
    </div>
  );
}
