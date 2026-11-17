import { useEffect } from 'react';

import { About } from '@/shared/components/About';
import { Apps } from '@/shared/components/Apps';
import { Contact } from '@/shared/components/Contact';
import { Hero } from '@/shared/components/Hero';
import { Work } from '@/shared/components/Work';

export function HomePage({ section }: { section?: 'work' | 'about' }) {
  useEffect(() => {
    if (section) document.getElementById(section)?.scrollIntoView();
  }, [section]);

  return (
    <>
      <title>Isaiah Abiodun | Software Engineer</title>
      <link rel='canonical' href='https://abisalde.dev/' />
      <Hero />
      <Work />
      <Apps />
      <About />
      <Contact />
    </>
  );
}
