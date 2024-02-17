import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * ? Local & Shared Imports
 */
import { useWindowSize } from '@hooks';

export const Header: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);

  const handleMobileMenu = () => setOpenMobileMenu((c) => !c);

  const { width } = useWindowSize();

  const options = {
    initial: { y: -100 },
    animate: { y: 0 },
  };

  return (
    <>
      <header className='sticky top-0 flex w-full items-center justify-between p-4 py-3 md:px-5 md:py-3 lg:px-6'>
        <Link to='/'>
          <div className='inline-flex items-center space-x-2'>
            <div className='flex h-5 w-5 items-center justify-center rounded-full bg-white md:h-8 md:w-8'>
              <div className='flex h-3.5 w-3.5 items-center justify-center rounded-full border border-black md:h-6 md:w-6'>
                <p className='text-center font-cyber-normal text-[10px] uppercase text-black md:text-base'>
                  a
                </p>
              </div>
            </div>
            <h4 className='font-cyber-outline text-xl font-extrabold text-white md:text-5xl lg:text-5xl'>
              abisalde
            </h4>
          </div>
        </Link>
        <nav role='navigation'>
          <MobileMenu onClick={handleMobileMenu} />
          <ul className='hidden items-center space-x-3 md:flex'>
            <li className='text-nowrap font-primary text-white'>
              <Link to='about' className='text-nowrap'>
                About Me
              </Link>
            </li>
            <li className='font-primary text-white'>
              <Link to='portfolio'>Portfolio</Link>
            </li>
            <button
              type='button'
              className='say-hello w-full max-w-40 cursor-pointer text-nowrap rounded-xl  border-0 border-solid px-5  py-1.5 text-2xl font-medium tracking-wider text-white outline outline-2 outline-offset-0  outline-white ring-0 hover:border-2 hover:border-solid hover:stroke-indigo-300 hover:outline-offset-[15px] hover:outline-dark'
            >
              Let's Chat
            </button>
          </ul>
        </nav>
        {openMobileMenu && typeof width === 'number' && width < 764 ? (
          <motion.nav
            initial={options.initial}
            animate={options.animate}
            transition={{
              ease: 'easeInOut',
              duration: 1,
            }}
            role='navigation'
            className='mobile-navigation menu absolute right-0 top-[80%] z-50 mx-auto mt-2 w-full p-4'
          >
            <ul className='flex h-full w-full flex-col items-center justify-center space-y-6 rounded-2xl bg-dark py-7'>
              <li
                className='font-primary text-lg text-white'
                role='button'
                onClick={handleMobileMenu}
              >
                <Link to='about'>About Me</Link>
              </li>
              <li
                className='font-primary text-lg text-white'
                role='button'
                onClick={handleMobileMenu}
              >
                <Link to='portfolio'>Portfolio</Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </header>
    </>
  );
};

interface MobileMenuProps {
  onClick: () => void;
}

const MobileMenu = ({ onClick }: MobileMenuProps) => {
  return (
    <div
      onClick={onClick}
      className='backdrop-saturate-500 flex h-11 w-11 items-center justify-center rounded-full bg-white/30 shadow-white backdrop-blur-sm md:hidden'
      role='button'
      aria-label='Click to open mobile menu'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-6 w-6 text-white'
      >
        <path
          fillRule='evenodd'
          d='M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
};
