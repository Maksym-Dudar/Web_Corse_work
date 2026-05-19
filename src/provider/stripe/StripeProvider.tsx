"use client";

import { paymentService } from "@/services/requests/payment/payment.services";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function PaymentProvider({
	children,
	orderId,
}: {
	children: React.ReactNode;
	orderId: number;
}) {
	const { data } = useQuery({
		queryKey: ["order", orderId],
		queryFn: () => paymentService.getClientSecret({ orderId }),
		enabled: !!orderId,
		retry: 3,
		retryDelay: 1000,
	});

	if (!data || !data?.clientSecret) return
	
	return (
		<Elements stripe={stripePromise} options={data}>
			{children}
		</Elements>
	);
}
