import React, { useState } from 'react';
import DMDLogo from '../assets/images/png/DMD-Logo.png';
import navbarData from '../navbarData';
import { Link } from 'react-router-dom';

function Navbar() {
	const [menuItems] = useState(navbarData);

	return (
		<>
			<div className='fixed top-0 bg-black shadow-md px-4 py-2 z-10 w-full'>
				<div className='container flex items-center mx-auto justify-between'>
					<div className='w-1/12 py-4'>
						<Link to='/'>
							<img src={DMDLogo} alt='DMD Logo' className='invert'/>
						</Link>
					</div>

					<nav className='font-medium text-md'>
						<ul className='flex items-center'>
							{menuItems.map((item, index) => (
								<li key={index} className='p-4 cursor-pointer active uppercase text-white/80'>
									<Link to={item.link}>{item.text}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default Navbar;
