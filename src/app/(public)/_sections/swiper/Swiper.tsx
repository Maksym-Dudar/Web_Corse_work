"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperRoot, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IMAGE } from "@/config/image.config";
import Image from "next/image";
import SwiperButton from "./SwiperButton";
import { useMouse } from "@/hooks";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function Swiper() {
	const { hasMouse } = useMouse();
	const isClient = useSyncExternalStore(
		subscribe,
		getClientSnapshot,
		getServerSnapshot,
	);

	if (!isClient) {
		const [firstSlide] = IMAGE.PATH_IMAGE_SLIDER;

		return (
			<Image
				src={firstSlide.src}
				alt={firstSlide.alt}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: "100%", height: "auto" }}
				priority
			/>
		);
	}

	return (
		<SwiperRoot
			modules={[Navigation, Pagination, Autoplay]}
			navigation={{
				prevEl: ".prev",
				nextEl: ".next",
			}}
			pagination={{ clickable: true }}
			autoplay={{ delay: 3000 }}
			loop={true}
			className='w-full'
		>
			{IMAGE.PATH_IMAGE_SLIDER.map((item) => (
				<SwiperSlide key={item.alt}>
					<Image
						src={item.src}
						alt={item.alt}
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: "100%", height: "auto" }}
						priority
					/>
				</SwiperSlide>
			))}
			{hasMouse && (
				<>
					<SwiperButton className='prev rotate-180 left-8' />
					<SwiperButton className='next right-8' />
				</>
			)}
		</SwiperRoot>
	);
}
