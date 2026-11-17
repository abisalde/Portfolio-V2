import { navigation } from '@/data/navigation';
import { GITHUB_URL, socials } from '@/data/profile';

import { ExternalLink } from '../ExternalLink';
import { InspectToggle } from '../InspectToggle';
import { BrandMark } from '../BrandMark';

const railLinks = navigation.filter((item) => item.railLabel !== null);
const linkedIn = socials.find((social) => social.name === 'LinkedIn');

export function Rail({ activeId }: { activeId?: string }) {
  return (
    <aside className='fixed inset-y-0 left-0 z-30 hidden w-rail flex-col border-r border-line bg-paper px-6 py-8 md:flex'>
      <a href='/#top' className='flex items-start gap-3'>
        <span className='-mt-0.5'>
          <BrandMark />
        </span>
        <span className='leading-tight font-semibold'>
          Isaiah
          <br />
          Abiodun
          <span className='mt-2 block font-mono text-[11px] font-normal text-muted'>
            Software engineer
          </span>
        </span>
      </a>

      <nav aria-label='Main' className='mt-14'>
        <ul className='border-t border-line'>
          {railLinks.map((item) => (
            <li key={item.id} className='border-b border-line'>
              <a
                href={`/#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className='flex min-h-11 items-center justify-between text-sm text-muted hover:text-ink aria-[current]:font-semibold aria-[current]:text-ink'
              >
                {item.railLabel}
                <span aria-hidden='true'>{item.arrow}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='mt-8'>
        <InspectToggle />
      </div>

      <div className='mt-auto text-sm'>
        <p className='text-muted'>
          Thoughtful interfaces.
          <br />
          Solid engineering.
        </p>
        <ExternalLink
          href={GITHUB_URL}
          className='mt-4 flex min-h-11 items-center'
        >
          GitHub ↗
        </ExternalLink>
        {linkedIn && (
          <ExternalLink
            href={linkedIn.href}
            className='flex min-h-11 items-center'
          >
            LinkedIn ↗
          </ExternalLink>
        )}
        <p className='mt-6 max-w-32 font-mono text-[11px] text-muted'>
          An independent corner of the internet.
        </p>
      </div>
    </aside>
  );
}
