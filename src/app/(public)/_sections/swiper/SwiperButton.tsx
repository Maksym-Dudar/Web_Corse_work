import { memo, type ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { IMAGE } from "@/config";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function SwiperButton({ className, ...props }: Props) {
	const baseStyle =
		"absolute top-40% translate-y-1/2 z-10 justify-center items-center rounded-full bg-white p-[10px] cursor-pointer";

	return (
		<button className={twMerge(baseStyle, className)} {...props}>
			<Image
				src={IMAGE.ARROW_BLACK.src}
				alt={IMAGE.ARROW_BLACK.alt}
				width={32}
				height={32}
				priority
			/>
		</button>
	);
}

export default memo(SwiperButton);
