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
			className='h-[600px] w-full'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			<SwiperSlide className='w-full h-full'>
				<article className='w-full h-full grid sm:grid-cols-1  md:grid-cols-3 md:gap-3 p-5 pb-7  bg-teal-950 shadow-lg '>
					<picture className='relative w-full h-full rounded overflow-hidden bg-white '>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
						{/* <Image src='/logo.jpg' alt='algo' fill /> */}
					</picture>

					<div className='flex flex-col h-full items-center gap-5 flex-grow md:col-start-2 md:col-end-4 text-white'>
						<header className='text-center'>
							<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES </h1>
						</header>
						<div className=' text-gray-300 w-full h-full text-xl text-center grow'>
							{Presentacion.description}
						</div>

						<div className='flex w-full h-full gap-3'>
							{Presentacion.images.map((image) => (
								<div
									className='w-full h-full relative border-2 border-white rounded overflow-hidden'
									key={image._id}>
									<Image
										src={image.imgRef.secure_url}
										className='object-cover'
										alt={Presentacion.description}
										fill
									/>
								</div>
							))}
						</div>
					</div>
				</article>
			</SwiperSlide>

			{NewsList.map((News) => (
				<SwiperSlide className='w-full h-full py-2' key={News._id}>
					<article className='grid grid-cols-1 grid-rows-2 w-full h-full gap-3 sm:gap-1  bg-teal-950 shadow-lg p-5 pb-7'>
						<div className='flex flex-col justify-center h-full w-full p-5 sm:p-1'>
							<header className='text-center'>
								<h1 className='text-3xl'>{News.title}</h1>
							</header>
							<div className='text-gray-300 text-lg text-center p-5 py-8 sm:p-2 text-ellipsis overflow-hidden'>
								{News.description}
							</div>
						</div>

						<div className='flex w-full h-full overflow-hidden shadow-lg rounded border'>
							{News.images.map((image) => (
								<div className='w-full h-full relative overflow-hidden' key={image._id}>
									{image.imgRef && (
										<Image
											src={image.imgRef.secure_url}
											className='object-cover'
											alt={News.title}
											fill
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
							<section className='flex flex-col w-full h-full items-start p-5 pb-7 bg-teal-950 shadow-lg shadow-slate-300 text-white'>
								<span className='bg-blue-700 p-1 px-2 rounded-full text-sm text-white'>
									{project.section}
								</span>
								<h2 className='w-full p-5 pl-0 pb-0 text-left text-2xl'>
									{project.last_project.ProjectTitle}
								</h2>
								<div className='flex flex-col w-full h-full overflow-hidden gap-4'>
									<p className='w-full p-2 text-justify text-slate-300 overflow-hidden sm:text-sm'>
										{project.last_project.ProjectDescription}
									</p>
									<section className='flex w-full h-full rounded border overflow-hidden'>
										{project.last_project.ProjectImgs.map((image) => (
											<picture
												className='w-full h-full relative overflow-hidden'
												key={image.asset_id}>
												<Image
													className='object-cover'
													alt={project.last_project.ProjectTitle}
													src={image.secure_url}
													fill
												/>
											</picture>
										))}
									</section>
								</div>
							</section>
						</SwiperSlide>
					)
			)}
		</Swiper>
	);
};
export default Slider;
