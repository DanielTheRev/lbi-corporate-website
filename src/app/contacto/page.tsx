import Link from 'next/link';
import Navbar from '../components/Navbar/Navbar';
import { Logo } from '../components/Logo/Logo';

const ContactoPage = () => {
	return (
		<>
			<Navbar />
			<section className='flex flex-col w-full h-full flex-grow justify-center items-center p-4 gap-4'>
				<div className='flex w-full max-w-[300px] text-white justify-center items-center'>
					<Logo />
				</div>
				<header className='mb-3 text-center'>
					<h1 className='text-3xl text-center text-blue-200 text-balance'>
						Envíanos tu consulta
					</h1>
					<span className='text-lg font-semibold text-gray-400'>
						responderemos a la brevedad
					</span>
				</header>
				<div className='flex w-full items-center justify-center gap-5'>
					<div className='flex flex-col w-full max-w-[350px] h-full bg-slate-950/50 p-4 rounded-md'>
						<form className='flex flex-col w-full h-full'>
							<div className='mb-3'>
								<label
									htmlFor='nombre'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Nombre
								</label>
								<input
									type='text'
									id='nombre'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='apellido'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Apellido
								</label>
								<input
									type='text'
									id='apellido'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='correo'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Correo
								</label>
								<input
									type='email'
									id='correo'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
							</div>
							<div className='mb3'>
								<label
									htmlFor='message'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Tu mensaje:
								</label>
								<textarea
									id='message'
									rows={4}
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='Escriba su consulta'></textarea>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default ContactoPage;
