'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { News, PresentacionInfo } from '../../models/presentacion.model';
import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import PresentacionBanner from './PresentationBanner';
import NewsBanner from './NewsBanner';

interface Props {
	data: {
		Presentacion: PresentacionInfo;
		NewsList: News[];
		last_projects: {
			_id: string;
			section: string;
			last_project: Project;
		}[];
	};
}

const Slider = ({ data }: Props) => {
	const { Presentacion, NewsList } = data;
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='w-full overflow-hidden py-5 md:py-10'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			{NewsList.map((News) => (
				<SwiperSlide className='rounded-md px-3 w-full h-full' key={News._id}>
					<NewsBanner data={News} />
				</SwiperSlide>
			))}

			<SwiperSlide className='rounded-md px-3 w-full h-full'>
				<PresentacionBanner data={Presentacion} />
			</SwiperSlide>
		</Swiper>
	);
};
export default Slider;
