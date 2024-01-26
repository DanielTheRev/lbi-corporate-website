const Loading = () => {
	return (
		<div className='fixed flex w-full h-full items-center justify-center border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 animate-fade-down animate-duration-[500ms]'>
			<div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
				cargando...
			</div>
		</div>
	);
};
export default Loading;
