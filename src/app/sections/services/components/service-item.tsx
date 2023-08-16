import Image from 'next/image';

const ServiceItem = ({ service }: any) => {
	return (
		<article className=' flex flex-col min-h-full w-full items-center gap-10 max-[400px]:gap-4 justify-center p-4 max-[400px]:p-2  '>
			<div className='w-4/5 max-[400px]:w-full min-h-full h-full gap-10 max-[400px]:gap-4 flex flex-col items-center'>
				<h1 id='title' className='w-full text-4xl max-[400px]:text-2xl text-right text-white'>{service.name}</h1>
				<p className='h-full w-full text-slate-300 text-justify max-[400px]:text-center max-[400px]:text-sm'> &nbsp; {service.description}</p>
			</div>
			<div className='flex gap-2 w-4/5 max-[400px]:w-full rounded-xl overflow-hidden'>
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
