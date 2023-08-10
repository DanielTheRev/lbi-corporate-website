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
	data: Project[];
}

const ProjectSlider = ({ data }: Props) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='w-full'
			style={{maxHeight:'500px'}}
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			{data.map(({ _id, ProjectTitle, ProjectImgs }) => (
				<SwiperSlide key={_id}>
					<div key={_id} className='w-full h-full relative overflow-hidden'>
						<h5 className='w-full p-5 text-center'>{ProjectTitle}</h5>
						<picture className='relative h-40'>
							<Image src={ProjectImgs[0].secure_url} alt='' width={1920} height={1080} />
						</picture>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default ProjectSlider;
