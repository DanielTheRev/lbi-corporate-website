import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import Image from 'next/image';
import Link from 'next/link';
import GoProjectBtn from './components/goProjectBtn';

interface Props {
	section: string;
	project: Project;
}

const LastProject: React.FC<Props> = ({ project, section }) => {
	return (
		<article className='flex flex-col w-full h-full max-w-[1200px] mx-auto bg-slate-800/10 px-4 py-5 gap-3 rounded-lg items-start text-white animate-fade-down animate-duration-[500ms]'>
			<span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400'>
				{section}
			</span>
			<header className='inline-flex w-full justify-between items-center gap-2'>
				<h2 className='md:text-2xl'>{project.ProjectTitle}</h2>
				<GoProjectBtn projectID={project._id} section={section} />
			</header>
			<div className='flex flex-col w-full overflow-hidden gap-4'>
				<p className='w-full  overflow-hidden text-gray-400 whitespace-pre-line text-nowrap text-ellipsis'>
					{project.ProjectDescription}
				</p>
				<div className='flex w-full h-screen max-h-[100px] md:max-h-72 rounded gap-1 overflow-hidden'>
					{project.ProjectImgs.map(({ asset_id, secure_url, width, height }) => (
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
