import Image from "next/image";
import Link from "next/link";

interface Props {
	image: string;
	title: string;
	isNew: boolean;
	id: number;
	sale: number;
}

export function HeroCard({ id, title, image, isNew, sale }: Props) {
	return (
		<Link href={`/shop/${id}`} className='flex w-full'>
			<div className='flex w-full'>
				<Image
					src={image}
					alt={title}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: "100%", height: "100%" }}
				/>
				<div className='flex absolute p-2 sm:p-4 md:p-5'>
					<div className='flex flex-col gap-2'>
						{isNew && (
							<div className='font-inter px-1 sm:px-2 md:px-3 py-1 bg-white rounded text-center text-12 sm:text-14 md:text-16 font-700 leading-100'>
								НОВИНКА
							</div>
						)}
						{sale != 0 && (
							<div className='font-inter px-1 sm:px-2 md:px-3 py-1 bg-green rounded text-center text-white text-12 sm:text-14 md:text-16 font-700 leading-100'>
								-{(Number(sale) * 100).toFixed()}%
							</div>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
}
