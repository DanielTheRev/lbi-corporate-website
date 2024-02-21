import { News } from '../../models/presentacion.model';
import Image from 'next/image';

interface Props extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'children'> {
	data: News;
}

const NewsBanner: React.FC<Props> = ({ data: News }) => {
	return (
		<article className='flex flex-col justify-center w-full max-w-[1200px] mx-auto h-full my-2 gap-3'>
			<div className='flex flex-col w-full gap-3'>
				<header className='text-center'>
					<h3 className='text-xl text-blue-600 text-pretty md:text-3xl'>{News.title}</h3>
				</header>
				<p className='w-full h-full text-xs md:text-base text-pretty dark:text-white/70 text-slate-600'>
					{News.description}
				</p>
			</div>

			<div className='flex w-full h-screen max-h-[100px] md:max-h-[250px] overflow-hidden shadow-lg gap-1 rounded '>
				{News.images.map((image) => (
					<div className='w-full h-full relative rounded-md overflow-hidden' key={image._id}>
						{image.imgRef && (
							<Image
								src={image.imgRef.secure_url}
								className='object-cover'
								alt={News.title}
								fill
								sizes='(max-width: 300px)'
								priority
							/>
						)}
					</div>
				))}
			</div>
		</article>
	);
};
export default NewsBanner;
