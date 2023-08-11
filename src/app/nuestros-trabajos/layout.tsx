import { Metadata } from 'next';
import NuestrosTrabajosNavbar from './components/NuestrosTrabajosNavbar';

export const metadata: Metadata = {
	title: 'Nuestros Trabajos'
};

const fetchSections = async () => {
	const res = await fetch('https://dosmetal.com.ar/api/dosmetal-page/projects/getSections', {
		next: {
			revalidate: 60000
		}
	});
	console.log('fetching secctions');
	const data = await res.json();
	const routes = data.reverse().map((route: any) => ({
		_id: route._id,
		label: route.section,
		route: `/${route.section.split(' ').join('-')}`
	}));
	return routes;
};

const NuestrosTrabajosLayout = async ({ children }: any) => {
	const routes = await fetchSections();
	return (
		<section className='flex flex-col w-full min-h-full justify-center text-black scroll-smooth'>
			<NuestrosTrabajosNavbar Routes={routes} />
			{/* <div className='flex h-full'></div> */}
			{children}
		</section>
	);
};
export default NuestrosTrabajosLayout;
