import { CloudinaryImgRef } from './cloudinary.model';

export interface PresentacionInfo {
	_id?: string;
	description: string;
	images: {
		_id: string;
		imgRef: CloudinaryImgRef;
	}[];
}

export interface News {
  _id?: string;
  title: string;
  description: string;
  images: { _id: string; imgRef: CloudinaryImgRef }[];
}

