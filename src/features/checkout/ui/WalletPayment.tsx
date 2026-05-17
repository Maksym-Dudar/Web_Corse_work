import { PaymentRequestButtonElement, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

export function WalletPayment() {
	const stripe = useStripe();
	const [paymentRequest, setPaymentRequest] = useState<any>(null);

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

		pr.on("paymentmethod", async (ev: any) => {
			console.log("Payment method received:", ev.paymentMethod.id);
			ev.complete("success"); 
		});
	}, [stripe]);

    console.log(paymentRequest);
    
	if (!paymentRequest) return null; 

	return <PaymentRequestButtonElement options={{ paymentRequest }} />;
}
