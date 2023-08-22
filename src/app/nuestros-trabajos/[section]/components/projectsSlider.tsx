'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { Project } from '../../models/projects.model';

interface Props {
	data: Project;
}

const ProjectSlider = ({ data }: Props) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='h-full w-full border'
			slidesPerView={1}
			autoplay
			navigation
			pagination={{ clickable: true }}>
			{data.ProjectImgs.map((image) => (
				<SwiperSlide key={image.asset_id} className='flex w-full h-full overflow-hidden'>
					<picture className='flex relative w-full h-full'>
						<Image src={image.secure_url} alt='' fill className='object-cover'/>
					</picture>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default ProjectSlider;
