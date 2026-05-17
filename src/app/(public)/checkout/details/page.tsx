"use client"

import { useCheckout } from "@/features/checkout/hook/useCheckout";
import { CheckoutPage } from "@/features/checkout/ui/CheckoutPage";
import PaymentProvider from "@/provider/stripe/StripeProvider";

export default function Page() {
		const {
			orderData,
		} = useCheckout();
	console.log("orderData: ", orderData);
	if (!orderData || !orderData?.id) return;
	return (
		<div>
			<PaymentProvider orderId={orderData?.id}>
				<CheckoutPage />
			</PaymentProvider>
		</div>
	);
}
