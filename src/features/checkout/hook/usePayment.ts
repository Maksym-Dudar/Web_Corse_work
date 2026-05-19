import { paymentService } from "@/services/requests/payment/payment.services";
import { useQuery } from "@tanstack/react-query";

export function usePayment(orderId: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ["clientSecret", orderId],
		queryFn: () => paymentService.getClientSecret({ orderId }),
		enabled: !!orderId,
		retry: 1,
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	});
	return { data, isLoading, error };
}