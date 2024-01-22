import NewsBanner from './sections/news-banner/newsBanner';
import Services from './sections/services/services';

export default function Home() {
	return (
		<div className='flex flex-col w-full min-h-full'>
			<NewsBanner />
			{/* <Services /> */}
		</div>
	);
}
