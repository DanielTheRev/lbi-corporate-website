import { News } from '../../models/presentacion.model';
import Image from 'next/image'

interface Props {
	data: News;
}

const NewsBanner: React.FC<Props> = ({ data: News }) => {
	return (
		<article className='flex flex-col justify-center w-full max-w-[1200px] mx-auto h-full gap-3'>
			<div className='flex flex-col w-full gap-3'>
				<header>
					<h3 className='text-xl text-white/70 text-pretty md:text-3xl'>{News.title}</h3>
				</header>
				<p className='w-full h-full text-sm md:text-md text-pretty text-white/70'>{News.description}</p>
			</div>

			<div className='flex w-full h-screen max-h-[100px] md:max-h-80 overflow-hidden shadow-lg rounded border'>
				{News.images.map((image) => (
					<div className='w-full h-full relative overflow-hidden' key={image._id}>
						{image.imgRef && (
							<Image
								src={image.imgRef.secure_url}
								className='object-cover'
								alt={News.title}
								fill
								sizes='(max-width: 300px)'
							/>
						)}
					</div>
				))}
			</div>
		</article>
	);
};
export default NewsBanner;
