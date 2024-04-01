import Navbar from '../components/Navbar/Navbar';

const ContactoPage = () => {
	return (
		<>
			<Navbar />
			<section className='flex flex-col md:flex-row w-full h-full max-w-[1200px] mx-auto flex-grow justify-center items-center p-4 gap-4 animate-fade-down animate-duration-[500ms]'>
				<header className='block w-full place-self-center'>
					<h1 className='block text-2xl md:text-7xl text-blue-600/70 font-semibold mb-3'>
						Contáctenos
					</h1>
					<h2 className='block text-lg md:text-3xl  text-balance text-blue-600/70 font-semibold'>
						Tu consulta sera respondida a la brevedad.
					</h2>
				</header>
				<div className='flex w-full items-center justify-center gap-5'>
					<div className='flex flex-col w-full max-w-[350px] h-full bg-slate-950/50 p-4 rounded-md'>
						<form className='flex flex-col w-full h-full'>
							<div className='mb-3'>
								<label
									htmlFor='nombre'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Nombre
								</label>
								<input
									type='text'
									id='nombre'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='apellido'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Apellido
								</label>
								<input
									type='text'
									id='apellido'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div className='mb-3'>
								<label
									htmlFor='correo'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Correo
								</label>
								<input
									type='email'
									id='correo'
									className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div className='mb3'>
								<label
									htmlFor='message'
									className='block mb-2 text-sm font-medium text-gray-900'>
									Tu mensaje:
								</label>
								<textarea
									id='message'
									rows={4}
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
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
