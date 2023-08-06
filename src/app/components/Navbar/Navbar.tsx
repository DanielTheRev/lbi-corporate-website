'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Routes = [
	{ label: 'Inicio', route: '/' },
	{ label: 'Trabajos', route: '/nuestros-trabajos' },
	{ label: 'Contactanos', route: '/contacto' }
];

function Navbar() {
	const pathName = usePathname();

	return (
		<header className='flex w-full justify-center items-center p-4' id='navbar'>
			<nav className='flex w-3/4 justify-between items-center'>
				<div className='w-40 h-10 relative object-cover'>
					<Image src={'https://dosmetal.com.ar/assets/logomaira.svg'} alt='logo' fill />
				</div>
				<ul className='flex gap-2'>
					{Routes.map(({ label, route }) => (
						<li
							key={label}
							className={`${
								route === pathName ? 'text-white' : 'text-gray-500'
							} cursor-default`}>
							<Link href={route} className='p-2'>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
export default Navbar;
