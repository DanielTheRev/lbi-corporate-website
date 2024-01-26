import HomeBanner from './HomePage/news-banner/HomeBanner';
import Navbar from './components/Navbar/Navbar';

export default async function Home() {
	return (
		<>
			<Navbar />
			<HomeBanner />;
		</>
	);
}
