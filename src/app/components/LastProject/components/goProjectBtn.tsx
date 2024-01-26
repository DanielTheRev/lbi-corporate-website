'use client';
import Link from 'next/link';

interface Props {
	section: string;
	projectID: string;
}

const GoProjectBtn: React.FC<Props> = ({ section, projectID }) => {
	const projectSection = section.split(' ').join('-');
	return (
		<Link href={`/nuestros-trabajos/${projectSection}/${projectID}`} scroll className='block whitespace-nowrap btn-success px-2 py-1'>
			Más detalles
		</Link>
	);
};
export default GoProjectBtn;
