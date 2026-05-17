import Image from "next/image";
import Link from "next/link";
import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import type { ISameColorCard } from "@/shared/types/product/product.type";

interface Props {
	measurements: string;
	color: string;
	same: ISameColorCard[];
}

export function OptionsProduct({ measurements, color, same }: Props) {
	return (
		<section className='flex flex-col py-6 gap-6'>
			<div className='flex flex-col gap-2'>
				<p className='font-inter font-600 text-14 md:text-16 leading-160 text-description_grey'>
					Measurements
				</p>
				<p className='font-inter font-300 text-18 md:text-20 leading-180 text-black'>
					{measurements}
				</p>
			</div>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-2'>
						<p className='font-inter font-600 text-14 md:text-16 leading-160 text-description_grey'>
							Choose Color
						</p>
						<Image
							src={IMAGE.ARROW.src}
							alt={IMAGE.ARROW.alt}
							width={5}
							height={8}
						/>
					</div>
					{color}
				</div>
				<div className='flex flex-row gap-4'>
					{same.map((item) =>
						item.isActive ? (
							<Link href={PAGE.PRODUCT(item.id)} key={item.image}>
								<Image src={item.image} alt='Arrow' width={72} height={72} />
							</Link>
						) : (
							<div className='flex opacity-40' key={item.image}>
								<Link href={PAGE.PRODUCT(item.id)}>
									<Image src={item.image} alt='Arrow' width={72} height={72} />
								</Link>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
