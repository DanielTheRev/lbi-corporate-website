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
	searchParams: {};
}

const TrabajoPage = async ({ params: { id, section } }: Params) => {
	const { project } = await getProjectData({ section: section.split('-').join(' '), _id: id });

	return (
		<section className='grid grid-cols-1 grid-rows-[max-content_1fr] w-full min-h-screen bg-teal-950 text-white p-2'>
			<header className='flex justify-center h-full items-center w-full p-3'>
				<h1 className='text-xl'>{project.ProjectTitle}</h1>
			</header>
			<div className='grid grid-rows-[max-content_1fr] items-center w-full gap-2 max-[500px]:grid-cols-1 max-[500px]:grid-rows-2 min-h-full p-2 overflow-hidden'>
				<p className='info-bar w-full h-full border bg-gray-200 rounded text-gray-800 font-bold px-2 py-4 max-[500px]:h-max'>
					{project.ProjectDescription}
				</p>
				<div className='w-full h-full border overflow-hidden'>
					<ProjectSlider data={project} />
				</div>
			</div>
		</section>
	);
};
export default TrabajoPage;
