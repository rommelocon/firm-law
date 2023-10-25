import React, { useState } from 'react';
import DMDLogo from '../assets/images/png/DMD-Logo.png';
import navbarData from '../navbarData';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
	const [menuItems] = useState(navbarData);

	return (
		<>
			{/* follow me on twitter @asad_codes */}
			<div className='relative flex flex-wrap place-items-center h-screen'>
				<div className='absolute top-0 mx-auto z-50 bg-gray-900 w-full'>
					{/* navbar */}
					<nav className='container mx-auto flex justify-between text-white'>
						<div className='px-5 xl:px-12 py-6 flex items-center'>
							<Link to='/'>
								<img src={DMDLogo} alt='DMD Logo' className='invert w-2/12' />
							</Link>
							{/* Nav Links */}
							<ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
								{menuItems.map((item, index) => (
									<li key={index} className='hover:text-gray-200'>
										<Link to={item.link}>{item.text}</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Responsive navbar */}
						<a className='navbar-burger self-center mr-12 xl:hidden' href='#'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 hover:text-gray-200'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</a>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Navbar;
