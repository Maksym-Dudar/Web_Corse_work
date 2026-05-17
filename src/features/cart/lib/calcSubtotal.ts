import type { ICartItem } from "@/shared/types/product/product.type";
import type { ICartStoreItem } from "@/store/cart/types";

export default function calcSubtotal(
	cartItems: ICartStoreItem[],
	products: ICartItem[],
): number {
	return +cartItems
		.reduce((sum, cartItem) => {
			const product = products.find((p) => p.id === cartItem.productId);
			if (!product) return sum;

			const price = product.sale
				? product.price * (1 - product.sale)
				: product.price;

			return sum + price * cartItem.quantity;
		}, 0)
		.toFixed(2);;
}
