'use client';

import { Project } from '@/app/nuestros-trabajos/models/projects.model';
import { News, PresentacionInfo } from '../../models/presentacion.model';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import NewsBanner from './NewsBanner';
import { OptionsType } from '@fancyapps/ui/types/Carousel/options';
import PresentacionBanner from './PresentationBanner';

interface Props {
	data: {
		Presentacion: PresentacionInfo;
		NewsList: News[];
		last_projects: {
			_id: string;
			section: string;
			last_project: Project;
		}[];
	};
}

const NewsBannerSlider: React.FC<Props> = ({ data }) => {
	const container_ref = useRef<HTMLDivElement | null>(null);
	const { Presentacion, NewsList } = data;
	useEffect(() => {
		const container = container_ref.current;
		const options: any = {
			Autoplay: {
				timeout: 5000,
				showProgress: false
			},
			Thumbs: {
				type: undefined
			},
			Navigation: {}
		};

		new Carousel(container, options, { Autoplay });
	}, []);

	return (
		<div
			className='f-carousel py-5 overflow-hidden bg-neutral-200/50 dark:bg-slate-800/30'
			id='myCarousel'
			ref={container_ref}>
			<div className='f-carousel__slide'>
				<PresentacionBanner data={Presentacion} />
			</div>
			{NewsList.map((News) => (
				<div key={News._id} className='f-carousel__slide'>
					<NewsBanner data={News} />
				</div>
			))}
		</div>
	);
};
export default NewsBannerSlider;
