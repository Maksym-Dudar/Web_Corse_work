interface Props {
	onClick: () => void;
	size: number;
	text?: string;
}

export default function ButtonCross({ onClick, size, text }: Props) {
	return (
		<button
			onClick={onClick}
			type='button'
			aria-label='Закрити'
			className='flex items-center justify-center cursor-pointer gap-1 w-fit h-fit'
		>
			<div className='relative w-6 h-6 flex items-center justify-center cursor-pointer'>
				<span
					className={`absolute w-${size} h-0.5 bg-dark_grey rotate-45`}
				></span>
				<span
					className={`absolute w-${size} h-0.5 bg-dark_grey -rotate-45`}
				></span>
			</div>
			<p className="text-14 font-inter font-600 leading-160 text-description_grey">{text}</p>
		</button>
	);
}
