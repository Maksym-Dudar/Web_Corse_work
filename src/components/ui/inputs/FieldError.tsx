interface Props {
	errorMessage?: string
}

export function FieldError({ errorMessage }: Props) {
	return (
		<p className='w-full h-5 text-inter text-12 md:text-14 font-400 leading-160 text-red px-2'>
			{errorMessage ? errorMessage : " "}
		</p>
	);
}
