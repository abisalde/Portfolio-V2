import * as React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * ? Local & Shared Imports
 */
import { BackgroundGradientText } from './BackgroundGradientText';
import { Header } from '@portfolio-components/Header';
import { Socials } from '@portfolio-components/Socials';

export const Layout: React.FC = () => {
  return (
    <div className='main-app visible relative flex h-full w-full  select-none flex-col bg-dark transition-all'>
      <BackgroundGradientText />
      <Header />
      <main className='h-full grow'>
        <Outlet />
      </main>
      <footer className='relative flex flex-col justify-center justify-self-end text-center text-white'>
        <Socials />
        <p className='text-center font-primary text-[14px] font-semibold text-white'>
          ©️ {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
