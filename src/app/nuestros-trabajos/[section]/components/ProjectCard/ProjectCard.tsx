import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	project: Project;
	section: string;
}

const ProjectCard: React.FC<Props> = ({ project, section }) => {
	const { _id, ProjectImgs, ProjectDescription, ProjectTitle } = project;
	return (
		<Link
			href={`./${section.split(' ').join('-')}/${_id}`}
			className='flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow w-full md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<Image
				className='object-cover w-full m-1 rounded-t-lg h-44 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
				src={ProjectImgs[0].secure_url}
				width={Number(ProjectImgs[0].width)}
				height={Number(ProjectImgs[0].height)}
				alt=''
			/>
			<div className='flex flex-col w-full p-4 overflow-hidden'>
				<h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>
					{ProjectTitle}
				</h5>
				<p className='mb-3 w-full text-xs md:text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-2'>
					{ProjectDescription}
				</p>
			</div>
		</Link>
	);
};
export default ProjectCard;
