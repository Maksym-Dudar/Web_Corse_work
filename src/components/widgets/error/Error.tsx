interface Props {
	message: string;
}

export function Error({ message }: Props) {
	return (
		<div className='text-20 md:text-28 lg:text-32 text-red font-500 leading-160 text-center py-16 sm:py-20 lg:py-28 w-full'>
			Помилка: {message}
		</div>
	);
}
