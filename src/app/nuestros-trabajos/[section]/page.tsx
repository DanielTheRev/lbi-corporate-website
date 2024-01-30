import LastProject from '@/app/components/LastProject/LastProject';
import { Section } from '../models/projects.model';
import ProjectCard from './components/ProjectCard/ProjectCard';

const getSectionData = async (section: string) => {
	const body = {
		section: section.split('-').join(' ')
	};
	const res = await fetch(`${process.env.SERVER_URL}/projects/getSectionData`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		},
		next: {
			revalidate: 3600
		}
	});
	const data = await res.json();
	return data as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const { section, data } = await getSectionData(params.section);
	const lastProject = data.find((project) => project.isLastProject);

	if (data.length <= 0)
		return (
			<section className='flex w-full max-w-[1200px] mx-auto h-screen justify-center items-center text-2xl max-[400px]:text-xl text-white'>
				Todavia no hay proyectos que mostrar
			</section>
		);
	return (
		<section className='flex flex-col w-full max-w-[1200px] mx-auto h-auto text-white  overflow-hidden'>
			{lastProject && (
				<div className='flex w-full h-full max-h-[600px]'>
					<LastProject project={lastProject} section={section} />
				</div>
			)}
			{data.length >= 2 && (
				<div className='flex flex-col w-full h-full text-white p-3'>
					<header className='flex w-full justify-start'>
						<h3 className='text-xl md:text-2xl p-2 pb-3'>Más obras</h3>
					</header>
					<div className='w-full h-full flex flex-wrap gap-2'>
						{data
							.filter((project) => !project.isLastProject)
							.map((project) => (
								<ProjectCard key={project._id} project={project} section={section} />
							))}
					</div>
				</div>
			)}
		</section>
	);
};
export default TrabajosPage;
