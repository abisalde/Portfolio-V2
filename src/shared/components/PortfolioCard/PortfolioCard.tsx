import { BiLogoGithub } from 'react-icons/bi';
import { TbWorldWww } from 'react-icons/tb';
import { Link } from 'react-router-dom';

/**
 * ? Local & Shared Imports
 */

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  techList: string;
  githubLink: string;
  liveLink: string;
}

export const PortfolioCard = ({
  description,
  githubLink,
  liveLink,
  image,
  techList,
  title,
}: PortfolioCardProps) => {
  return (
    <div className='flex transform-none flex-col rounded-xl shadow-neu3 hover:shadow-neu2 focus:shadow-neu2 md:flex-row'>
      <div className='opacity-1 h-62 flex w-full justify-center overflow-hidden rounded-t-xl hover:overflow-hidden md:rounded-t-none  lg:h-96 lg:w-3/4 lg:rounded-l-xl'>
        <img
          loading='lazy'
          src={image}
          alt='Project Name'
          className='project-image block h-full w-full max-w-none overflow-hidden object-cover object-center hover:scale-105'
        />
      </div>
      <div className='flex flex-col justify-center space-y-4 p-5'>
        <h3 className='text-xl font-bold text-white md:text-2xl'>{title}</h3>
        <p className='text-base font-thin text-white'>{description}</p>
        <p className='font-medium uppercase text-slate-400'>{techList}</p>
        <p className='inline-flex space-x-3'>
          <Link to={githubLink} rel='norefferer noopenner'>
            <BiLogoGithub className='text-slate-400' size={35} />
            <small className='text-xs font-medium text-white'>GitHub</small>
          </Link>
          <Link to={liveLink} rel='norefferer noopenner'>
            <TbWorldWww className='text-slate-400' size={35} />
            <small className='text-xs font-medium text-white'>Preview</small>
          </Link>
        </p>
      </div>
    </div>
  );
};
