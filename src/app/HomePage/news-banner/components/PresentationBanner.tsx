import Image from 'next/image';
import { PresentacionInfo } from '../../models/presentacion.model';

interface Props {
	data: PresentacionInfo;
}

const PresentacionBanner: React.FC<Props> = ({ data }) => {
	return (
		<article className='w-full h-full flex my-3'>
			<div className='flex flex-col w-full max-w-[1200px] mx-auto h-full justify-center items-center gap-5'>
				<div className='flex w-full justify-center items-center'>
					<div className='flex flex-col w-full justify-center items-center'>
						<header className='text-center mb-4 text-blue-700/80 dark:text-white'>
							<h1 className='text-3xl'>LBI CONSTRUCCIONES </h1>
						</header>

						<p className='w-full md:max-w-[75%] text-xs md:text-base text-slate-600 dark:text-white/70 text-pretty text-center whitespace-pre-line'>
							{data.description}
						</p>
					</div>
				</div>

				<div className='flex w-full h-screen max-h-[100px] md:max-h-[250px] gap-3'>
					{data.images.map((image) => (
						<picture
							className='w-full h-full relative rounded-md overflow-hidden'
							key={image._id}>
							<Image
								src={image.imgRef.secure_url}
								className='object-cover'
								alt={data.description}
								fill
								priority
								sizes='(max-width: 300px)'
							/>
						</picture>
					))}
				</div>
			</div>
		</article>
	);
};
export default PresentacionBanner;
