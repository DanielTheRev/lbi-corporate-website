'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Carousel } from '@fancyapps/ui/';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
import { Project } from '../../models/projects.model';

interface Props {
	data: Project;
}

const FancyProjectSlider: React.FC<Props> = ({ data }) => {
	useEffect(() => {
		const container = document.getElementById('myCarousel');
		const options: any = {
			AutoPlay: {
				timeout: 1000
			},
			Thumbs: {
				type: 'classic'
			}
		};

		new Carousel(container, options, { Thumbs, Autoplay });
		Fancybox.bind(container, '[data-fancybox]');
	}, []);

	return (
		<div className='f-carousel' id='myCarousel'>
			{data.ProjectImgs.map(({ secure_url }) => (
				<a
					href={secure_url}
					key={secure_url}
					className='f-carousel__slide'
					data-thumb-src={secure_url}
					data-fancybox='gallery'>
					<Image
						src={secure_url}
						alt=''
						className='aspect-video'
						data-lazy-src={secure_url}
						fill
						sizes={'(max-width: 300px)'}
					/>
				</a>
			))}
		</div>
	);
};
export default FancyProjectSlider;
