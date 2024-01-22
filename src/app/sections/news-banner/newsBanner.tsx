import { Metadata } from 'next';
import Image from 'next/image';
import Slider from './components/slider';
import { News, PresentacionInfo } from '../models/presentacion.model';
import { Project } from '@/app/nuestros-trabajos/models/projects.model';

export const metadata: Metadata = {
	title: 'Noticias'
};

const getInfo = async () => {
	const res = await fetch(`${process.env.SERVER_URL}/presentacion/getInfoPresentacion`, {
		cache: 'no-cache'
	});

	const data = (await res.json()) as {
		Presentacion: PresentacionInfo;
		NewsList: News[];
		last_projects: {
			_id: string;
			section: string;
			last_project: Project;
		}[];
	};

	return data;
};

const NewsBanner = async () => {
	const info = await getInfo();
	return (
		<section
			className='relative w-full h-full overflow-x-hidden  animate-fade-down animate-duration-[1500ms] text-white/90'
			id='banner-news'>
			<Slider data={info} />
		</section>
	);
};
export default NewsBanner;
