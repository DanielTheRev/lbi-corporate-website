import { Project } from '../../models/projects.model';
import FancyProjectSlider from '../components/FancyProjectSlider';

const getProjectData = async (data: { section: string; _id: string }) => {
	const res = await fetch(`${process.env.SERVER_URL}/projects/getProject`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		},
		next: {
			revalidate: 3600
		}
	});
	const project = (await res.json()) as { status: string; project: Project };
	return project;
};
interface Params {
	params: { section: string; id: string };
}

const TrabajoPage = async ({ params: { id, section } }: Params) => {
	const { project } = await getProjectData({ section: section.split('-').join(' '), _id: id });

	return (
		<section className='flex flex-col md:flex-row w-full h-full bg-red-950/10 text-white p-2 mt-10 overflow-hidden'>
			<header className='flex flex-col h-full justify-center items-center w-full md:p-3 animate-fade-up animate-duration-[500ms]'>
				<h1 className='text-xl md:text-4xl text-blue-700 mb-2 text-balance text-center'>
					{project.ProjectTitle}
				</h1>
				<p className='w-full md:max-w-[90%] h-full bg-slate-950/10 rounded text-xs md:text-base text-gray-300 whitespace-pre-line text-pretty p-1 mb-3 md:px-2 md:py-4'>
					{project.ProjectDescription}
				</p>
			</header>
			<div className='flex flex-col w-full h-full animate-fade-up animate-duration-[500ms]'>
				<FancyProjectSlider data={project} />
			</div>
		</section>
	);
};
export default TrabajoPage;
