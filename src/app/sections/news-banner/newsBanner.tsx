import { Metadata } from 'next';
import Image from 'next/image';
import Slider from './components/slider';

export const metadata: Metadata = {
	title: 'Noticias'
};

const NewsBanner = () => {
	return (
		<section
			className='w-full h-full overflow-x-hidden  animate-fade-down animate-duration-[2000ms]'
			id='banner-news'>
			<article className='w-full h-full grid grid-flow-col-dense max-[400px]:grid-flow-row gap-3 justify-center items-start bg-black p-1'>
				<picture className='flex w-full h-full relative max-[400px]:h-12 overflow-hidden'>
					{/* <Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' width={1920} height={1080}/> */}
					<Image src='/logo.jpg' alt='algo' width={1920} height={1080} className='w-full h-full object-contain'/>
				</picture>
				<div className='flex flex-col h-full max-[400px]:h-max justify-center items-center gap-5 flex-grow bg-teal-800 overflow-hidden p-10 rounded'>
					<header className='text-center'>
						<h1 className='text-2xl max-[400px]:text-lg'>Somos LBI CONSTRUCCIONES </h1>
					</header>
					<div className='text-gray-300 text-xl max-[400px]:text-sm text-center overflow-hidden'>
						Empresa que nace como consecuencia de 40 años de experiencia en proyectos
						vinculados a las construcciones civiles metálicas. Con base estratégica en la
						localidad de Berazategui, importante punto de acceso a rutas nacionales y
						autopistas, ofrecemos cobertura en todo el territorio de la República Argentina.
					</div>

					<div className='grid grid-cols-3 max-[400px]:grid-flow-col-dense gap-3'>
						<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
							<Image
								src='https://random.imagecdn.app/500/500'
								className='object-cover'
								alt='algo'
								width={1920}
								height={1080}
							/>
						</div>
						<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
							<Image
								src='https://random.imagecdn.app/500/500'
								className='object-cover'
								alt='algo'
								width={1920}
								height={1080}
							/>
						</div>
						<div className='w-full h-full relative border-2 border-white rounded overflow-hidden'>
							<Image
								src='https://random.imagecdn.app/500/500'
								className='object-cover'
								alt='algo'
								width={1920}
								height={1080}
							/>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};
export default NewsBanner;
