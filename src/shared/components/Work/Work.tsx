import { GITHUB_URL } from '@/data/profile';
import { featuredProjects } from '@/data/projects';

import { ExternalLink } from '../ExternalLink';
import { FeaturedProjectCard } from '../FeaturedProjectCard';
import { SectionHeading } from '../SectionHeading';
import { WorkIndex } from '../WorkIndex';

export function Work() {
  return (
    <section
      id='work'
      aria-labelledby='work-title'
      className='px-4 py-20 md:px-10 md:py-28'
    >
      <SectionHeading
        id='work-title'
        eyebrow='A few things I’ve built'
        title={
          <>
            Selected work<span className='text-teal'>.</span>
          </>
        }
        action={
          <ExternalLink
            href={GITHUB_URL}
            className='inline-flex min-h-11 items-center text-sm underline underline-offset-4'
          >
            More on GitHub ↗
          </ExternalLink>
        }
      />
      <div className='mt-14 grid gap-x-8 gap-y-20 lg:grid-cols-2'>
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
      <WorkIndex />
    </section>
  );
}
