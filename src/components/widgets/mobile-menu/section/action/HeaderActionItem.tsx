import Link from "next/link";
import Image from "next/image";
import type { IImage, IPage } from "@/config";

interface Props extends IPage, IImage {
	size: number;
}

export function HeaderActionItem({ label, link, src, alt, size }: Props) {
	return (
		<div className='w-full border-b-1 border-white_grey pb-2'>
			<Link
				href={link}
				className='flex flex-row justify-between text-16 font-500 leading-170'
			>
				{label}
				<div className='flex flex-row gap-1 items-center'>
					<Image src={src} alt={alt} width={24} height={24} />
					<div className='w-5 h-5 bg-black text-white flex items-center justify-center rounded-full text-12 font-700 leading-80'>
						{size}
					</div>
				</div>
			</Link>
		</div>
	);
}
