"use client";

import { FooterCard } from "./FooterCard";
import { HeroCard } from "./HeroCard";
import type { IProductCard } from "@/shared/types/product/product.type";
import { useProductCard } from "./useProductCard";
import { Button } from "@/components/ui";
import ButtonLike from "@/components/ui/buttons/ButtonLike";
import { useCartStore } from "@/store/cart/store";

interface Props extends IProductCard {}
export function ProductCard({
	id,
	title,
	price,
	rating,
	sale,
	isNew,
	image,
	priceWithSale,
}: Props) {
	const {
		handleMouseEnter,
		handleMouseLeave,
		buttonRef,
		buttonFavoriteRef,
		toggleWishlist,
		isInWishlist,
	} = useProductCard({ id });
	const { addProduct } = useCartStore();

	return (
		<article
			className='w-full h-auto'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className='flex relative overflow-hidden w-full'>
				<HeroCard
					id={id}
					title={title}
					isNew={isNew}
					sale={sale}
					image={image}
				/>
				<ButtonLike
					ref={buttonFavoriteRef}
					isActive={isInWishlist}
					onClick={toggleWishlist}
				/>
				<div className='absolute bottom-2 md:bottom-4 px-2 md:px-4 w-full'>
					<Button
						ref={buttonRef}
						text={"Додати в кошик"}
						className='w-full py-1 md:py-2'
						onClick={() => addProduct({ productId: id, quantity: 1 })}
					/>
				</div>
			</div>
			<FooterCard
				id={id}
				title={title}
				rating={rating}
				prise={price}
				priceWithSale={priceWithSale}
				sale={!!sale}
			/>
		</article>
	);
}
