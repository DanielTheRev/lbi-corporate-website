import whatsappIcon from '../../../public/whatsapp.png';
import facebookIcon from '../../../public/facebook.png';
import instagramIcon from '../../../public/instagram.png';
import Image from 'next/image';
import Link from 'next/link';

const ContactoPage = () => {
	return (
		<section className='flex  w-full min-h-full p-4 gap-4'>
			<div className='flex flex-col w-full h-full gap-5'>
				<header className='flex flex-col w-full justify-center items-center gap-1'>
					<h1 className='text-white text-2xl'>
						Ponte en contacto con nosotros mediante redes sociales
					</h1>
					<h3 className='text-white text-2xl'>Te responderemos a la brevedad</h3>
				</header>
				<div className='flex w-full relative p-5 gap-5 justify-evenly'>
					{/* Instagram Whatsapp Facebook */}
					<Link href={'/'}>
						<Image alt='whatsapp' src={whatsappIcon} width={70} height={70} />
					</Link>
					<Link href={'/'}>
						<Image alt='facebook' src={facebookIcon} width={70} height={70} />
					</Link>
					<Link href={'/'}>
						<Image alt='instagram' src={instagramIcon} width={70} height={70} />
					</Link>
				</div>
			</div>

			<div className='flex flex-col w-full h-full'>
				<header>
					<h1 className='text-white text-2xl text-center'>
						Tambien podes rellenar este formulario y nos pondremos en contacto
					</h1>
				</header>
				<form className='flex flex-col w-full h-full gap-3'>
					<div className='flex w-full gap-2 py-2'>
						<input
							type='text'
							className='w-full rounded p-1'
							name='name'
							placeholder='Nombre'
						/>
						<input
							type='text'
							className='w-full rounded p-1'
							name='last-name'
							placeholder='Apellido'
						/>
					</div>
					<input
						type='email'
						className='w-full rounded p-1'
						name='email'
						placeholder='Email'
					/>
					<input
						type='tel'
						className='w-full rounded p-1'
						name='telefono'
						placeholder='Telefono'
					/>
					<textarea
						className='w-full rounded p-1'
						name='query'
						cols={10}
						rows={10}
						placeholder='Ingrese su consulta'></textarea>
				</form>
			</div>
		</section>
	);
};
export default ContactoPage;
