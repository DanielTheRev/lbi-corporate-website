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
		<article className='flex flex-col w-full h-screen max-h-[550px] max-w-[1200px] mx-auto items-start text-white gap-3 py-2'>
			<span className='bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400'>
				{section}
			</span>
			<header className='flex w-full items-center gap-2'>
				<h2 className='text-2xl'>{project.ProjectTitle}</h2>
			</header>
			<div className='flex flex-col w-full h-full overflow-hidden gap-4'>
				<p className='w-full text-pretty text-gray-400 whitespace-pre-line'>
					{project.ProjectDescription}
				</p>
				<div className='flex w-full h-full max-h-80 rounded gap-1 overflow-hidden'>
					{project.ProjectImgs.map((image) => (
						<picture className='w-full h-full relative overflow-hidden' key={image.asset_id}>
							<Image
								className='object-cover'
								alt={project.ProjectTitle}
								src={image.secure_url}
								fill
								sizes='(max-width: 200px)'
							/>
						</picture>
					))}
				</div>
			</div>
			<GoProjectBtn projectID={project._id} section={section} />
		</article>
	);
};
export default LastProject;
