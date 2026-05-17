import { IMAGE } from "@/config";
import Image from "next/image";

interface Props {
	firstName: string;
	lastName: string;
	userAvatar: string;
	handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SidebarUser({
	firstName,
	lastName,
	userAvatar,
	handleFileChange,
}: Props) {
	return (
		<article className='flex flex-col gap-[6px] px-12 items-center'>
			<div className='flex relative'>
				<div className='m-3 w-20 h-20 rounded-full overflow-hidden'>
					<Image
						src={userAvatar ?? IMAGE.USER_ICON.src}
						alt={IMAGE.USER_ICON.alt}
						width={80}
						height={80}
						className='object-cover'
					/>
				</div>
				<div className='absolute bottom-4 right-4 border-2 border-grey flex w-7 h-7 rounded-full bg-black cursor-pointer items-center justify-center'>
					<Image
						src={IMAGE.CAMERA.src}
						alt={IMAGE.CAMERA.alt}
						width={16}
						height={15}
					/>
				</div>
				<input
					className='absolute inset-0 opacity-0 cursor-pointer rounded-full bottom-4'
					type='file'
					name='file'
					accept='image/png, image/jpeg'
					onChange={handleFileChange}
				/>
			</div>
			<h4 className='font-600 text-20 leading-160'>
				{firstName + " " + lastName}
			</h4>
		</article>
	);
}
