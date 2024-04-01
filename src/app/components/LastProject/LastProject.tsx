import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import Image from 'next/image';
import GoProjectBtn from './components/goProjectBtn';

interface Props {
	section: string;
	project: Project;
}

const LastProject: React.FC<Props> = ({ project, section }) => {
	return (
		<article className='flex flex-col w-full h-full max-w-[1200px] mx-auto bg-neutral-200/50 px-4 py-5 gap-3 rounded-lg items-start animate-fade-down animate-duration-[500ms]'>
			<span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400'>
				{section}
			</span>
			<header className='inline-flex w-full justify-between items-center gap-2 text-blue-700/80'>
				<h2 className='md:text-2xl'>{project.ProjectTitle}</h2>
				<GoProjectBtn projectID={project._id} section={section} />
			</header>
			<div className='flex flex-col w-full overflow-hidden gap-4'>
				<p className='w-full text-xs md:text-base text-slate-700 whitespace-pre-line line-clamp-2 overflow-hidden'>
					{project.ProjectDescription}
				</p>
				<div className='flex w-full h-screen max-h-[100px] md:max-h-72 rounded gap-1 overflow-hidden'>
					{project.ProjectImgs.map(({ asset_id, secure_url }) => (
						<picture className='w-full h-full relative' key={asset_id}>
							<Image
								className='object-cover'
								alt={`imagen del proyecto ${project.ProjectTitle}`}
								src={secure_url}
								priority
								fill
								sizes='(max-width: 300px)'
							/>
						</picture>
					))}
				</div>
			</div>
		</article>
	);
};
export default LastProject;
