import { useInspect } from '@/hooks/inspect-context';

export function InspectToggle({
  label = 'Inspect layout',
}: {
  label?: string;
}) {
  const { inspecting, toggleInspecting } = useInspect();

  return (
    <button
      type='button'
      aria-pressed={inspecting}
      onClick={toggleInspecting}
      className='flex min-h-11 items-center gap-3 text-sm'
    >
      <span
        aria-hidden='true'
        className={`relative h-5 w-9 rounded-full border transition-colors ${
          inspecting
            ? 'border-inspect bg-inspect'
            : 'border-muted bg-transparent'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 size-3.5 rounded-full transition-transform motion-reduce:transition-none ${
            inspecting ? 'translate-x-4 bg-white' : 'translate-x-0 bg-muted'
          }`}
        />
      </span>
      {label}
    </button>
  );
}
