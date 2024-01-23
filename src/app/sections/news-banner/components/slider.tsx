'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { News, PresentacionInfo } from '../../models/presentacion.model';
import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import LastProject from '@/app/components/LastProject/LastProject';

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
			className='h-screen max-h-[600px] w-full bg-zinc-950/10'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			<SwiperSlide className='rounded-md px-3 w-full h-full'>
				<article className='w-full h-full flex'>
					<div className='flex flex-col w-full max-w-[1200px] mx-auto h-full justify-center items-center gap-5 text-white'>
						<div className='flex w-full justify-center items-center'>
							<div className='flex flex-col w-full justify-center items-center'>
								<header className='text-center mb-4'>
									<h1 className='text-3xl'>LBI CONSTRUCCIONES </h1>
								</header>

								<p className=' text-white/70 text-pretty w-full max-w-[75%] text-center'>
									{Presentacion.description}
								</p>
							</div>
							{/* <div className='flex justify-center items-center'>
								<picture className='relative flex justify-center items-center w-96  h-full'>
									<Logo />
								</picture>
							</div> */}
						</div>

						<div className='flex w-full h-full max-h-[300px] gap-3'>
							{Presentacion.images.map((image) => (
								<picture
									className='w-full h-full relative border-2 border-white rounded overflow-hidden'
									key={image._id}>
									<Image
										src={image.imgRef.secure_url}
										className='object-cover'
										alt={Presentacion.description}
										fill
										priority
										sizes='(max-width: 300px)'
									/>
								</picture>
							))}
						</div>
					</div>
				</article>
			</SwiperSlide>

			{NewsList.map((News) => (
				<SwiperSlide className='rounded-md px-3 w-full h-full py-2' key={News._id}>
					<article className='flex flex-col justify-center w-full max-w-[1200px] mx-auto h-full gap-3'>
						<div className='flex flex-col  w-full gap-3'>
							<header>
								<h1 className='text-3xl'>{News.title}</h1>
							</header>
							<p className='text-gray-400 w-full h-full text-md text-pretty'>
								{News.description}
							</p>
						</div>

						<div className='flex w-full h-full max-h-80 overflow-hidden shadow-lg rounded border'>
							{News.images.map((image) => (
								<div className='w-full h-full relative overflow-hidden' key={image._id}>
									{image.imgRef && (
										<Image
											src={image.imgRef.secure_url}
											className='object-cover'
											alt={News.title}
											fill
											sizes='(max-width: 300px)'
										/>
									)}
								</div>
							))}
						</div>
					</article>
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
