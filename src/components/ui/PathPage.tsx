import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "@/config/image.config";

interface Props {
	label: string;
	src: string;
}

export default function PathPage({ label, src }: Props) {
	return (
		<div className='flex items-center gap-2'>
			<Link
				className='font-inter text-description_grey text-12 md:text-14'
				href={src}
			>
				{label}
			</Link>
			<Image src={IMAGE.ARROW.src} alt={IMAGE.ARROW.alt} width={5} height={8} />
		</div>
	);
}
