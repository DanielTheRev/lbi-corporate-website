import { Metadata } from 'next';
import { HomeBannerType } from '../sections/models/service.model';
import ServiceItem from './components/service-item';

export const metadata: Metadata = {
	title: 'Nuestros Trabajos'
};

const FetchServices = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/homeBanner/getHomeBanners`);
	const data = await res.json();
	return data as HomeBannerType[];
};
const NuestrosServicios = async () => {
	const service_data = await FetchServices();

	return (
		<section
			id='services'
			className='relative flex flex-col w-full min-h-screen snap-y snap-mandatory  text-white/70 gap-3 animate-fade-down animate-duration-[1000ms]'>
			<header className='flex flex-col gap-3 items-center p-5 snap-center '>
				<h1 className='text-4xl md:text-5xl'>De la idea a la realidad</h1>
				<h2 className='text-xl md:text-2xl  text-gray-400'>
					Nuestros Servicios de construccion
				</h2>
			</header>
			{service_data.map((service, i) => (
				<ServiceItem key={i} service={service} />
			))}
			{/* </div> */}
		</section>
	);
};
export default NuestrosServicios;
