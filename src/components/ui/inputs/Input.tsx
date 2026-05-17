"use client";

import { memo, useId, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./FieldError";
import { Label } from "./Label";

type TVariantInput = "outlined" | "borderless";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	variant?: TVariantInput;
	errorMessage?: string;
	label?: string;
}

function Input({
	variant = "outlined",
	className,
	errorMessage,
	label,
	...props
}: Props) {
	const generatedId = useId();

	const baseStyle =
		"w-full text-inter text-14 md:text-16 font-400 leading-160 px-2 mt-2 bg-white autofill:bg-white";
	const variants = {
		outlined: "h-10 px-4 border border-solid rounded-md",
		borderless: "border-b-1 border-solid border-white_grey py-1 ",
	};

	return (
		<div className='flex flex-col w-full'>
			{label && <Label id={generatedId} label={label} />}
			<input
				id={generatedId}
				className={twMerge(baseStyle, variants[variant], className)}
				{...props}
			/>
			<FieldError errorMessage={errorMessage} />
		</div>
	);
}

export default memo(Input);
