import Image from "next/image";
import { ArrowLink } from "@/components/ui";

interface Props {
	title: string;
	src: string;
	link: string;
	alt: string;
}

export function ArticlesCard({ title, src, link, alt }: Props) {
	return (
		<article className='flex flex-col gap-4 lg:gap-6'>
			<Image src={src} alt={alt} width={0} fill className='object-cover' />
			<div className='gap-2'>
				<h5 className='text-18 lg:text-20 font-500 leading-140'>{title}</h5>
			<ArrowLink title='Читати далі' link={link} />
			</div>
		</article>
	);
}
