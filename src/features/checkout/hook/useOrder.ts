import { ordersService } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";

export function useOrder(orderId: number) {
	const {
		data: orderData,
		isLoading: isLoadingOrder,
		isError: isErrorOrder,
		error: errorOrder,
	} = useQuery({
		queryKey: ["order", orderId],
		queryFn: () => ordersService.getOrder(orderId),
		enabled: !!orderId,
		retry: 3,
		retryDelay: 1000,
	});
    return {
			orderData,
			isLoadingOrder,
			isErrorOrder,
			errorOrder,
		};
}