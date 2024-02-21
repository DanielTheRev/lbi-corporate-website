import LastProject from '@/app/components/LastProject/LastProject';
import { GetBanners } from '@/app/services/banners.service';
import NewsBannerSlider from './components/NewsBannerSlider';

const HomeBanner = async () => {
	const banners = await GetBanners();
	return (
		<section className='relative flex flex-col gap-4 w-full h-full overflow-x-hidden p-1 animate-fade-right animate-duration-[500ms] text-white/90'>
			<NewsBannerSlider data={banners} />
			<header className='flex w-full max-w-[1200px] mx-auto py-3 justify-start items-center'>
				<h2 className='text-2xl px-3 md:text-4xl text-balance text-blue-600'>Últimas obras</h2>
			</header>
			{banners.last_projects.map(
				({ last_project, section }) =>
					last_project && (
						<LastProject key={last_project?._id} project={last_project} section={section} />
					)
			)}
		</section>
	);
};
export default HomeBanner;
