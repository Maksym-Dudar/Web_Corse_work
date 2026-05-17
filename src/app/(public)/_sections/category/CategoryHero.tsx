import { ArrowLink } from "@/components/ui";
import { PAGE } from "@/config";
import type { CategoryFilter } from "@/config/product.config";
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"article"> {
	title: CategoryFilter;
	description: string;
	alt: string;
	src: string;
}
export function CategoryHero({
	title,
	description,
	src,
	alt,
	className,
	...props
}: Props) {
	const baseStyle = "relative";
	console.log(src)
	return (
		<article className={twMerge(className, baseStyle)} {...props}>
			<div className='absolute z-10 flex flex-col p-10 pointer-events-none'>
				<div className='flex gap-2 lg:gap-3 flex-col'>
					<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
						{title}
					</h4>
					<p className='hidden md:block md:text-12 lg:text-16 font-400 leading-160 text-subtitle font-inter w-full xl:w-4/5'>
						{description}
					</p>
				</div>
				<div className='pointer-events-auto'>
				<ArrowLink title='Купити зараз' link={PAGE.SHOP_BY_CATEGORY(title)} />
				</div>
			</div>
			<Image src={src} alt={alt} fill className='object-cover' sizes='100vw' />
		</article>
	);
}
