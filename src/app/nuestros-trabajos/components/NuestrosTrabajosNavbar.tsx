'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
	Routes: {
		_id: string;
		label: string;
		route: string;
	}[];
};

const NuestrosTrabajosNavbar = ({ Routes }: Props) => {
	const pathName = usePathname();
	return (
		<nav className='flex w-full bg-teal-900'>
			<ul className='flex w-full justify-center gap-3 p-3 max-[400px]:text-xs'>
				{Routes.map(({ label, route }, i) => (
					<li
						key={i}
						className={`${
							pathName.includes(route.split('/')[1]) ? 'text-white' : 'text-gray-500'
						} cursor-default`}>
						<Link href={'/nuestros-trabajos' + route}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default NuestrosTrabajosNavbar;
