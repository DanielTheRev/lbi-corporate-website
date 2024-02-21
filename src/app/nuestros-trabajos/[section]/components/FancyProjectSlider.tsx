'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import { Project } from '../../models/projects.model';

interface Props {
	data: Project;
}

const FancyProjectSlider: React.FC<Props> = ({ data }) => {
	const container_ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const container = container_ref.current;
		const options: any = {
			AutoPlay: {
				timeout: 1000
			},
			Thumbs: {
				type: 'none'
			}
		};

		new Carousel(container, options, { Thumbs, Autoplay });
		Fancybox.bind(container, '[data-fancybox]');
		return () => {
			Fancybox.unbind(container);
			Fancybox.close();
		};
	}, []);

	return (
		<div className='f-carousel' id='myCarousel' ref={container_ref}>
			{data.ProjectImgs.map(({ secure_url, width, height }) => (
				<a
					href={secure_url}
					key={secure_url}
					className='relative f-carousel__slide'
					data-thumb-src={secure_url}
					data-fancybox='gallery'>
					<Image
						src={secure_url}
						alt={`imagen del proyecto ${data.ProjectTitle}`}
						width={Number(width)}
						height={Number(height)}
						priority
						className='aspect-video object-cover'
						data-lazy-src={secure_url}
						sizes={'(max-width: 300px)'}
					/>
				</a>
			))}
		</div>
	);
};
export default FancyProjectSlider;
