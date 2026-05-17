import Image from "next/image";
import type { IComment } from "../../widgets/product/types";
import { useWindowSize } from "@/hooks";
import { IMAGE } from "@/config/image.config";
import { mobileSize } from "@/constants/windowSize";

export function CommentCard({
	id,
	firstName,
	createdAt,
	rating,
	avatar,
	text,
}: IComment) {
	const { width } = useWindowSize();

	const dateComment = new Date(createdAt);

	const starSize = width > mobileSize ? 16 : 13;

	return (
		<div className='flex flex-row gap-5 md:gap-10 pb-6 border-b border-grey w-full'>
			<div className='w-12 h-12'>
				<Image
					src={avatar}
					alt={firstName}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "auto", borderRadius: "50%" }}
				/>
			</div>
			<section className='flex flex-col gap-2 md:gap-4 w-fit'>
				<h6 className='text-16 md:text-20 font-inter font-600 leading-160'>
					{firstName}
				</h6>
				<div className='flex flex-row gap-1'>
					{Array(rating)
						.fill(0)
						.map((_, i) => (
							<Image
								src={IMAGE.STAR_ACTIVE.src}
								alt={IMAGE.STAR_ACTIVE.alt}
								width={starSize}
								height={starSize}
								key={i}
							/>
						))}
				</div>
				<p className='text-12 md:text-16 font-inter font-400 leading-160 text-description_grey'>
					{text}
				</p>
				<p className='text-10 md:text-14 font-400 leading-160 text-footerline pt-1 md:pt-2'>
					{dateComment.getFullYear()}-{dateComment.getMonth()}-
					{dateComment.getDate()}
				</p>
			</section>
		</div>
	);
}
