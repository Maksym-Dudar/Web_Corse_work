"use client";

import { useForm } from "react-hook-form";
import { CheckoutSchema } from "../model/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { OderSummary } from "./OderSummary";
import { Button, ErrorToast } from "@/components/ui";
import { ContactInformation } from "./ContactInformation";
import { ShippingAddress } from "./ShippingAddress";
import { useCheckout } from "../hook/useCheckout";
import { Loading } from "@/components/widgets";
import { useErrorToast } from "@/hooks/useErrorToast";
import { useMutation } from "@tanstack/react-query";
import { paymentService } from "@/services/requests/payment/payment.services";
import { PaymentMethod } from "./PaymentMethod";
import { AddressMode } from "./AddressMode";
import { useState } from "react";
import { useCreateAddress } from "@/features/address/hook/useCreateAddress";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";
import {
	CardNumberElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import { ordersService } from "@/services/requests";
import type { IConfirmOrder } from "@/services/requests/orders/requests.type";

export type TAddressMode = "existing" | "new";

export function CheckoutPage() {
	const {
		orderData,
		addressData,
		userData,
		addressOptions,
		countryOptions,
		isLoading,
		isError,
		error,
	} = useCheckout();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm<CheckoutSchema>({
		resolver: zodResolver(CheckoutSchema),
	});
	const [paymentError, setPaymentError] = useState<Error | null>(null);

	const { errorMessage, closeError } = useErrorToast(
		paymentError || error,
		isError || !!paymentError,
	);
	const [addressMode, setAddressMode] = useState<TAddressMode>("new");
	const [addressId, setAddressId] = useState<number | null>(null);
	const router = useRouter();
	const stripe = useStripe();
	const elements = useElements();

	const paymentMutation = useMutation({
		mutationFn: (orderId: number) =>
			paymentService.getClientSecret({ orderId: orderId }), // todo
	});

	const orderMutation = useMutation({
		mutationFn: (payload: IConfirmOrder) => ordersService.confirmOrder(payload),
	});

	const handleAddressSelect = (id: number) => {
		if (!addressData || !userData) return;

		setAddressId(id);

		const found = addressData.find((item) => item.id === id);
		if (!found) return;

		const { id: _, name, ...restAddress } = found;
		const { id: __, avatar, ...restUser } = userData;

		reset({ ...restAddress, ...restUser });
	};
	const { createAddressMutation } = useCreateAddress();
	const submit = handleSubmit(async (data) => {
		if (!orderData || !orderData.id || !stripe || !elements) return;
		let finalAddressId = addressId;

		if (!finalAddressId) {
			const payload = {
				name: "Незареєстрований користувач",
				street: data.street,
				country: data.country,
				state: data.state,
				city: data.city,
				phone: data.phone,
				buildingNumber: data.buildingNumber,
				zipCode: data.zipCode,
			};

			const res = await createAddressMutation.mutateAsync(payload);
			finalAddressId = res.id;
			setAddressId(res.id);
		}

		const { clientSecret } = await paymentMutation.mutateAsync(orderData.id);

		const cardElement = elements.getElement(CardNumberElement);

		const result = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardElement!,
				billing_details: {
					name: `${data.firstName} ${data.lastName}`,
					email: data.email,
				},
			},
		});
		if (result.error) {
			setPaymentError(new Error(result.error.message));
			return;
		} else {
			await orderMutation.mutateAsync({
				id: orderData.id,
				addressId: finalAddressId,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
			});
			router.push(PAGE.CHECKOUT_COMPLETE(orderData.id));
		}
	});

	if (isLoading) return <Loading />;
if (!orderData) return null;


	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-10 md:py-15 lg:py-20 '>
				<form className='flex flex-col w-full gap-6' onSubmit={submit}>
					<AddressMode
						options={addressOptions}
						handleAddressSelect={handleAddressSelect}
						addressMode={addressMode}
						onCreateAddress={() => {
							setAddressMode("new");
							setAddressId(null);
						}}
						onExistingAddress={() => setAddressMode("existing")}
					/>
					<ContactInformation
						register={register}
						errors={errors}
						disabled={addressMode == "existing"}
					/>
					<ShippingAddress
						register={register}
						errors={errors}
						control={control}
						options={countryOptions}
						disabled={addressMode == "existing"}
					/>
					<PaymentMethod />
					<Button text='Оформити замовлення' type='submit' className='py-3' />
				</form>
				<OderSummary
					data={orderData?.orderItem || []}
					shippingMethod={orderData?.shippingMethod}
					total={orderData?.total || 0}
					subtotal={orderData?.subtotal || 0}
				/>
			</div>
		</>
	);
}
