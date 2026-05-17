import Image from "next/image";
import Link from "next/link";
import { IMAGE } from "@/config/image.config";

interface Props {
	title: string;
	link: string;
}

export function ArrowLink({ title, link }: Props) {
	return (
		<Link
			href={link}
			className='flex w-fit items-center gap-1 pt-2 border-b border-black'
		>
			<span className='font-inter text-14 lg:text-16 font-500 leading-170 text-black'>
				{title}
			</span>
			<Image
				src={IMAGE.ARROW_BLACK.src}
				alt={IMAGE.ARROW_BLACK.alt}
				width={20}
				height={20}
			/>
		</Link>
	);
}
