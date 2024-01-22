import { Project } from '../../models/projects.model';
import ProjectSlider from '../components/projectsSlider';

const getProjectData = async (data: { section: string; _id: string }) => {
	const res = await fetch(`${process.env.SERVER_URL}/projects/getProject`, {
		method: 'POST',
		body: JSON.stringify(data),
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		cache: 'no-cache'
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
		<section className='flex  w-full flex-grow h-full bg-slate-950/30 text-white p-2'>
			<header className='flex flex-col justify-center h-full items-center w-full p-3'>
				<h1 className='text-2xl text-green-700'>{project.ProjectTitle}</h1>
				<p className='info-bar w-full max-w-[80%] h-full bg-slate-950/10 rounded text-white/60 px-2 py-4 max-[500px]:h-max whitespace-pre-line text-pretty'>
					{project.ProjectDescription}
				</p>
			</header>
			<div className='grid grid-rows-[max-content_1fr] items-center w-full gap-2 max-[500px]:grid-cols-1 max-[500px]:grid-rows-2 p-2 overflow-hidden'>
				<div className='w-full h-full border overflow-hidden'>
					<ProjectSlider data={project} />
				</div>
			</div>
		</section>
	);
};
export default TrabajoPage;
