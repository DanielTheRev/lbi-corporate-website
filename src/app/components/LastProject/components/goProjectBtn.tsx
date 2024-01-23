'use client';
import Link from 'next/link';

interface Props {
	section: string;
	projectID: string;
}

const GoProjectBtn: React.FC<Props> = ({ section, projectID }) => {
	const projectSection = section.split(' ').join('-');
	return (
		<Link href={`/nuestros-trabajos/${projectSection}/${projectID}`} scroll className='ml-auto btn-success'>
			Ver proyecto
		</Link>
	);
};
export default GoProjectBtn;
