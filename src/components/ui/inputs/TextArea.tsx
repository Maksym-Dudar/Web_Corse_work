"use client";

import { memo, useId, type TextareaHTMLAttributes } from "react";
import { Label } from "..";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	errorMessage?: string;
	label?: string;
}

function TextArea({ errorMessage, label, ...props }: Props) {
	const generatedId = useId();

	return (
		<div>
			{label && <Label id={generatedId} label={label} />}
			<textarea
				id={generatedId}
				rows={10}
				style={{
					resize: "none",
					overflowY: "auto",
				}}
				className='w-full text-inter text-14 md:text-16 font-400 leading-160 border border-solid px-4 rounded-md text-black border-description_grey border-opacity-0'
				{...props}
			/>
		</div>
	);
}

export default memo(TextArea);
