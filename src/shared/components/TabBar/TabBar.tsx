import { navigation } from '@/data/navigation';

import { Icon } from '../Icon';

export function TabBar({ activeId }: { activeId?: string }) {
  return (
    <nav
      aria-label='Sections'
      className='fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden'
    >
      <ul className='grid h-tabbar grid-cols-5'>
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={`/#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
              className='flex h-full flex-col items-center justify-center gap-1 text-[11px] font-semibold text-muted aria-[current]:text-teal'
            >
              <Icon name={item.icon} className='size-5.5' />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
