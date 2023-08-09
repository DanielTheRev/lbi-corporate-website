import Image from 'next/image';

const ServiceItem = ({ service }: any) => {
	return (
		<article className=' flex flex-col min-h-full w-full items-center gap-5 justify-center p-4 py-16 bg-teal-900'>
			<div className='w-3/4 min-h-full h-full gap-10 flex flex-col items-center'>
				<h1 id='title' className='w-full text-4xl text-right text-white'>{service.name}</h1>
				<p className='h-full w-full text-slate-300 text-justify py-4'>{service.description}</p>
			</div>
			<div className='flex gap-2 w-4/5 rounded-xl overflow-hidden'>
				<picture className='relative'>
					<Image
						src={service.image}
						width={1920}
						height={1080}
						alt={service.name}
					/>
				</picture>
				<picture className='relative'>
					<Image
			
						src={service.image}
						width={1920}
						height={1080}
						alt={service.name}
					/>
				</picture>
				<picture className='relative'>
					<Image
			
						src={service.image}
						width={1920}
						height={1080}
						alt={service.name}
					/>
				</picture>
			</div>
		</article>
	);
};
export default ServiceItem;
