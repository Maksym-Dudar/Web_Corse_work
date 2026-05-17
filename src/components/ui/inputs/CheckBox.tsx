import type { InputHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./FieldError";

interface Props
	extends InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
	errorMessage?: string;
}

export default function CheckBox({
	className,
	children,
	errorMessage,
	...props
}: Props) {
	const baseStyle = "w-5 h-5 border-1 border-description_grey ";

	return (
		<div className='flex flex-col gap-1 w-full'>
			<div className='flex flex-row w-full gap-3 items-center'>
				<input
					type='checkbox'
					className={twMerge(baseStyle, className)}
					{...props}
				/>
				{children}
			</div>
			<FieldError errorMessage={errorMessage} />
		</div>
	);
}
