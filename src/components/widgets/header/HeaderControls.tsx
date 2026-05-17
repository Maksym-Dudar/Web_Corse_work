"use client";

import { PAGE } from "@/config/page.config";
import Link from "next/link";
import Image from "next/image";
import { IMAGE } from "@/config/image.config";
import { TriggeredSearch } from "@/features/search/ui/TriggeredSearch";

interface Props {
	showAdaptive: boolean;
	cartSize: number;
	openCart: () => void; 
}

export function HeaderControls({ showAdaptive, openCart, cartSize }: Props) {
	return (
		<div className='flex items-center gap-2 lg:gap-3 xl:gap-4 w-fit'>
			{!showAdaptive && <TriggeredSearch />}
			{!showAdaptive && (
				<Link key={PAGE.ACCOUNT.link} href={PAGE.ACCOUNT.link}>
					<div className='w-6 h-6 rounded-full'>
						<Image
							src={IMAGE.USER_ICON.src}
							alt={IMAGE.USER_ICON.alt}
							width={24}
							height={24}
						/>
					</div>
				</Link>
			)}
			<button
				type='button'
				className='relative flex items-center gap-1'
				onClick={openCart}
			>
				<Image
					src={IMAGE.SHOPPING_BAG.src}
					alt={IMAGE.SHOPPING_BAG.alt}
					width={25}
					height={25}
				/>
				<span className='w-4 md:w-5 h-4 md:h-5 bg-black flex justify-center items-center rounded-full'>
					<p className='text-10 md:text-12 font-700 leading-80 text-white text-center'>
						{cartSize}
					</p>
				</span>
			</button>
		</div>
	);
}
