import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer id='footer' className='flex flex-col w-full items-center p-10 text-white'>
			<h3 className='w-full text-left text-3xl p-5 pb-1'>Contactanos</h3>
			<div className='flex w-full h-full justify-evenly items-center pb-2'>
				<div className='p-4 rounded flex flex-col gap-2'>
					<h5 className='text-2xl'>Atencion al cliente</h5>
					<span>Lunes a viernes 4747-5373</span>
				</div>
				<div className='p-4 rounded flex flex-col gap-2'>
					<h5 className='text-2xl'>Nuestras Redes</h5>
					<div className='flex justify-between gap-4'>
						<Link href={'/'}>
							<Image src={'/facebook.png'} alt='facebook' width={50} height={50} />
						</Link>
						<Link href={'/'}>
							<Image src={'/whatsapp.png'} alt='whatsapp' width={50} height={50} />
						</Link>
						<Link href={'/'}>
							<Image src={'/instagram.png'} alt='instagram' width={50} height={50} />
						</Link>
					</div>
				</div>
			</div>
			<span>
				Copyright © 2015 - 2023 Dosmetal Construcciones.- Todos los derechos reservados.{' '}
			</span>
		</footer>
	);
};
export default Footer;
