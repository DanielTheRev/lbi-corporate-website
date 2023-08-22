import { Metadata } from 'next';
import Image from 'next/image';
import Slider from './components/slider';
import { News, PresentacionInfo } from '../models/presentacion.model';
import { Project } from '@/app/nuestros-trabajos/models/projects.model';

export const metadata: Metadata = {
	title: 'Noticias'
};

const getInfo = async () => {
	const res = await fetch(
		'http://localhost:3000/api/dosmetal-page/presentacion/getInfoPresentacion',
		{
			cache: 'no-cache'
		}
	);

	const data = (await res.json()) as {
		Presentacion: PresentacionInfo;
		NewsList: News[];
		last_projects: {
			_id: string;
			section: string;
			last_project: Project;
		}[];
	};
	console.log(data);

	return data;
};

const NewsBanner = async () => {
	const info = await getInfo();
	return (
		<section
			className='w-full h-full overflow-x-hidden  animate-fade-down animate-duration-[2000ms]'
			id='banner-news'>
			<Slider data={info} />
		</section>
	);
};
export default NewsBanner;
