import * as React from 'react';
import {Link} from 'react-router-dom';

export const Header: React.FC = () => {
	return (
		<header>
			<div>
				<Link to='/'>Home</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to='about'>About Me</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
