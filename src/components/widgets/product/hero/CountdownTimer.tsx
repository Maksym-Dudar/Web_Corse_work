"use client";

import { OfferTime } from "@/components/ui";
import { useTimer } from "@/hooks";

interface Props {
	offerExpires?: Date;
	sale?: boolean;
}

export function CountdownTimer({ offerExpires, sale }: Props) {
	const time = useTimer();
	if (!offerExpires || !sale) return;
	let difTime = new Date(offerExpires.getTime() - time.getTime());
	return (
		<section className='flex flex-col py-6 gap-3 border-b border-grey'>
			<p className='font-inter font-400 text-14 md:text-16 leading-160 text-subtitle'>
				Пропозиція закінчується через:
			</p>
			{difTime && (
				<div className='flex gap-4'>
					<OfferTime time={difTime.getDate()} title='Днів' />
					<OfferTime time={difTime.getHours()} title='Годин' />
					<OfferTime time={difTime.getMinutes()} title='Хвилин' />
					<OfferTime time={difTime.getSeconds()} title='Секунд' />
				</div>
			)}
		</section>
	);
}
