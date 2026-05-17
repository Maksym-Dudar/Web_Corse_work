import Link from "next/link";
import Image from "next/image";
import { IMAGE, PAGE } from "@/config";

export function SocialLink() {
	return (
		<div className='flex flex-row gap-6'>
			<Link href={PAGE.INSTAGRAM.link}>
				<Image
					src={IMAGE.INSTAGRAM_WHITE.src}
					alt={IMAGE.INSTAGRAM_WHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.FACEBOOK.link}>
				<Image
					src={IMAGE.FACEBOOK_WHITE.src}
					alt={IMAGE.FACEBOOK_WHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
			<Link href={PAGE.YOUTUBE.link}>
				<Image
					src={IMAGE.YOUTUBE_WHITE.src}
					alt={IMAGE.YOUTUBE_WHITE.alt}
					width={24}
					height={24}
				/>
			</Link>
		</div>
	);
}
