import * as React from 'react';
import {Outlet} from 'react-router-dom';

/**
 * ? Local & Shared Imports
 */
import {Header} from '@portfolio-components/Header';

export const Layout: React.FC = () => {
	return (
		<div className='main-app grid visible transition-all bg-cover bg-no-repeat select-none h-full'>
			<Header />
			<main className='relative'>
				<Outlet />
			</main>
			<footer className='flex items-end justify-center'>
				©️ {new Date().getFullYear()}
			</footer>
		</div>
	);
};
