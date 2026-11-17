import type { FeaturedProject } from '@/data/projects';

export function ProjectVisual({ project }: { project: FeaturedProject }) {
  const { visual } = project;

  if (visual.kind === 'screenshot') {
    return (
      <figure className='overflow-hidden rounded-sm border border-line bg-surface'>
        <div
          aria-hidden='true'
          className='flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] text-muted'
        >
          <span className='tracking-[3px]'>●●●</span>
          <span>{visual.address}</span>
          <span>↗</span>
        </div>
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading='lazy'
          decoding='async'
          className='block aspect-2/1 w-full object-cover object-left-top'
        />
      </figure>
    );
  }

  return (
    <figure className='overflow-hidden rounded-sm border border-line bg-surface font-mono text-sm'>
      <div className='flex border-b border-line text-xs'>
        <span className='border-b-2 border-inspect px-4 py-2.5'>Layers</span>
        <span className='px-4 py-2.5 text-muted'>{project.title}</span>
      </div>
      <ol className='p-3'>
        {visual.layers.map((layer) => (
          <li
            key={layer.name}
            className='flex flex-wrap items-baseline gap-x-3 rounded-sm px-3 py-3 first:bg-inspect-soft'
          >
            <span aria-hidden='true' className='text-inspect'>
              ▸
            </span>
            <span className='font-medium'>{layer.name}</span>
            <span className='text-muted'>{layer.detail}</span>
          </li>
        ))}
      </ol>
      <figcaption className='sr-only'>
        How {project.title} is put together
      </figcaption>
    </figure>
  );
}
