import { ArrowLink } from "@/components/ui";
import { PAGE } from "@/config";
import type { CategoryFilter } from "@/config/product.config";
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentPropsWithoutRef<"article"> {
	title: CategoryFilter;
	alt: string;
	src: string;
}

export function CategoryCard({ title, src, alt, className, ...props }: Props) {
	const baseStyle = "relative h-full";
	return (
		<article className={twMerge(className, baseStyle)} {...props}>
			<div className='absolute z-10 bottom-0 py-10 px-8 pointer-events-none'>
				<h4 className='text-28 sm:text-24 md:text-30 lg:text-34 font-500 leading-110 text-black'>
					{title}
				</h4>
				<div className='pointer-events-auto'>
				<ArrowLink title='Купити зараз' link={PAGE.SHOP_BY_CATEGORY(title)} />
				</div>
			</div>
			<Image src={src} alt={alt} fill className='object-cover' sizes='100vw' />
		</article>
	);
}
