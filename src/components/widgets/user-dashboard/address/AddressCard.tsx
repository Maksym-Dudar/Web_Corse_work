import { IMAGE } from "@/config/image.config";
import { PAGE } from "@/config/page.config";
import Image from "next/image";
import Link from "next/link";
import { Mode } from "./type";

interface Props {
	name: string;
	phoneNumber: string;
	address: string;
	id: number;
}

export function AddressCard({ name, phoneNumber, address, id }: Props) {
	return (
		<div className='w-full h-fit rounded-lg border-1 border-description_grey gap-2 p-4 justify-between'>
			<section className='flex flex-row w-full justify-between'>
				<h6 className='text-16 font-600 leading-160 text-black'>{name}</h6>
				<button className='flex flex-row gap-2 items-center'>
					<Image
						src={IMAGE.EDIT.src}
						alt={IMAGE.EDIT.alt}
						width={14}
						height={14}
						className='object-cover'
					/>
					<Link
						href={
							PAGE.AddressEdit(id).link + `?mode=${Mode.EDIT}&addressId=${id}`
						}
						className='text-16 font-600 leading-160 text-description_grey'
					>
						Редагувати
					</Link>
				</button>
			</section>
			<section className='flex flex-col gap-1 w-full'>
				<p className='text-14 font-400 leading-160 text-black'>{phoneNumber}</p>
				<p className='text-14 font-400 leading-160 text-black'>{address}</p>
			</section>
		</div>
	);
}
