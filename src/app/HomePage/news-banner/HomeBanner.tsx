import Slider from './components/Slider';
import LastProject from '@/app/components/LastProject/LastProject';
import { GetBanners } from '@/app/services/banners.service';

const HomeBanner = async () => {
	const info = await GetBanners();
	return (
		<section className='relative flex flex-col gap-4 w-full h-full overflow-x-hidden p-1 animate-fade-down animate-duration-[500ms] text-white/90'>
			<Slider data={info} />

			<header className='flex w-full max-w-[1200px] mx-auto py-3 justify-start items-center'>
				<h2 className='text-4xl text-balance text-blue-600'>Nuestras últimas obras</h2>
			</header>
			{info.last_projects.map(
				({ last_project, section }) =>
					last_project && (
						<LastProject key={last_project?._id} project={last_project} section={section} />
					)
			)}
			{/* <article className='flex flex-col w-full h-auto max-w-[1200px] mx-auto'>
				<div className='flex flex-col w-full gap-6'></div>
			</article> */}
		</section>
	);
};
export default HomeBanner;
