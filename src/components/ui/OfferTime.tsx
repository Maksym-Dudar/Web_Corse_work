import type { PropsWithChildren } from "react";
export default function OfferTime({
	time,
	title,
}: PropsWithChildren<{ time: number; title: String }>) {
	return (
		<div className='flex flex-col items-center'>
			<p className='text-34 font-500 leading-110 px-3 py-2 bg-grey'>
				{String(time).padStart(2, "0")}
			</p>
			<p className='text-12 text-description_grey font-400 font-inter leading-170'>
				{title}
			</p>
		</div>
	);
}
