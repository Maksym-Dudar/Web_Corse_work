import type { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
	label: string;
}

export function Label({ id, label, className,  ...props }: Props) {
	return (
		<label
			htmlFor={id}
			className={twMerge(className, 'text-inter text-10 md:text-12 font-700 leading-100 text-description_grey pb-[4.5px]')}
			{...props}
		>
			{label}
		</label>
	);
}
