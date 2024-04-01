import './globals.scss';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Footer from './components/Footer/Footer';

const _Manrope = Manrope({
	subsets: ['latin'],
	variable: '--font-Roboto',
	weight: ['400', '500', '600'],
	preload: true
});

export const metadata: Metadata = {
	title: 'LBI Construcciones',
	description:
		'Somos una empresa que nace como consecuencia de 40 años de experiencia en proyectos vinculados a las construcciones civiles metálicas. Con base estratégica en la localidad de Berazategui, importante punto de acceso a rutas nacionales y autopistas, ofrecemos cobertura en todo el territorio de la República Argentina.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body
				className={
					'relative flex flex-col min-h-screen justify-between overflow-x-hidden ' +
					_Manrope.className
				}>
				<div className='absolute  inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>
				<main className='flex flex-col w-full flex-grow justify-between'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
