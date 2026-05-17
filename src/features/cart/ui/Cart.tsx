"use client";

import { ErrorToast } from "@/components/ui";
import { useCart } from "../hook/useCart";
import { CartFooter } from "./CartFooter";
import { CartHeader } from "./CartHeader";
import { CartItemList } from "./CartItemList";
import { useErrorToast } from "@/hooks/useErrorToast";
import { useOverlay } from "@/provider/overlay/OverlayProvider";

export function Cart() {
	const { close } = useOverlay();
	const { data, isLoading, error, isError, subtotal, total, onCheckout } =
		useCart();
	const { errorMessage, closeError } = useErrorToast(error, isError);
	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<aside className='flex flex-col justify-between h-full w-full overflow-y-scroll bg-white right-0 py-10 px-6'>
				<div className='flex flex-col gap-4'>
					<CartHeader close={close} />
					{!errorMessage && (
						<CartItemList data={data ?? []} isLoading={isLoading} />
					)}
				</div>
				{!errorMessage && (
					<CartFooter
						isLoading={isLoading}
						subtotal={subtotal}
						total={total}
						onCheckout={onCheckout}
						close={close}
					/>
				)}
			</aside>
		</>
	);
}
