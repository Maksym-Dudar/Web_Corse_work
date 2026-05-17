"use client";

import { Row } from "./Row";
import { useQuery } from "@tanstack/react-query";
import { useWishlistStore } from "@/store/wishlist/store";
import { Loading, Error } from "../..";
import ColumnTitle from "@/components/ui/table/ColumnTitle";
import { productService } from "@/services/requests";
import { useCartStore } from "@/store/cart/store";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";

export function WishlistTable() {
	const { wishlist, removeProduct } = useWishlistStore();
	const { addProduct } = useCartStore();
	const wishlistIdsString = wishlist.join(",");
	const {
		data = [],
		error,
		isError,
		isLoading,
	} = useQuery({
		queryKey: ["wishlist", wishlistIdsString],
		queryFn: ({ signal }) =>
			productService.getWishlist({ wishlist: wishlistIdsString }, signal),
	});

	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<table className='w-full gap-2 h-fit'>
				<thead>
					<tr>
						<ColumnTitle>Товар</ColumnTitle>
						<ColumnTitle>Ціна</ColumnTitle>
						<ColumnTitle>Дія</ColumnTitle>
					</tr>
				</thead>
				<tbody className=''>
					{data.map((item) => (
						<Row
							{...item}
							onAction={() => addProduct({ productId: item.id, quantity: 1 })}
							onRemove={() => removeProduct(item.id)}
							key={item.id}
						/>
					))}
				</tbody>
			</table>
		</>
	);
}
