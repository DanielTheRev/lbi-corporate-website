import Image from 'next/image';
import { HomeBannerType } from '../../HomePage/models/service.model';
import Link from 'next/link';

interface Props {
	service: HomeBannerType;
}

const ServiceItem = ({ service }: Props) => {
	return (
		<article className='flex flex-col md:flex-row md:even:flex-row-reverse max-w-[1200px] mx-auto p-1 items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 animate-fade-left animate-duration-[500ms]'>
			<Image
				className='object-cover w-full max-w-[500px] rounded-md'
				src={service.images[0].imgRef.secure_url}
				width={1920}
				height={1080}
				alt=''
				priority
			/>
			<div className='flex flex-col justify-between p-4 leading-normal'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-blue-700/80'>
					{service.banner}
				</h5>
				<p className='mb-3 text-xs md:text-base font-semibold md:font-normal text-gray-700 whitespace-pre-wrap text-pretty'>
					{service.description}
				</p>

				<div className='space-x-1'>
					<Link
						href={'/nuestros-trabajos/' + service.banner.split(' ').join('-')}
						replace
						className='btn-success'>
						Mira nuestros trabajos
					</Link>
					<Link href={'/contacto'} replace className='btn-primary'>
						Pedí tu presupuesto
					</Link>
				</div>
			</div>
		</article>
	);
};
export default ServiceItem;
