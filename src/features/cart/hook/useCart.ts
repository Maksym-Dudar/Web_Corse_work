"use client";

import { productService } from "@/services/requests/product/product.services";
import type { ICartItem } from "@/shared/types/product/product.type";
import { useCartStore } from "@/store/cart/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import calcSubtotal from "../lib/calcSubtotal";
import calcTotal from "../lib/calcTotal";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";
import { ordersService } from "@/services/requests";
import type { ICreateOrder } from "@/services/requests/orders/requests.type";
import type { IDeliveryOptions } from "@/shared/types/orders/orders";

export function useCart() {
	const router = useRouter();
	const cart = useCartStore((state) => state.cart);
	const [error, setError] = useState<Error | null>(null);

	const productIds = useMemo(
		() => cart.map((item) => item.productId).sort(),
		[cart],
	);

	const {
		data: cartCards,
		isLoading: isLoadingCart,
		isError: isErrorCart,
		error: errorCart,
	} = useQuery<ICartItem[], Error>({
		queryKey: ["cart", productIds],
		queryFn: ({ signal }) => productService.getCartCards(productIds, signal),
		enabled: productIds.length > 0,
	});

	const {
		data: deliveryMethods,
		isLoading: isLoadingDelivery,
		isError: isErrorDelivery,
		error: errorDelivery,
	} = useQuery({
		queryKey: ["delivery-options"],
		queryFn: () => ordersService.getDeliveryOptions(),
	});

	const [selectedShippingMethod, setSelectedShippingMethod] =
		useState<IDeliveryOptions | null>(null);

	const shippingMethod = selectedShippingMethod ?? deliveryMethods?.[0] ?? null;

	const subtotal = useMemo(
		() => calcSubtotal(cart, cartCards ?? []),
		[cart, cartCards],
	);

	const total = useMemo(() => {
		if (!shippingMethod) return 0;

		return calcTotal(
			subtotal,
			Number(shippingMethod.percent),
			Number(shippingMethod.fixedFee),
		);
	}, [subtotal, shippingMethod]);

	const checkoutMutation = useMutation({
		mutationFn: (data: ICreateOrder) => ordersService.createOrder(data),
		onSuccess: (data) => router.push(PAGE.CHECKOUT_DETAILS(data.id)),
		onError: (err: Error) => setError(err),
	});

	const onCheckout = () => {
		if (!shippingMethod) return;

		checkoutMutation.mutate({
			total,
			subtotal,
			shippingMethodId: shippingMethod.id,
			items: cart,
		});
	};

	return {
		shippingMethod,
		deliveryMethods,
		data: cartCards,
		isLoading: isLoadingCart || isLoadingDelivery,
		isError: isErrorCart || isErrorDelivery,
		error: errorDelivery || errorCart || error,
		subtotal,
		total,
		onCheckout,
		setShippingMethod: setSelectedShippingMethod,
	};
}
