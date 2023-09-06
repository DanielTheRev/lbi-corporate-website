import Image from 'next/image';
import { HomeBannerType } from '../../models/service.model';

interface Props {
	service: HomeBannerType;
}

const ServiceItem = ({ service }: Props) => {
	return (
		<article className=' flex flex-col min-h-full w-full md:w-5/6 items-center gap-4 justify-center p-6'>
			<div className='w-full min-h-full h-full gap-4 flex flex-col items-center'>
				<h1 id='title' className='w-full text-4xl text-right text-white'>
					{service.banner}
				</h1>
				<p className='h-full w-full text-slate-300 hyphens-auto text-center text-md md:text-lg'>
					&nbsp; {service.description}
				</p>
			</div>
			<div className='flex flex-col md:flex-row gap-2 w-full rounded-xl overflow-hidden'>
				{service.images.map(
					(image) =>
						image.imgRef && (
							<picture className='relative' key={image._id}>
								<Image
									src={image.imgRef.secure_url}
									width={1920}
									height={1080}
									alt={service.banner}
								/>
							</picture>
						)
				)}
			</div>
		</article>
	);
};
export default ServiceItem;
