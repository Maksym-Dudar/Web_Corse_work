import { IMAGE } from "@/config/image.config";
import Image from "next/image";
import Link from "next/link";

interface Props {
	rating: number;
	id: number;
	sale: boolean;
	title: string;
	priceWithSale: number;
	prise: number;
}

export function FooterCard({
	rating,
	id,
	title,
	priceWithSale,
	prise,
	sale,
}: Props) {
	return (
		<div className='flex flex-col gap-1 pt-2 sm:pt-3 md:pt-4'>
			<div className='flex flex-row gap-1'>
				{Array(rating)
					.fill(0)
					.map((_, i) => (
						<Image
							src={IMAGE.STAR_ACTIVE.src}
							alt={IMAGE.STAR_ACTIVE.alt}
							width={12}
							height={12}
							key={i}
						/>
					))}
			</div>
			<Link href={`/shop/${id}`}>
				<h5 className='text-14 sm:text-16 md:text-18 font-600 leading-160'>
					{title}
				</h5>
				<div className='flex gap-3'>
					<p className='text-10 sm:text-12 md:text-14 font-600 leading-160'>
						${priceWithSale}
					</p>
					{sale && (
						<s className='text-not_active text-10 sm:text-12 md:text-14  font-400 leading-160'>
							${prise}
						</s>
					)}
				</div>
			</Link>
		</div>
	);
}
