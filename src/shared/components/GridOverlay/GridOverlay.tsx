import { useInspect } from '@/hooks/inspect-context';

const COLUMNS = Array.from({ length: 12 }, (_, index) => index);

export function GridOverlay() {
  const { inspecting } = useInspect();
  if (!inspecting) return null;

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed inset-y-0 right-0 left-0 z-40 grid grid-cols-4 gap-4 px-4 md:left-rail md:grid-cols-12 md:gap-5 md:px-10'
    >
      {COLUMNS.map((column) => (
        <span
          key={column}
          className='border-x border-inspect/30 bg-inspect/5 max-md:nth-[n+5]:hidden'
        />
      ))}
    </div>
  );
}
