import axios from 'axios';
import { Section } from '../models/projects.model';
import Image from 'next/image';
import ProjectSlider from './components/projectsSlider';

const getSectionData = async (section: string) => {
	const body = {
		section: section.split('-').join(' ')
	};

	const res = await axios.post(
		'https://dosmetal.com.ar/api/dosmetal-page/projects/getSectionData',
		body
	);
	return res.data as Section;
};

const TrabajosPage = async ({ params }: any) => {
	const sectionData = await getSectionData(params.section);
	const LastProject = sectionData.data.find((project) => project.isLastProject);

	return (
		<article className='flex flex-col w-full h-full min-h-screen animate-fade-down animate-duration-[2000ms]'>
			<header className='w-full text-center p-5 bg-teal-800'>
				<h1 className='text-2xl text-white'>Nuestros trabajos de {sectionData.section}</h1>
			</header>
			{LastProject && (
				<section className='flex flex-col items-end w-full p-3 bg-teal-800 text-white shadow-lg z-10'>
					<span className='bg-blue-700 p-2 rounded-full text-sm text-white'>
						Nuestro proyecto mas reciente
					</span>
					<h2 className='w-full p-5 pl-0 pb-0 text-left text-2xl'>
						{LastProject.ProjectTitle}
					</h2>
					<div className='flex flex-col w-full overflow-hidden gap-4'>
						<p className='w-full p-2 text-justify text-slate-300'>
							{LastProject.ProjectDescription}
						</p>
						<section className='flex w-full max-h-80 rounded overflow-hidden'>
							{LastProject.ProjectImgs.map((image) => (
								<picture className='flex w-full h-full relative' key={image.asset_id}>
									<Image
										alt={LastProject.ProjectTitle}
										src={image.secure_url}
										height={1080}
										width={1920}
									/>
								</picture>
							))}
						</section>
					</div>
				</section>
			)}
			{sectionData.data.length <= 0 && 
			<section className='flex w-full h-screen justify-center items-center text-2xl text-white'>Todavia no hay proyectos que mostrar</section>
			}
			{sectionData.data.length >= 1 && (
				<section className='flex flex-col w-full h-full bg-teal-700 text-white p-3 '>
					<header className='flex w-full justify-start'>
						<h3 className='text-2xl p-2 pb-3'>Explora nuestros proyectos</h3>
					</header>
					<div
						className='w-full h-full'
						style={{
							display: 'grid',
							width: '100%',
							height: '100%',
							gridTemplateColumns: ' repeat(auto-fill,minmax(35rem,1fr))',
							gridAutoRows: '12rem',
							padding: '0.4rem',
							gap: '0.5rem'
						}}>
						{/* <ProjectSlider data={sectionData.data} /> */}
						{sectionData.data
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
											Ver Obra
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
