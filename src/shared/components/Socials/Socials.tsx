import * as React from 'react';
import { BsTwitterX, BsInstagram } from 'react-icons/bs';
import { LuLinkedin } from 'react-icons/lu';
/**
 * ? Assets
 */

export const Socials: React.FC = () => {
  return (
    <div className='mx-auto mb-3 flex items-center justify-between gap-5 px-2 md:w-2/3 md:justify-center'>
      <a
        tabIndex={0}
        href='https://x.com/abisalde'
        rel='norefferer noopenner'
        target='_self'
        role='link'
        aria-hidden={true}
        aria-label='X (Twitter) Profile'
        aria-roledescription='Twitter Profile Page'
        className='grid h-9 w-9 cursor-pointer place-items-center rounded-full outline outline-2 outline-white transition-all duration-300 hover:bg-dark hover:outline-offset-2 hover:transition-all hover:duration-300 md:h-11 md:w-11'
      >
        <BsTwitterX fontSize={22} className='scale-100' />
      </a>
      <a
        tabIndex={0}
        href='https://instagram.com/abisalde'
        rel='norefferer noopenner'
        target='_self'
        role='link'
        aria-hidden={true}
        aria-label='Instagram Profile'
        aria-roledescription='Instagram Profile Page'
        className='instagram-gradient grid h-9 w-9 cursor-pointer place-items-center rounded-full outline outline-2 outline-white hover:outline-offset-2 hover:transition-all hover:duration-300 md:h-11 md:w-11'
      >
        <BsInstagram fontSize={22} className='scale-100' />
      </a>
      <a
        tabIndex={0}
        href='https://linkedin.com/in/abisalde'
        rel='norefferer noopenner'
        target='_self'
        className='grid h-9 w-9 cursor-pointer place-items-center rounded-full outline outline-2 outline-white hover:bg-[#0A66C2] hover:outline-offset-2 hover:transition-all hover:duration-300 md:h-11 md:w-11'
        role='link'
        aria-hidden={true}
        aria-label='LinkedIn Profile'
        aria-roledescription='LinkedIn Profile Page'
      >
        <LuLinkedin fontSize={22} className='scale-100' />
      </a>
    </div>
  );
};
