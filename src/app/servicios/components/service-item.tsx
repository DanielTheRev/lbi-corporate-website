import Image from 'next/image';
import { HomeBannerType } from '../../HomePage/models/service.model';

interface Props {
	service: HomeBannerType;
}

const ServiceItem = ({ service }: Props) => {
	return (
		<article className='flex flex-col md:flex-row md:even:flex-row-reverse max-w-[1200px] mx-auto p-1 items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 animate-fade-left animate-duration-[500ms]'>
			<Image
				className='object-cover w-full max-w-[500px] rounded-md'
				src={service.images[0].imgRef.secure_url}
				width={1920}
				height={1080}
				alt=''
				priority
			/>
			<div className='flex flex-col justify-between p-4 leading-normal'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-700'>
					{service.banner}
				</h5>
				<p className='mb-3 text-xs md:text-base font-semibold md:font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap text-pretty'>
					{service.description}
				</p>

				<div>
					<button
						type='button'
						className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2'>
						Mirá nuestos trabajos
					</button>
					<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
						<span className='relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Pedi tu presupuesto
						</span>
					</button>
				</div>
			</div>
		</article>
	);
};
export default ServiceItem;
