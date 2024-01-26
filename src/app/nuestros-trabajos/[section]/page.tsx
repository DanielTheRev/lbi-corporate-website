import LastProject from '@/app/components/LastProject/LastProject';
import { Section } from '../models/projects.model';
import Image from 'next/image';
import Link from 'next/link';

const getSectionData = async (section: string) => {
	const body = {
		section: section.split('-').join(' ')
	};
	const res = await fetch(`${process.env.SERVER_URL}/projects/getSectionData`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		},
		next: {
			revalidate: 3600
		}
	});
	const data = await res.json();
	return data as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const { section, data } = await getSectionData(params.section);
	const lastProject = data.find((project) => project.isLastProject);

	if (data.length <= 0)
		return (
			<section className='flex w-full h-screen justify-center items-center text-2xl max-[400px]:text-xl text-white'>
				Todavia no hay proyectos que mostrar
			</section>
		);
	return (
		<section className='flex flex-col w-full h-auto bg-red-950/10 text-white  overflow-hidden'>
			{lastProject && (
				<div className='flex w-full h-full max-h-[600px]'>
					<LastProject project={lastProject} section={section} />
				</div>
			)}
			{data.length >= 2 && (
				<div className='flex flex-col w-full h-full bg-neutral-700/20 text-white p-3'>
					<header className='flex w-full justify-start'>
						<h3 className='text-2xl p-2 pb-3'>Explora nuestros proyectos</h3>
					</header>
					<div
						className='w-full h-full max-[400px]:grid-cols-1'
						style={{
							display: 'grid',
							width: '100%',
							height: '100%',
							gridTemplateColumns: ' repeat(auto-fill,minmax(26rem,1fr)',
							gridAutoRows: 'auto',
							padding: '0.4rem',
							gap: '0.5rem'
						}}>
						{data
							.filter((project) => !project.isLastProject)
							.map(({ _id, ProjectTitle, ProjectImgs, ProjectDescription }) => (
								<Link
									key={_id}
									href={`./${section.split(' ').join('-')}/${_id}`}
									className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
									<Image
										className='object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
										src={ProjectImgs[0].secure_url}
										alt=''
										height={200}
										width={200}
										sizes='(max-width: 300px)'
									/>
									<div className='flex flex-col justify-between p-4 leading-normal'>
										<h5 className='mb-2 font-bold tracking-tight text-gray-900 dark:text-white'>
											{ProjectTitle}
										</h5>
										<p className='mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis h-28'>
											{ProjectDescription}
										</p>
									</div>
								</Link>
							))}
					</div>
				</div>
			)}
		</section>
	);
};
export default TrabajosPage;
