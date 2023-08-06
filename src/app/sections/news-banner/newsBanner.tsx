import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Noticias'
};

const NewsBanner = () => {
	return (
		<section
			className='w-full h-full min-h-full overflow-x-hidden bg-stone-200 px-8'
			id='banner-news'>
			<article className='w-full h-max flex justify-between items-start gap-3 rounded bg-teal-800 mt-5 p-5 shadow-lg shadow-gray-700'>
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
					{/* <Image src='https://random.imagecdn.app/500/500' alt='algo' fill /> */}
					<Image src='https://dosmetal.com.ar/assets/logomaira.svg' alt='algo' fill />
				</picture>
				<div className='flex flex-col h-full p-2 items-center gap-5 flex-grow'>
					<header className='text-center'>
						<h1 className='text-2xl'>Somos LBI CONSTRUCCIONES</h1>
					</header>
					<div className='text-gray-300 text-xl text-center'>
						{/* Estamos de estreno de pagina web y queremos celebrarlo a lo grande. <br /> Con tu
						compra de cualquiera de nuestros servicios y pagando en efectivo tenes un 20% de
						descuento 😍 */}
						Empresa que nace como consecuencia de 40 años de experiencia en proyectos
						vinculados a las construcciones civiles metálicas. Con base estratégica en la
						localidad de Berazategui, importante punto de acceso a rutas nacionales y
						autopistas, ofrecemos cobertura en todo el territorio de la República Argentina.
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
		</section>
	);
};
export default NewsBanner;
