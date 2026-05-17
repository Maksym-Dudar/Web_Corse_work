import Image from "next/image";

interface Props {
	src: string;
	title: string;
	subtitle: string;
	alt: string;
}
export function AdvantagesCard({ src, title, subtitle, alt }: Props) {
	return (
		<div className='flex flex-col py-4 sm:py-9 md:py-10 lg:py-11 xl:py-12 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 bg-grey gap-4 w-full'>
			<Image
				src={src}
				alt={alt}
				width={0}
				height={0}
				className='h-8 sm:h-10 lg:h-12 w-8  sm:w-10 lg:w-12'
			/>
			<div className='flex flex-col gap-2'>
				<h5 className='text-14 sm:text-16 md:text-18 lg:text-20 font-500 leading-140'>
					{title}
				</h5>
				<p className='text-12  md:text-14 font-400 leading-170 text-description_grey'>
					{subtitle}
				</p>
			</div>
		</div>
	);
}
