"use client";

import { Button, ErrorToast } from "@/components/ui";
import { PAGE } from "@/config";
import { useErrorToast } from "@/hooks/useErrorToast";
import { ordersService } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { CompleteItem } from "./CompleteItem";
import { CompleteDetailTable } from "./CompleteDetailTable";
import { Loading } from "@/components/widgets";

export function Complete() {
	const sp = useSearchParams();
	const orderId = sp.get("orderId");
	const router = useRouter();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["order", "complete", orderId],
		queryFn: () => ordersService.completeOrder(+orderId!),
		enabled: !!orderId,
	});
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (!orderId) return;

	if (isLoading) return <Loading />;

	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<div className='w-full flex items-center justify-center pt-20'>
				<section className='flex flex-col items-center text-center px-4 sm:px-6 md:px-12 lg:px-18 xl:px-24 py-4 sm:py-6 md:py-12 lg:py-16 xl:py-20 gap-10 w-fit shadow-soft bg-white rounded-sm'>
					{!isError ? (
						<div className='flex flex-col gap-4 justify-center'>
							<h4 className='text-description_grey text-24 md:text-28 font-500 leading-120'>
								Дякуємо!
							</h4>
							<h3 className='text-black text-36 md:text-40 font-400 leading-110'>
								Ваше замовлення <br /> отримано
							</h3>{" "}
						</div>
					) : (
						<h3 className='text-red text-36 md:text-40 font-400 leading-110'>
							Сталася помилка
						</h3>
					)}
					<div className='flex flex-row gap-10'>
						{!!data &&
							data.orderItem.map((val) => (
								<CompleteItem
									src={val.image}
									alt={val.image}
									quantity={val.quantity}
									key={val.image}
								/>
							))}
					</div>
					{!!data && <CompleteDetailTable {...data} />}
					{!isError && (
						<Button
							className='w-fit px-10 py-3 rounded-full'
							text='Історія покупок'
							onClick={() => router.push(PAGE.ORDERS.link)}
						/>
					)}
				</section>
			</div>
		</>
	);
}
