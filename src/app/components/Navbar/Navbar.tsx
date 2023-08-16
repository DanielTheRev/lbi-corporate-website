'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Routes = [
	// { label: 'Inicio', route: '/' },
	{ label: 'Trabajos', route: '/nuestros-trabajos/Montajes-Industriales' },
	{ label: 'Contactanos', route: '#footer' }
];

function Navbar() {
	const pathName = usePathname();
	return (
		<header className='flex w-full justify-center items-center p-4 max-[400px]:p-2' id='navbar'>
			<nav className='flex w-4/5 max-[400px]:w-full p-2 max-[400px]:p-0 justify-between items-center'>
				<Link href={'/'} className='w-40 h-10 relative object-cover'>
					{/* <Image src={'https://dosmetal.com.ar/assets/logomaira.svg'} alt='logo' fill /> */}
					<Image src={'/logo.jpg'} alt='logo' width={1920} height={1080}  className='w-full h-full object-contain'/>
				</Link>
				<ul className='flex gap-2'>
					{Routes.map(({ label, route }) => (
						<li
							key={label}
							className={`${
								pathName.includes(route.split('/')[1]) ? 'text-white' : 'text-gray-500'
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
