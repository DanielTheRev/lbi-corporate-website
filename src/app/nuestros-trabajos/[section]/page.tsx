import axios from 'axios';
import { Section } from '../models/projects.model';

const getSectionData = async (section: string) => {
	const body = {
		section: section.split('-').join(' ')
	};

	const res = await axios.post(
		'https://dosmetal.com.ar/api/dosmetal-page/projects/getSectionData',
		body
	);
	return res.data as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const sectionData = await getSectionData(params.section);
	return (
		<article className='flex flex-col w-full h-full'>
			<header className='w-full text-center p-5'>
				<h1 className='text-2xl'>Nuestros trabajos de {sectionData.section}</h1>
			</header>
			<div className='flex w-full h-full'>
				{sectionData.data.map(({ _id, ProjectTitle }) => (
					<div key={_id} className='w-full border'>
						<h5 className='w-full p-5 text-center'>{ProjectTitle}</h5>
					</div>
				))}
			</div>
		</article>
	);
};
export default TrabajosPage;
