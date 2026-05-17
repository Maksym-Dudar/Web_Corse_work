import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    quantity: number;
}

export function CompleteItem({src, alt, quantity}: Props) {
    return (
			<div className='h-24 w-20 relative'>
				<Image src={src} alt={alt} width={0} height={0} sizes='100vw' />
				<span className='w-6 md:w-8 h-6 md:h-8 bg-black flex justify-center items-center rounded-full absolute -top-4 -right-4'>
					<p className='text-12 md:text-16 font-600 leading-150 text-white text-center'>
						{quantity}
					</p>
				</span>
			</div>
		);
}
