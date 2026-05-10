import * as React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * ? Local & Shared Imports
 */
import { BackgroundGradientText } from './BackgroundGradientText';
import { Header } from '@portfolio-components/Header';
import { Socials } from '@portfolio-components/Socials';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='main-app bg-dark visible relative flex h-full w-full flex-col transition-all select-none'>
      <BackgroundGradientText />
      <Header />
      <main className='h-full grow'>
        {children}
        <Outlet />
      </main>
      <footer className='relative flex flex-col justify-center justify-self-end text-center text-white'>
        <Socials />
        <p className='font-primary text-center text-[14px] font-semibold text-white'>
          ©️ {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};
