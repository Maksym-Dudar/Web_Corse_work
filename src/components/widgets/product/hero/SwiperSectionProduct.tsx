"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { mobileSize } from "@/constants/windowSize";
import { useWindowSize } from "@/hooks";
import { IMAGE } from "@/config/image.config";

interface Props {
	images: string[];
	isNew: boolean;
	sale: number;
}

export function SwiperSectionProduct({ images, isNew, sale }: Props) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	const { width } = useWindowSize();

	const buttonSize = width > mobileSize ? 32 : 28;
	return (
		<div className='w-full md:w-1/2 flex flex-col gap-6'>
			<div className='flex absolute p-3 sm:p-5 z-20'>
				<div className='flex flex-col gap-2'>
					{isNew && (
						<div className='font-inter px-3 sm:px-5 md:px-3 lg:px-5 py-1.5 sm:py-2 md:py-1.5 lg:py-2 bg-white rounded text-14 md:text-16 font-700 leading-100'>
							NEW
						</div>
					)}
					{sale != 0 && (
						<div className='font-inter px-3 sm:px-5 md:px-3 lg:px-5 py-1.5 sm:py-2 md:py-1.5 lg:py-2 bg-green rounded text-center text-white text-14 md:text-16 font-700 leading-100'>
							-{(Number(sale) * 100).toFixed()}%
						</div>
					)}
				</div>
			</div>
			<Swiper
				modules={[Navigation, Thumbs, Autoplay]}
				navigation={{
					prevEl: ".prev",
					nextEl: ".next",
				}}
				thumbs={{ swiper: thumbsSwiper }}
				loop={true}
				autoplay={{ delay: 3000 }}
				className='w-full'
			>
				{images.map((item) => (
					<SwiperSlide key={item}>
						<Image
							src={item}
							alt={item}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "auto" }}
						/>
					</SwiperSlide>
				))}
				<div className='prev rotate-180 absolute top-40% translate-y-1/2 z-10 left-6 lg:left-8 rounded-full bg-white p-2.5 cursor-pointer'>
					<Image
						src={IMAGE.ARROW_BLACK.src}
						alt={IMAGE.ARROW_BLACK.alt}
						width={0}
						height={0}
						sizes='100vw'
						className='w-7 h-7 lg:w-8 lg:h-8'
					/>
				</div>
				<div className='next absolute top-40% translate-y-1/2 z-10 right-6 lg:right-8 rounded-full bg-white p-2.5 cursor-pointer'>
					<Image
						src={IMAGE.ARROW_BLACK.src}
						alt={IMAGE.ARROW_BLACK.alt}
						width={0}
						height={0}
						sizes='100vw'
						className='w-7 h-7 lg:w-8 lg:h-8'
					/>
				</div>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				modules={[Thumbs]}
				watchSlidesProgress
				freeMode
				slidesPerView={3}
				spaceBetween={24}
				className='w-full'
			>
				{images.map((item) => (
					<SwiperSlide key={item}>
						<Image
							src={item}
							alt={item}
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: "100%", height: "auto" }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
