import LastProject from '@/app/components/LastProject/LastProject';
import { Section } from '../models/projects.model';
import ProjectCard from './components/ProjectCard/ProjectCard';

const getSectionData = async (_section: string) => {
	const section = _section.split('-').join(' ');
	console.log('Obteniendo: Section Data');
	const res = await fetch(`${process.env.SERVER_URL}/projects/getSectionData/${section}`, {
		next: {
			revalidate: 3600
		}
	});
	return (await res.json()) as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const { section, data } = await getSectionData(params.section);
	const lastProject = data.find((project) => project.isLastProject);

	if (data.length <= 0)
		return (
			<section className='flex w-full max-w-[1200px] mx-auto h-screen justify-center items-center text-2xl max-[400px]:text-xl text-slate-500 dark:text-white/70'>
				Todavía no hay proyectos que mostrar <br />
				Puedes revisar nuestras demás secciones para conocer mas de nuestro trabajo.
			</section>
		);
	return (
		<section className='flex flex-col w-full max-w-[1200px] mx-auto h-auto text-white  overflow-hidden'>
			{lastProject && (
				<div className='flex w-full h-full max-h-[600px] mt-2'>
					<LastProject project={lastProject} section={section} />
				</div>
			)}
			{data.length >= 2 && (
				<div className='flex flex-col w-full h-full p-3'>
					<header className='flex w-full justify-start text-blue-500 dark:text-white/70'>
						<h3 className='text-xl md:text-2xl p-2 pb-3'>También te puede interesar:</h3>
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
