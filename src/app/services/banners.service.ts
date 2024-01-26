import { BannersResponse } from '../models/banners.model';

export async function GetBanners(): Promise<BannersResponse> {
	const res = await fetch(`${process.env.SERVER_URL}/presentacion/getInfoPresentacion`, {
		next: {
			revalidate: 60000
		}
	});

	return res.json();
}
