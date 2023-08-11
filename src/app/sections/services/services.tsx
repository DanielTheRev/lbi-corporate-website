import Image from 'next/image';
import ServiceItem from './components/service-item';

const ServicesItems: { name: string; description: string; image: string }[] = [
	{
		name: 'Montajes Industriales',
		description:
			'Dos Metal Construcciones ofrece servicios de montaje industrial de alta calidad. Contamos con un equipo altamente capacitado y experimentado en la instalación de equipos y maquinaria en instalaciones industriales. Trabajamos de manera precisa y segura para garantizar una instalación eficiente y sin problemas. Además, ofrecemos servicios de mantenimiento y reparación para asegurar que tu equipo siga funcionando de manera óptima. ¡No dudes en contactarnos para obtener más información sobre cómo podemos ayudarte con tus necesidades de montaje industrial!',
		image: 'https://res.cloudinary.com/dri8dkmhr/image/upload/v1676315168/homeBanners/Banner%20Montajes%20Industriales.jpg'
	},
	{
		name: 'Aberturas de pvc',
		description:
			'Dos Metal Construcciones ofrece instalación de aberturas de PVC de alta calidad. Nuestras aberturas son resistentes, duraderas y eficientes en el aislamiento térmico y acústico. Además, ofrecemos una amplia variedad de diseños y colores para adaptarse a tus necesidades estéticas. Contamos con un equipo altamente capacitado y experimentado en la instalación de aberturas de PVC, garantizando un trabajo preciso y seguro. No dudes en contactarnos para obtener una cotización y descubrir cómo podemos ayudarte a mejorar la eficiencia energética de tu hogar o edificio comercial con nuestras aberturas de PVC de alta calidad.',
		image: 'https://res.cloudinary.com/dri8dkmhr/image/upload/v1679508755/homeBanners/Aberturas%20de%20PVC.jpg'
	},
	{
		name: 'Construcciones tradicionales',
		description:
			'En Dos Metal Construcciones, nos especializamos en la construcción de edificaciones tradicionales de alta calidad. Contamos con un equipo altamente capacitado y experimentado, que se dedica a brindar servicios de construcción de la más alta calidad. Utilizamos los mejores materiales y técnicas para garantizar una construcción duradera y estética. Nos enfocamos en escuchar y comprender las necesidades de nuestros clientes, y trabajamos en estrecha colaboración con ellos para asegurarnos de que sus expectativas sean cumplidas. Además, nos esforzamos por cumplir con los estándares de calidad y seguridad en cada uno de nuestros proyectos.',
		image: 'https://res.cloudinary.com/dri8dkmhr/image/upload/v1676340872/homeBanners/Banner%20Construcciones%20Tradicionales.jpg'
	},
	{
		name: 'Contruccion en seco',
		description:
			'Dos Metal Construcciones ofrece soluciones de construcción en seco de alta calidad. Nuestros profesionales cuentan con años de experiencia en la instalación de sistemas de construcción en seco, garantizando un trabajo eficiente y duradero. Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a construir tu proyecto de manera segura y sostenible.',
		image: 'https://res.cloudinary.com/dri8dkmhr/image/upload/v1676315119/homeBanners/Banner%20Construcciones%20en%20seco.webp'
	}
];

const Services = () => {
	return (
		<section
			id='services'
			className='flex flex-col w-full min-h-screen  text-black gap-3  p-8 pt-10 animate-fade-down animate-duration-[2000ms]'
			style={{
				backgroundColor: '#134e4a',
				opacity: '1',
				backgroundImage:
					'radial-gradient(#5e5e5e 0.8500000000000001px, #134e4a 0.8500000000000001px)',
				backgroundSize: '17px 17px'
			}}>
			<header className='flex flex-col gap-3 items-center p-5'>
				<h1 className='text-7xl text-white'>De la idea a la realidad</h1>
				<h2 className='text-3xl text-gray-400'>Nuestros Servicios de construccion</h2>
			</header>
			{/* <article className=' flex min-h-full w-full items-center justify-center p-4 '>
				<div className='w-3/6 min-h-full h-full gap-5 flex flex-col items-center'>
					<h1 className='text-4xl text-white'>Aberturas de PVC</h1>
					<p className='h-full text-slate-500 text-justify p-4'>
						Dos Metal Construcciones ofrece instalación de aberturas de PVC de alta calidad.
						Nuestras aberturas son resistentes, duraderas y eficientes en el aislamiento
						térmico y acústico. Además, ofrecemos una amplia variedad de diseños y colores
						para adaptarse a tus necesidades estéticas. Contamos con un equipo altamente
						capacitado y experimentado en la instalación de aberturas de PVC, garantizando un
						trabajo preciso y seguro. No dudes en contactarnos para obtener una cotización y
						descubrir cómo podemos ayudarte a mejorar la eficiencia energética de tu hogar o
						edificio comercial con nuestras aberturas de PVC de alta calidad.
					</p>
				</div>
				<div className='relative w-3/6 rounded overflow-hidden'>
					<picture className='w-full h-full'>
						<Image
							className='w-full h-full'
							src={
								'https://res.cloudinary.com/dri8dkmhr/image/upload/v1679508755/homeBanners/Aberturas%20de%20PVC.jpg'
							}
							width={1920}
							height={1080}
							alt='Abertura de pcv'
						/>
					</picture>
				</div>
			</article> */}
			{ServicesItems.map((service, i) => (
				<ServiceItem key={i} service={service} />
			))}
		</section>
	);
};
export default Services;
