import Image from "next/image";
import { selectProductQuantity } from "../../../utils/selectProductQuantity";
import { ButtonCross } from "@/components/ui";
import { useCartStore } from "@/store/cart/store";
import { memo } from "react";
import type { ICartItem } from "@/shared/types/product/product.type";
import { Counter } from "@/components/ui/buttons/Counter";

interface Props extends Omit<ICartItem, "sale"> {
	isCanChange?: boolean;
}

function CartItem({
	image,
	title,
	color,
	price,
	id,
	isCanChange = true,
}: Props) {
	const { addProduct, decreaseItemCount, removeProduct, cart } = useCartStore();
	const quantity = selectProductQuantity(cart, id);

	return (
		<article className='flex w-full flex-row justify-between border-b-1 border-b-description_grey py-6 shrink-0'>
			<div className='flex flex-row gap-4'>
				<Image src={image} alt={image} width={90} height={0} />
				<div className='flex flex-col gap-2'>
					<h6 className='font-inter font-600 text-14 sm:text-16 leading-160'>
						{title}
					</h6>
					<p className='font-inter font-400 text-12 md:text-14 leading-170 text-description_grey'>
						Колір: {color}
					</p>
					<Counter
						quantity={quantity}
						decrement={() => decreaseItemCount({ productId: id, quantity })}
						increment={() => addProduct({ productId: id, quantity })}
						disabled={!isCanChange}
					/>
				</div>
			</div>
			{!!isCanChange && (
				<div className='flex flex-col items-end gap-2'>
					<p className='text-14 sm:text-16 font-500 leading-160'>${price}</p>
					<ButtonCross size={5} onClick={() => removeProduct(id)} />
				</div>
			)}
		</article>
	);
}

export default memo(CartItem);
