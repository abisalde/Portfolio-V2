import type { FeaturedProject } from '@/data/projects';

import { ExternalLink } from '../ExternalLink';
import { ProjectVisual } from '../ProjectVisual';

export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={project.wide ? 'lg:col-span-2' : undefined}
    >
      <ProjectVisual project={project} />
      <p className='mt-6 font-mono text-xs text-muted'>
        {project.title} · {project.category}
      </p>
      <h3
        id={titleId}
        className='mt-2 text-2xl font-semibold tracking-tight md:text-3xl'
      >
        {project.headline}
      </h3>
      <p className='mt-3 max-w-xl text-muted'>{project.summary}</p>
      <ul aria-label='Built with' className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <li
            key={tag}
            className='rounded-sm border border-line px-2 py-1 font-mono text-[11px]'
          >
            {tag}
          </li>
        ))}
      </ul>
      <ul className='mt-3 flex flex-wrap gap-x-6'>
        {project.links.map((link) => (
          <li key={link.href}>
            <ExternalLink
              href={link.href}
              className='inline-flex min-h-11 items-center font-semibold underline decoration-line underline-offset-4 hover:decoration-ink'
            >
              {link.label} ↗<span className='sr-only'>, {project.title}</span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
