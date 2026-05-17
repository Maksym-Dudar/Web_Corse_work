import { memo, type InputHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: ReactNode;
	valueName?: ReactNode;
}

function Radio({ label, valueName, checked, ...rest }: Props) {
	const style = checked ? "bg-grey" : "bg-white";

	return (
		<label
			className={twMerge(
				"flex flex-row py-3 px-3 sm:px-2 md:px-3 lg:px-4 border-1 border-black rounded-md justify-between items-center",
				style,
			)}
		>
			<div className='flex flex-row gap-4  items-center'>
				<input type='radio' {...rest} checked={checked} />
				<p className='text-black text-14 sm:text-16 font-inter font-400 leading-160'>
					{label}
				</p>
			</div>
			<p className='text-black text-14 sm:text-16  font-inter font-400 leading-160'>
				{valueName}
			</p>
		</label>
	);
}

export default memo(Radio);