import { Metadata } from 'next';
import { HomeBannerType } from '../HomePage/models/service.model';
import ServiceItem from './components/service-item';
import Navbar from '../components/Navbar/Navbar';

export const metadata: Metadata = {
	title: 'Nuestros Trabajos'
};

const FetchServices = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/homeBanner/getHomeBanners`, {
		next: {
			revalidate: 60000
		}
	});
	const data = await res.json();
	return data as HomeBannerType[];
};
const NuestrosServicios = async () => {
	const service_data = await FetchServices();

	return (
		<>
			<Navbar />
			<section
				id='services'
				className='relative flex flex-col w-full min-h-screen  text-white/70 gap-3 p-1'>
				<header className='flex flex-col gap-3 items-center p-5 snap-center '>
					<h1 className='text-3xl text-balance text-center md:text-4xl  text-blue-700'>
						Nuestros servicios de construcción
					</h1>
				</header>
				{service_data.map((service) => (
					<ServiceItem key={service._id} service={service} />
				))}
			</section>
		</>
	);
};
export default NuestrosServicios;
