import { ButtonCross } from "@/components/ui";
import { Counter } from "@/components/ui/buttons/Counter";
import Cell from "@/components/ui/table/Cell";
import { selectProductQuantity } from "@/utils/selectProductQuantity";
import { useCartStore } from "@/store/cart/store";
import Image from "next/image";

interface Props {
	id: number;
	price: number;
	image: string;
	title: string;
	color: string;
}

export function BigRow({ id, image, price, title, color }: Props) {
	const { addProduct, decreaseItemCount, removeProduct, cart } = useCartStore();
	const quantity = selectProductQuantity(cart, id);
	return (
		<tr key={id} className='border-b-1 border-white_grey border-solid'>
			<Cell>
				<div className='flex flex-row gap-4 items-center'>
					<Image
						src={image}
						alt={title}
						width={80}
						height={95}
						className='object-cover '
					/>
					<span className='flex flex-col gap-2'>
						<h5 className='font-inter text-14 font-600 leading-160'>{title}</h5>
						<p className='font-inter text-12 font-400 leading-170'>
							Колір: {color}
						</p>
						<ButtonCross
							size={5}
							onClick={() => removeProduct(id)}
							text='Видалити'
						/>
					</span>
				</div>
			</Cell>
			<Cell>
				<div className='flex items-center justify-center'>
					<Counter
						quantity={quantity}
						decrement={() => decreaseItemCount({ productId: id, quantity })}
						increment={() => addProduct({ productId: id, quantity })}
					/>
				</div>
			</Cell>
			<Cell>
				<p className='text-18 font-400 font-inter leading-160 text-end'>
					{"$" + price}
				</p>
			</Cell>
			<Cell>
				<p className='text-18 font-600 font-inter leading-160 text-end'>
					{"$" + price * quantity}
				</p>
			</Cell>
		</tr>
	);
}
