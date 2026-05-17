import { ArrowLink } from "@/components/ui";
import { IMAGE, PAGE } from "@/config";
import Image from "next/image";

const SALE = 35;

export function DiscountBanner() {
	return (
		<section className='flex flex-col md:flex-row bg-grey'>
			<Image
				src={IMAGE.DISCOUNT_BANNER.src}
				alt={IMAGE.DISCOUNT_BANNER.alt}
				width={0}
				height={0}
				sizes='100vw'
				className='w-full md:w-1/2 object-cover'
			/>
			<div className='flex flex-col justify-center pl-8 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-18 py-14 sm:py-16 md:py-18 gap-4 sm:gap-5 lg:gap-6 '>
				<div className='flex flex-col gap-4'>
					<p className='font-inter text-action size-4 w-full text-12 md:text-14 lg:text-16 font-400 leading-160'>
						{`ЗНИЖКИ ДО ${SALE}%`}
					</p>
					<h4 className='text-30 sm:text-34 md:text-36 lg:text-40 font-500 leading-110'>
						Сотні товарів
						<br />
						за новими нижчими цінами!
					</h4>
					<p className='font-inter text-description_grey text-14 sm:text-16 md:text-18 lg:text-20 font-400 leading-160'>
						Оновити кожну кімнату у вашому домі
						<br /> стало доступніше, ніж будь-коли
					</p>
				</div>
				<ArrowLink title='Купити зараз' link={PAGE.SHOP.link} />
			</div>
		</section>
	);
}
