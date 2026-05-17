"use client";

import { memo, useState, type InputHTMLAttributes } from "react";
import Image from "next/image";
import Input from "@/components/ui/inputs/Input";
import { IMAGE } from "@/config";

interface PasswordInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
	errorMessage?: string;
}

export default function PasswordInput({ placeholder, errorMessage, ...props }: PasswordInputProps) {
	const [show, setShow] = useState(false);

	const icon = {
		src: show ? IMAGE.EYE_OPEN.src : IMAGE.EYE_CLOSE.src,
		alt: show ? IMAGE.EYE_OPEN.alt : IMAGE.EYE_CLOSE.alt,
		height: show ? 9 : 14,
	};

	return (
		<div className='relative w-full'>
			<Input
				{...props}
				placeholder={placeholder}
				variant='borderless'
				type={show ? "text" : "password"}
				errorMessage={errorMessage}
			/>
			<button
				type='button'
				className='absolute right-2 top-2'
				onClick={() => setShow((v) => !v)}
					aria-label={show ? "Приховати пароль" : "Показати пароль"}
			>
				<Image src={icon.src} alt={icon.alt} width={20} height={icon.height} />
			</button>
		</div>
	);
}
