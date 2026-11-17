import { useRef, type ReactNode } from 'react';

import { useInspect } from '@/hooks/inspect-context';
import { useElementSize } from '@/hooks/useElementSize';

type InspectableProps = {
  element: string;
  name: string;
  children: ReactNode;
  className?: string;
};

export function Inspectable({
  element,
  name,
  children,
  className = '',
}: InspectableProps) {
  const { inspecting } = useInspect();
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(ref, inspecting);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {inspecting && (
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
        >
          <span className='absolute -inset-4 bg-box-margin/35' />
          <span className='absolute -inset-2 bg-box-padding/45' />
          <span className='absolute inset-0 bg-box-content/40 outline outline-inspect' />
          <span className='absolute -top-12 left-0 z-20 flex gap-3 bg-devtools px-2.5 py-1.5 font-mono text-xs whitespace-nowrap text-white'>
            <span className='text-devtools-tag'>{element}</span>
            <span className='text-devtools-class'>.{name}</span>
            <span className='text-devtools-size'>
              {width} × {height}
            </span>
          </span>
        </div>
      )}
      <div className='relative'>{children}</div>
    </div>
  );
}
