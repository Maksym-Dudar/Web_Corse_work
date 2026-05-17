import { PathPage } from "@/components/ui";
import { IMAGE, PAGE } from "@/config";
import Image from "next/image";

export function ShopHero() {
	return (
		<article className='flex relative w-full h-100'>
			<section className='flex flex-col gap-6 absolute justify-center items-center w-full h-full'>
				<div className='flex items-center gap-5'>
					<PathPage label={PAGE.HOME.label} src={PAGE.HOME.link} />
					<h3 className='font-inter text-black text-12 md:text-14'>Магазин</h3>
				</div>
				<h2 className=' text-40 sm:text-46 md:text-50 lg:text-54 font-500 leading-110'>
					Магазин
				</h2>
				<p className='text-14 sm:text-16 md:text-20 font-400 leading-160 text-black'>
					Створімо простір, про який ви завжди мріяли.
				</p>
			</section>
			<Image
				src={IMAGE.SHOP_BANNER.src}
				alt={IMAGE.SHOP_BANNER.alt}
				width={0}
				height={0}
				sizes='100vw'
				className='object-cover h-full w-full'
				priority
			/>
		</article>
	);
}
