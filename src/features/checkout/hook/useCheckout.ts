import { useAddress } from "@/features/address/hook/useAddress";
import { useUser } from "@/features/user/hook/useUser";
import { ordersService } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";
import { getCode, getNames } from "country-list";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useOrder } from "./useOrder";

export function useCheckout() {
	const sp = useSearchParams();

	const orderId = Number(sp.get("orderId"));

	const error = !orderId ? new Error("Замовлення не знайдено") : null;

	const { orderData, isLoadingOrder, isErrorOrder, errorOrder } =
		useOrder(orderId);
	const {
		addressData,
		isLoading: isLoadingAddress,
		isError: isErrorAddress,
		error: errorAddress,
	} = useAddress();
	const {
		userData,
		isLoading: isLoadingUser,
		isError: isErrorUser,
		error: errorUser,
	} = useUser();
	const addressOptions = useMemo(
		() =>
			addressData?.map((item) => ({
				label: item.name,
				value: item.id,
			})) ?? [],
		[addressData],
	);

	const countryOptions = useMemo(
		() =>
			getNames()
				.map((name) => {
					const code = getCode(name);
					return code ? { label: name, value: code } : null;
				})
				.filter(
					(item): item is { label: string; value: string } => item !== null,
				),
		[],
	);
	return {
		orderData,
		addressData,
		userData,
		addressOptions,
		countryOptions,
		isLoading: isLoadingAddress || isLoadingUser || isLoadingOrder,
		isError: isErrorAddress || isErrorUser || !!error || isErrorOrder,
		error: errorAddress || errorUser || error || errorOrder,
	};
}
