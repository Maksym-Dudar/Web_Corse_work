"use client";

import { paymentService } from "@/services/requests/payment/payment.services";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_KEY!
);

export default function PaymentProvider({
	children,
	orderId,
}: {
	children: React.ReactNode;
	orderId: number;
}) {
	const { data, isLoading, error } = useQuery({
		queryKey: ["order", orderId],
		queryFn: () =>
			paymentService.getClientSecret({ orderId }),
		enabled: !!orderId,
		retry: 1,
		staleTime: Infinity,
refetchOnWindowFocus: false,
	});

	console.log("payment data:", data);
	console.log("payment error:", error);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!data?.clientSecret) {
		return <div>No client secret</div>;
	}

	return (
		<Elements
			stripe={stripePromise}
			options={{
				clientSecret: data.clientSecret,
			}}
		>
			{children}
		</Elements>
	);
}
