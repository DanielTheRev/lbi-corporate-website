const Footer = () => {
	return (
		<footer className='flex flex-col w-full items-center bg-teal-900 h-80 text-white p-5'>
			<h3 className='w-full text-left text-3xl p-5'>Contactanos</h3>
			<div className="flex w-full h-full justify-evenly items-center">
				<div className="p-4 rounded flex flex-col gap-2">
					<h5 className="text-2xl">Atencion al cliente</h5>
					<span>Lunes a viernes 4747-5373</span>
				</div>
				<div className="p-4 rounded flex flex-col gap-2">
					<h5 className="text-2xl">Nuestras Redes</h5>
					<div className="flex justify-between gap-4">
					<span>Instagram</span>
					<span>Facebook</span>
					</div>
				</div>
			</div>
			<span> Copyright © 2015 - 2023 Dosmetal Construcciones.- Todos los derechos reservados. </span>
		</footer>
	);
};
export default Footer;
