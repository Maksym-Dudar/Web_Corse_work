"use client";

import { useOrder } from "@/features/checkout/hook/useOrder";
import { CheckoutPage } from "@/features/checkout/ui/CheckoutPage";
import PaymentProvider from "@/provider/stripe/StripeProvider";
import { useSearchParams } from "next/navigation";

export default function Page() {
	const sp = useSearchParams();

	const orderId = Number(sp.get("orderId"));

	return (
		<PaymentProvider orderId={orderId}>
			<CheckoutPage />
		</PaymentProvider>
	);
}
