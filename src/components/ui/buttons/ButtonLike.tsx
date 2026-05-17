import { IMAGE } from "@/config";
import Image from "next/image";
import { forwardRef, memo } from "react";

interface Props {
	isActive: boolean;
    onClick: () => void;
}

const ButtonLike = forwardRef<HTMLButtonElement, Props>(({ isActive, onClick }, ref) => {
	return (
		<button
			className='absolute right-2 sm:right-4 md:right-5 top-2 sm:top-4 md:top-5 p-1 sm:p-2 rounded-full bg-white cursor-pointer'
			ref={ref}
			onClick={onClick}
		>
			<Image
				src={isActive ? IMAGE.LIKE_ACTIVE.src : IMAGE.LIKE_NOT_ACTIVE.src}
				alt={isActive ? IMAGE.LIKE_ACTIVE.alt : IMAGE.LIKE_NOT_ACTIVE.alt}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "100%", height: "100%" }}
			/>
		</button>
	);
})
ButtonLike.displayName = "Button";

export default memo(ButtonLike);