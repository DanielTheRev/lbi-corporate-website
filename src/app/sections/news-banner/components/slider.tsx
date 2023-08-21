'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { News, PresentacionInfo } from '../../models/presentacion.model';

interface Props {
	data: {
		Presentacion: PresentacionInfo;
		NewsList: News[];
	};
}

const Slider = ({ data }: Props) => {
	const { Presentacion, NewsList } = data;
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='h-[550px] w-full'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			<SwiperSlide className='w-full h-full'>
				<article className='w-full h-full grid grid-cols-3 gap-3 p-5 pb-7  bg-teal-800 '>
					<picture className='relative w-full h-full rounded overflow-hidden bg-white '>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture>

					<div className='flex flex-col h-full items-center gap-5 flex-grow col-start-2 col-end-4 text-white'>
						<header className='text-center'>
							<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES </h1>
						</header>
						<div className=' text-gray-300 w-full h-full text-xl text-center grow'>
							Empresa que nace como consecuencia de 40 años de experiencia en proyectos
							vinculados a las construcciones civiles metálicas. Con base estratégica en la
							localidad de Berazategui, importante punto de acceso a rutas nacionales y
							autopistas, ofrecemos cobertura en todo el territorio de la República
							Argentina. Empresa que nace como consecuencia de 40 años de experiencia en
							proyectos vinculados a las construcciones civiles metálicas. Con base
							estratégica en la localidad de Berazategui, importante punto de acceso a rutas
							nacionales y autopistas, ofrecemos cobertura en todo el territorio de la
							República Argentina.
						</div>

						<div className='flex w-full h-full gap-3'>
							<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
						</div>
					</div>
				</article>
			</SwiperSlide>

			{NewsList.map((News) => (
				<SwiperSlide className='w-full h-full' key={News._id}>
					<article className='w-full h-full flex  bg-teal-800 gap-3 p-5 '>
						{/* <picture className='overflow-hidden w-full h-full relative rounded bg-gray-200'>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture> */}

						<div className='flex flex-col p-3 gap-5 flex-grow col-start-2 col-end-4'>
							<header className='text-center'>
								<h1 className='text-3xl'>{News.title}</h1>
							</header>
							<div className='text-gray-300 text-xl text-left py-5'>
								{News.description}
							</div>

							<div className='flex w-full h-full  border-2 border-white rounded'>
								{News.images.slice(-3).map((image) => (
									<div
										className='w-full h-full relative  overflow-hidden'
										key={image._id}>
										<Image
											src={image.imgRef.secure_url}
											className='object-cover'
											alt={News.title}
											fill
										/>
									</div>
								))}
							</div>
						</div>
					</article>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default Slider;
