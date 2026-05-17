"use client"
import Image from "next/image";
import { useState } from "react";
import { IMAGE } from "@/config/image.config";
import { useWishlistStore } from "@/store/wishlist/store";
import { Counter } from "@/components/ui/buttons/Counter";
import { Button } from "@/components/ui";
import { useCartStore } from "@/store/cart/store";

interface Props {
	id: number;
}

export function PurchaseActions({ id }: Props) {
	const [counter, setCount] = useState<number>(1);
    const { toggleProduct, isInWishlist } = useWishlistStore();
    const { addProduct } = useCartStore();

	const itemToAddBag = { productId: id, quantity: counter };

	return (
		<section className='flex flex-col gap-4 py-8 border-b border-grey'>
			<div className='flex gap-6'>
				<Counter
					variant='grey'
					quantity={counter}
					increment={() => setCount((prev) => prev + 1)}
					decrement={() => setCount((prev) => (prev > 1 ? prev - 1 : prev))}
				/> 
				<button
					onClick={() => toggleProduct(id)}
					className='flex w-full text-center border border-black py-1 sm:py-2 rounded-lg justify-center items-center gap-2'
				>
					{isInWishlist(id) ? (
						<Image
							src={IMAGE.LIKE_ACTIVE.src}
							alt={IMAGE.LIKE_ACTIVE.alt}
							width={24}
							height={24}
						/>
					) : (
						<Image
							src={IMAGE.LIKE_NOT_ACTIVE.src}
							alt={IMAGE.LIKE_NOT_ACTIVE.alt}
							width={24}
							height={24}
						/>
					)}
					<p className='font-inter text-14 md:text-16 font-500 leading-180'>
						Список бажань
					</p>
				</button>
			</div>
			<Button text='Додати в кошик' className="py-3" onClick={() => addProduct(itemToAddBag)}/>
		</section>
	);
}
