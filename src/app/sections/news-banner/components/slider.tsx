'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Slider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			className='h-full w-full'
			slidesPerView={1}
      autoplay
			pagination={{ clickable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}>
			<SwiperSlide className='w-full h-full'>
				<article className='w-full h-max flex justify-between items-start gap-3 rounded  mt-5 p-5'>
					<picture
						className='rounded-full overflow-hidden border-2 border-gray-800 bg-gray-200'
						style={{
							width: '500px',
							height: '500px',
							minHeight: '500px',
							minWidth: '500px',
							position: 'relative',
							display: 'block'
						}}>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture>
					<div className='flex flex-col h-full p-2 items-center gap-5 flex-grow'>
						<header className='text-center'>
							<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES 1</h1>
						</header>
						<div className='text-gray-300 text-xl text-center'>
							Empresa que nace como consecuencia de 40 años de experiencia en proyectos
							vinculados a las construcciones civiles metálicas. Con base estratégica en la
							localidad de Berazategui, importante punto de acceso a rutas nacionales y
							autopistas, ofrecemos cobertura en todo el territorio de la República
							Argentina.
						</div>

						<div className='flex gap-3'>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
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
			<SwiperSlide className='w-full h-full'>
				<article className='w-full h-max flex justify-between items-start gap-3 rounded  mt-5 p-5'>
					<picture
						className='rounded-full overflow-hidden border-2 border-gray-800 bg-gray-200'
						style={{
							width: '500px',
							height: '500px',
							minHeight: '500px',
							minWidth: '500px',
							position: 'relative',
							display: 'block'
						}}>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture>
					<div className='flex flex-col h-full p-2 items-center gap-5 flex-grow'>
						<header className='text-center'>
							<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES 2</h1>
						</header>
						<div className='text-gray-300 text-xl text-center'>
							Empresa que nace como consecuencia de 40 años de experiencia en proyectos
							vinculados a las construcciones civiles metálicas. Con base estratégica en la
							localidad de Berazategui, importante punto de acceso a rutas nacionales y
							autopistas, ofrecemos cobertura en todo el territorio de la República
							Argentina.
						</div>

						<div className='flex gap-3'>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
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
			<SwiperSlide className='w-full h-full'>
				<article className='w-full h-max flex justify-between items-start gap-3 rounded  mt-5 p-5'>
					<picture
						className='rounded-full overflow-hidden border-2 border-gray-800 bg-gray-200'
						style={{
							width: '500px',
							height: '500px',
							minHeight: '500px',
							minWidth: '500px',
							position: 'relative',
							display: 'block'
						}}>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture>
					<div className='flex flex-col h-full p-2 items-center gap-5 flex-grow'>
						<header className='text-center'>
							<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES 3</h1>
						</header>
						<div className='text-gray-300 text-xl text-center'>
							Empresa que nace como consecuencia de 40 años de experiencia en proyectos
							vinculados a las construcciones civiles metálicas. Con base estratégica en la
							localidad de Berazategui, importante punto de acceso a rutas nacionales y
							autopistas, ofrecemos cobertura en todo el territorio de la República
							Argentina.
						</div>

						<div className='flex gap-3'>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
								<Image
									src='https://random.imagecdn.app/500/500'
									className='object-cover'
									alt='algo'
									fill
								/>
							</div>
							<div className='w-52 h-72 relative border-2 border-white rounded overflow-hidden'>
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
		</Swiper>
	);
};
export default Slider;
