import { PaymentRequestButtonElement, useStripe } from "@stripe/react-stripe-js";
import type { PaymentRequest } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export function WalletPayment() {
	const stripe = useStripe();
	const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
		null,
	);

	useEffect(() => {
		if (!stripe) return;

		const pr = stripe.paymentRequest({
			country: "PL",
			currency: "pln",
			total: {
				label: "Разом",
				amount: 200,
			},
			requestPayerName: true,
			requestPayerEmail: true,
		});

		pr.canMakePayment().then((result) => {
			if (result) setPaymentRequest(pr);
		});
	}, [stripe]);

	if (!paymentRequest) return null;

	return <PaymentRequestButtonElement options={{ paymentRequest }} />;
}
