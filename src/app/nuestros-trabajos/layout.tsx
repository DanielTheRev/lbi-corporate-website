import { Metadata } from 'next';
import NuestrosTrabajosNavbar from './components/NuestrosTrabajosNavbar';
import Navbar from '../components/Navbar/Navbar';

export const metadata: Metadata = {
	title: 'Nuestros Trabajos'
};

const fetchSections = async (): Promise<{ label: string; route: string }[]> => {
	const res = await fetch(`${process.env.SERVER_URL}/projects/getSections`, {
		next: {
			revalidate: 60000
		}
	});

	const data = await res.json();
	const routes = data.reverse().map((route: any) => ({
		label: route.section,
		route: `/nuestros-trabajos/${route.section.split(' ').join('-')}`
	}));
	return routes;
};

const NuestrosTrabajosLayout = async ({ children }: any) => {
	const routes = await fetchSections();
	return (
		<section className='flex flex-col w-full min-h-full text-black scroll-smooth overflow-x-hidden'>
			{/* <NuestrosTrabajosNavbar Routes={routes} /> */}
			<Navbar Routes={routes} />
			{children}
		</section>
	);
};
export default NuestrosTrabajosLayout;
