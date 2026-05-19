"use client";

import { usePayment } from "@/features/checkout/hook/usePayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
	const { data, isLoading, error } = usePayment(orderId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
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
