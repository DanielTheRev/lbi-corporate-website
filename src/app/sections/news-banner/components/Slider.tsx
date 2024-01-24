'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { News, PresentacionInfo } from '../../models/presentacion.model';
import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import LastProject from '@/app/components/LastProject/LastProject';
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
	const { Presentacion, NewsList, last_projects } = data;
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='h-screen max-h-[550px] w-full bg-zinc-950/10 overflow-hidden'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			<SwiperSlide className='rounded-md px-3 w-full h-full'>
				<PresentacionBanner data={Presentacion} />
			</SwiperSlide>

			{NewsList.map((News) => (
				<SwiperSlide className='rounded-md px-3 w-full h-full py-2' key={News._id}>
					<NewsBanner data={News} />
				</SwiperSlide>
			))}

			{last_projects.map(
				(project) =>
					project.last_project && (
						<SwiperSlide key={project._id} className='w-full h-full'>
							<LastProject project={project.last_project} section={project.section} />
						</SwiperSlide>
					)
			)}
		</Swiper>
	);
};
export default Slider;
