import Image from "next/image";

interface Props {
	src: string;
	title: string;
	subtitle: string;
	alt: string;
}
export function ContactCard({ src, title, subtitle, alt }: Props) {
	return (
		<div className='flex flex-col py-8 sm:py-9 md:py-10 lg:py-11 xl:py-12 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 bg-grey gap-4 w-full items-center'>
			<Image src={src} alt={alt} width={36} height={36} />
			<div className='flex flex-col gap-2 items-center'>
				<h5 className='text-14 sm:text-16 font-700 font-inter leading-100 text-description_grey'>
					{title}
				</h5>
				<p className='text-14  md:text-16 font-600 font-inter leading-160 text-black'>
					{subtitle}
				</p>
			</div>
		</div>
	);
}
