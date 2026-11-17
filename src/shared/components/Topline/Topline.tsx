import { Link } from 'react-router';

import { ROUTE } from '@/routes';

import { InspectToggle } from '../InspectToggle';
import { BrandMark } from '../BrandMark';

export function Topline() {
  return (
    <header className='flex min-h-16 items-center justify-between gap-4 border-b border-line px-4 md:min-h-20 md:px-10'>
      <a
        href='/#top'
        className='flex min-h-11 items-center gap-3 font-semibold md:hidden'
      >
        <BrandMark />
        abisalde
      </a>
      <p className='hidden text-sm text-muted md:block'>
        Web, mobile &amp; the details between.
      </p>
      <div className='md:hidden'>
        <InspectToggle label='Inspect' />
      </div>
      <Link
        to={ROUTE.lets_chat}
        className='hidden min-h-11 items-center gap-2 text-sm font-semibold md:inline-flex'
      >
        Let&rsquo;s talk <span aria-hidden='true'>↗</span>
      </Link>
    </header>
  );
}
