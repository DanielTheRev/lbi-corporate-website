import { CloudinaryImgRef } from './cloudinary.model';

export interface HomeBannerType {
	_id?: string;
	banner: string;
	description: string;
	images: { _id?: string; imgRef: CloudinaryImgRef }[];
}
