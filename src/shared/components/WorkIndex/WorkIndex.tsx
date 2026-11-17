import { indexEntries } from '@/data/projects';

import { ExternalLink } from '../ExternalLink';

export function WorkIndex() {
  return (
    <div className='mt-24'>
      <h3 className='font-mono text-xs tracking-widest text-muted uppercase'>
        Index · more work
      </h3>
      <ol className='mt-4 border-t-2 border-ink'>
        {indexEntries.map((entry, index) => (
          <li
            key={entry.id}
            className='grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1 border-b border-line py-3 md:grid-cols-[3rem_1.2fr_1fr_8rem] md:items-baseline'
          >
            <span className='font-mono text-xs text-teal'>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className='text-lg font-semibold semi-condensed'>
              {entry.title}
            </span>
            <span className='col-start-2 text-muted md:col-start-auto'>
              {entry.note}
            </span>
            <span className='col-start-2 flex gap-5 md:col-start-auto md:justify-end'>
              {entry.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className='inline-flex min-h-11 items-center text-sm underline decoration-line underline-offset-4 hover:decoration-ink'
                >
                  {link.label} ↗<span className='sr-only'>, {entry.title}</span>
                </ExternalLink>
              ))}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
