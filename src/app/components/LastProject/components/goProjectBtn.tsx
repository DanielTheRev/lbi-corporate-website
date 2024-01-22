'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
	section: string;
	projectID: string;
}

const GoProjectBtn: React.FC<Props> = ({ section, projectID }) => {
	const pathName = usePathname();
	const projectSection = pathName.split('/')[2] || section;
	return (
		<Link href={`${projectSection}/${projectID}`} className='ml-auto btn-success'>
			Ver proyecto
		</Link>
	);
};
export default GoProjectBtn;
