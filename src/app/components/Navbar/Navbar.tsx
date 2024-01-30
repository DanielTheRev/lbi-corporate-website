'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../Logo/Logo';
import { useState } from 'react';

const HomeRoutes = [
	{ label: 'Nuestros servicios', route: '/servicios' },
	{ label: 'Nuestros trabajos', route: '/nuestros-trabajos' },
	{ label: 'Contacto', route: '/contacto' }
];

interface Props {
	Routes?: (typeof HomeRoutes)[0][];
}

const Navbar: React.FC<Props> = ({ Routes }) => {
	const [showMenu, setShowMenu] = useState(false);
	const pathName = usePathname();
	return (
		<header
			className='flex w-full max-w-[1200px] mx-auto justify-center items-center overflow-x-hidden'
			id='navbar'>
			<nav className='w-full'>
				<div className='flex flex-wrap items-center justify-between mx-auto p-2 lg:p-4'>
					<Link
						href='/'
						className='flex items-center space-x-3 text-white rtl:space-x-reverse'>
						<div className='w-28'>
							<Logo />
						</div>
					</Link>
					<button
						type='button'
						onClick={() => setShowMenu((state) => !state)}
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
						<span className='sr-only'>Abrir menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
					<div
						className={`${
							showMenu ? 'block' : 'hidden'
						} w-full lg:block lg:w-auto animate-fade-left animate-duration-[500ms] lg:animate-none`}>
						<ul className='font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-transparent lg:dark:bg-transparent dark:border-gray-700'>
							<li>
								<Link
									href='/'
									className={`block ${
										pathName === '/' &&
										'bg-blue-700 lg:bg-transparent lg:dark:text-blue-500 dark:text-white'
									} py-2 px-3 text-white  rounded  lg:p-0 `}
									aria-current='page'>
									Home
								</Link>
							</li>
							{(Routes || HomeRoutes).map(({ label, route }) => (
								<li key={label}>
									<Link
										href={route}
										className={`block ${
											pathName.startsWith(route) &&
											'bg-blue-700 lg:bg-transparent lg:dark:text-blue-500'
										} py-2 px-3 text-gray-900 rounded hover:bg-gray-100  lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent`}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
