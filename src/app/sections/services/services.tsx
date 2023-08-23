import Image from 'next/image';
import ServiceItem from './components/service-item';
import { HomeBannerType } from '../models/service.model';

const FetchServices = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/homeBanner/getHomeBanners`);
	const data = await res.json();
	return data as HomeBannerType[];
};

const Services = async () => {
	const service_data = await FetchServices();

	return (
		<section
			id='services'
			className='flex flex-col w-full min-h-screen  text-black gap-3 max-[400px]:p-2  p-8 pt-10 animate-fade-down animate-duration-[2000ms]'
			style={{
				backgroundColor: '#134e4a',
				opacity: '1',
				backgroundImage:
					'radial-gradient(#5e5e5e 0.8500000000000001px, #134e4a 0.8500000000000001px)',
				backgroundSize: '17px 17px'
			}}>
			<header className='flex flex-col gap-3 items-center p-5'>
				<h1 className='text-7xl max-[400px]:text-xl text-white'>De la idea a la realidad</h1>
				<h2 className='text-3xl max-[400px]:text-md text-gray-400'>
					Nuestros Servicios de construccion
				</h2>
			</header>
			<div className='flex flex-col w-full h-full gap-10'>
				{service_data.map((service, i) => (
					<ServiceItem key={i} service={service} />
				))}
			</div>
		</section>
	);
};
export default Services;
