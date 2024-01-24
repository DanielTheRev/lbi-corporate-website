'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../Logo/Logo';

const Routes = [
	{ label: 'Nuestros servicios', route: '/servicios' },
	{ label: 'Nuestros trabajos', route: '/nuestros-trabajos' },
	{ label: 'Contactanos', route: '#footer' }
];

export default function Navbar() {
	const pathName = usePathname();
	return (
		<header
			className='flex w-full justify-center items-center px-2 py-1 max-[400px]:p-2 z-10 overflow-x-hidden'
			id='navbar'>
			<nav className='flex w-4/5 max-[400px]:w-full p-2 max-[400px]:p-0 justify-between items-center'>
				<Link href={'/'} className='relative object-cover w-40 text-neutral-300'>
					<Logo />
				</Link>
				<ul className='flex gap-2'>
					<li
						className={` transition-all ${
							pathName === '/' ? 'text-white' : 'text-white/70'
						} cursor-default`}>
						<Link href={'/'}>Inicio</Link>
					</li>
					{Routes.map(({ label, route }) => {
						return (
							<li
								key={label}
								className={` transition-all ${
									pathName.startsWith(route) ? 'text-white' : 'text-white/70'
								} cursor-default`}>
								<Link href={route} className='p-2'>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
