import type { ICartStoreItem } from "@/store/cart/types";

export const selectProductQuantity = (items: ICartStoreItem[], id: number) =>
	items.find((item) => item.productId === id)?.quantity ?? 0;
