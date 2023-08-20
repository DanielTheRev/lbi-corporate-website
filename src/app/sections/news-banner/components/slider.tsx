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
			className='h-screen w-full'
			slidesPerView={1}
			autoplay
			pagination={{ clickable: true }}>
			<SwiperSlide className='w-full h-full p-2'>
				<article className='w-full h-full grid grid-cols-3 gap-3 rounded p-5 pb-7 border border-teal-700 '>
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
				<SwiperSlide className='w-full h-full p-1' key={News._id}>
					<article className='w-full h-full grid grid-cols-1 border border-teal-700 gap-3 rounded p-5 pb-6'>
						{/* <picture className='overflow-hidden w-full h-full relative rounded bg-gray-200'>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture> */}

						<div className='flex flex-col h-full p-3 items-center gap-5 flex-grow col-start-2 col-end-4'>
							<header className='text-center'>
								<h1 className='text-3xl'>{News.title}</h1>
							</header>
							<div className='text-gray-300 text-xl text-left'>
								{News.description}
								{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quibusdam
								saepe similique vel, ducimus praesentium harum iste perspiciatis nostrum
								soluta ex sit mollitia et nulla consequuntur iure quae molestias
								accusantium? Voluptatem, perspiciatis exercitationem? Numquam a saepe
								quibusdam animi consequuntur, voluptates veritatis optio consectetur qui
								tenetur velit aut corrupti. Sequi dicta, consequuntur qui necessitatibus cum
								quo. Voluptate cupiditate aliquid */}
							</div>

							<div className='flex w-full h-full gap-3'>
								{News.images.map((image) => (
									<div
										className='w-full h-full relative border-2 border-white rounded overflow-hidden'
										key={image._id}>
										<Image
											src={image.imgRef.secure_url}
											className='object-cover'
											alt={News.title}
											fill
										/>
									</div>
								))}
								{/* <div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
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
								</div> */}
							</div>
						</div>
					</article>
				</SwiperSlide>
			))}

			{/* <SwiperSlide className='w-full h-full p-1'>
				<article className='w-full h-full grid grid-cols-3 gap-3 rounded p-5 pb-6'>
					<picture className='overflow-hidden w-full h-full relative rounded bg-gray-200'>
						<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
					</picture>

					<div className='flex flex-col h-full p-3 items-center gap-5 flex-grow col-start-2 col-end-4'>
						<header className='text-center'>
							<h1 className='text-3xl'>Estamos de inaguracion de pagina!</h1>
						</header>
						<div className='text-gray-300 text-xl text-left'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quibusdam saepe
							similique vel, ducimus praesentium harum iste perspiciatis nostrum soluta ex
							sit mollitia et nulla consequuntur iure quae molestias accusantium? Voluptatem,
							perspiciatis exercitationem? Numquam a saepe quibusdam animi consequuntur,
							voluptates veritatis optio consectetur qui tenetur velit aut corrupti. Sequi
							dicta, consequuntur qui necessitatibus cum quo. Voluptate cupiditate aliquid
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
			</SwiperSlide> */}
			{/* <SwiperSlide className='w-full h-full'>
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
			</SwiperSlide> */}
		</Swiper>
	);
};
export default Slider;
