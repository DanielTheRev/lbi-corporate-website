import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../Logo/Logo';

const Footer = () => {
	return (
		<footer id='footer' className='flex w-full items-center p-10'>
			<div className='flex w-full h-full justify-center items-center text-white'>
				<div className='w-80 h-40'>
					<Logo />
				</div>
			</div>
			<div className='flex flex-col items-center justify-center w-full h-full'>
				<h3 className='w-full text-center text-3xl text-white py-4 mb-3'>Contactanos</h3>
				<div className='flex w-full h-full justify-evenly items-center pb-2 text-white'>
					<div className='p-4 rounded flex flex-col gap-2'>
						<h5 className='text-2xl'>Atencion al cliente</h5>
						<span className='text-white/70'>• Lunes a viernes 4747-5373</span>
					</div>
					<div className='p-4 rounded flex flex-col gap-2'>
						<h5 className='text-2xl'>Nuestras Redes</h5>
						<div className='flex justify-center gap-4'>
							<Link href={'/'}>
								<Image src={'/facebook.png'} alt='facebook' width={35} height={35} />
							</Link>
							<Link href={'/'}>
								<Image src={'/whatsapp.png'} alt='whatsapp' width={35} height={35} />
							</Link>
							<Link href={'/'}>
								<Image src={'/instagram.png'} alt='instagram' width={35} height={35} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
