import { Metadata } from 'next';
import Image from 'next/image';
import Slider from './components/slider';

export const metadata: Metadata = {
	title: 'Noticias'
};

const NewsBanner = () => {
	return (
		<section
			className='w-full h-full min-h-screen overflow-x-hidden bg-stone-200 px-8 pb-8 animate-fade-down animate-duration-[2000ms]'
			id='banner-news'>
			<Slider />
		</section>
	);
};
export default NewsBanner;
