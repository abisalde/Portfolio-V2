import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * ? Local & Shared Imports
 */
import { LetsChat } from '@portfolio-components/LetsChat';

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
        <Link
          to='/'
          role='link'
          aria-label='Isaiah Abiodun | Software Engineer'
        >
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
          <ul className='hidden items-center md:flex md:space-x-3 lg:space-x-5'>
            <li
              role='listitem'
              className='relative text-nowrap pb-2 font-primary text-white transition-all before:absolute before:bottom-0 before:right-0 before:h-1 before:w-0 before:bg-slate-400 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full hover:before:bg-purple-500'
            >
              <Link
                to='about'
                className='text-nowrap text-lg'
                role='link'
                aria-label='About Me | Isaiah Abiodun'
              >
                About Me
              </Link>
            </li>
            <li
              role='listitem'
              className='relative text-nowrap pb-2 font-primary text-white transition-all before:absolute before:bottom-0 before:right-0 before:h-1 before:w-0 before:bg-slate-400 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full hover:before:bg-purple-500'
            >
              <Link
                to='portfolio'
                className='text-lg'
                role='link'
                aria-label='Portfolio | Isaiah Abiodun'
              >
                Portfolio
              </Link>
            </li>
            <LetsChat />
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
            tabIndex={-1}
            className='mobile-navigation menu fixed inset-0 right-0 top-[5%]  mx-auto mt-2 w-full p-4'
          >
            <div
              aria-hidden='true'
              className='fixed inset-0 cursor-text bg-opacity-75 blur-3xl transition-opacity'
              onClick={handleMobileMenu}
            ></div>
            <motion.ul
              className='relative  z-50 flex h-40 w-full flex-col items-center justify-center space-y-6 rounded-2xl bg-dark py-7'
              style={{ zIndex: 1000 }}
              variants={variantsUl}
              role='list'
            >
              <motion.li
                className='font-primary text-lg text-white'
                role='listitem'
                onClick={handleMobileMenu}
                variants={variantsLi}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='about'>About Me</Link>
              </motion.li>
              <motion.li
                className='font-primary text-lg text-white'
                role='listitem'
                onClick={handleMobileMenu}
                variants={variantsLi}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to='portfolio'>Portfolio</Link>
              </motion.li>
            </motion.ul>
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
    <button
      onClick={onClick}
      className='backdrop-saturate-500 flex h-11 w-11 items-center justify-center rounded-full bg-white/30 shadow-white backdrop-blur-sm md:hidden'
      role='button'
      aria-label='Click to open mobile menu'
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-6 w-6 text-white'
      >
        <motion.path
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          fillRule='evenodd'
          d='M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z'
          clipRule='evenodd'
        />
      </motion.svg>
    </button>
  );
};

const variantsUl = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
