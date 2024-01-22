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
		cache: 'no-cache'
	});
	const data = await res.json();
	return data as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const { section, data } = await getSectionData(params.section);
	const lastProject = data.find((project) => project.isLastProject);
	return (
		<article className='flex flex-col w-full h-full animate-fade-left animate-duration-[500ms]'>
			{lastProject && <LastProject project={lastProject} section={section} />}
			{data.length <= 0 && (
				<section className='flex w-full h-screen justify-center items-center text-2xl max-[400px]:text-xl text-white'>
					Todavia no hay proyectos que mostrar
				</section>
			)}
			{data.length >= 2 && (
				<section className='flex flex-col w-full h-full bg-teal-700 text-white p-3 '>
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
						{/* <ProjectSlider data={sectionData.data} /> */}
						{data
							.filter((project) => !project.isLastProject)
							.map(({ _id, ProjectTitle, ProjectImgs, ProjectDescription }) => (
								<div
									key={_id}
									className='flex w-full h-full overflow-hidden bg-slate-200 text-black rounded'>
									<picture className='flex relative w-3/12 overflow-hidden'>
										<Image
											src={ProjectImgs[0].secure_url}
											className='object-cover'
											alt=''
											width={1920}
											height={1080}
										/>
									</picture>
									<div className='flex w-full flex-col items-center justify-between p-1 gap-2'>
										<h5 className='pt-2 text-center'>{ProjectTitle}</h5>
										<p className='overflow-hidden text-ellipsis text-sm p-1 max-h-20'>
											{ProjectDescription}
										</p>
										<button className='bg-blue-600 p-1 px-2 rounded text-white'>
											<Link href={`${section.split(' ').join('-')}/${_id}`}>
												Ver Obra
											</Link>
										</button>
									</div>
								</div>
							))}
					</div>
				</section>
			)}
		</article>
	);
};
export default TrabajosPage;
