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
			revalidate: 60000
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
		<section className='flex  w-full h-full min-h-[600px] bg-red-950/10 text-white p-2 overflow-hidden'>
			<header className='flex flex-col justify-center h-full items-center w-full p-3 animate-fade-up animate-duration-[500ms]'>
				<h1 className='text-4xl text-neutral-100 mb-4 text-balance text-center'>
					{project.ProjectTitle}
				</h1>
				<p className='w-full max-w-[80%] h-full bg-slate-950/20 rounded text-gray-400 px-2 py-4 max-[500px]:h-max whitespace-pre-line text-pretty'>
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
