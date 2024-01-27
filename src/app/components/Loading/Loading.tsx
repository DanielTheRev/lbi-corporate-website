const Loading = () => {
	return (
		<div className='flex w-full h-screen max-h-[400px] items-center justify-center animate-fade-down animate-duration-[500ms]'>
			<div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
				cargando...
			</div>
		</div>
	);
};
export default Loading;
