'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../Logo/Logo';

const Routes = [
	{ label: 'Inicio', route: '/' },
	{ label: 'Nuestros servicios', route: '/servicios' },
	{ label: 'Nuestros trabajos', route: '/nuestros-trabajos/Montajes-Industriales' },
	{ label: 'Contactanos', route: '#footer' }
];

export default function Navbar() {
	const pathName = usePathname();
	return (
		<header
			className='flex w-full justify-center items-center px-2 py-1 max-[400px]:p-2 z-10'
			id='navbar'>
			<nav className='flex w-4/5 max-[400px]:w-full p-2 max-[400px]:p-0 justify-between items-center'>
				<Link href={'/'} className='relative object-cover w-40 text-neutral-300'>
					{/* <Image src={'/logo.svg'} alt='logo' fill priority className='text-neutral-500'/> */}
					<Logo />
				</Link>
				<ul className='flex gap-2'>
					{Routes.map(({ label, route }) => (
						<li
							key={label}
							className={` transition-all ${
								pathName === route ? 'text-white' : 'text-white/70'
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
