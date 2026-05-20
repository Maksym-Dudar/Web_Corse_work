import { IMAGE } from "@/config/image.config";
import Image from "next/image";

export function AsideBannerAuth() {
	return (
		<aside className='relative w-1/2 h-screen hidden md:flex'>
			<h1 className='absolute z-10 text-black text-24 font-500 left-1/2 -translate-x-1/2 top-8'>
				3legant.
			</h1>
			<Image
				src={IMAGE.AUTH_BANNER.src}
				alt={IMAGE.AUTH_BANNER.alt}
                fill
                priority
				style={{ objectFit: "cover" }}
			/>
		</aside>
	);
}
