import { BannersResponse } from '../models/banners.model';

export async function GetBanners(): Promise<BannersResponse> {
	console.log('ObteniendoBanners');
	const res = await fetch(`${process.env.SERVER_URL}/presentacion/getInfoPresentacion`, {
		next: {
			revalidate: 3600
		}
	});

	return res.json();
}
