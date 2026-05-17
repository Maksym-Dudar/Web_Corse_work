"use client";

import { Loading } from "../../../components/widgets";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";
import { BigRow } from "./BigRow";
import ColumnTitle from "@/components/ui/table/ColumnTitle";
import { useCart } from "../hook/useCart";
import { CartFooter } from "./CartFooter";
import Radio from "@/components/ui/inputs/Radio";
import { useWindowSize } from "@/hooks";
import { lgSize, smSize, xlSize } from "@/constants/windowSize";
import { SmallRow } from "./SmallRow";
import { useMemo } from "react";

export function CartPage() {
	const {
		data,
		isLoading,
		error,
		isError,
		setShippingMethod,
		shippingMethod,
		total,
		subtotal,
		onCheckout,
		deliveryMethods,
	} = useCart();
	const { width } = useWindowSize();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	const rows = useMemo(
		() =>
			data?.map((item) =>
				width < smSize || (lgSize < width && width < xlSize) ? (
					<SmallRow {...item} key={item.id} />
				) : (
					<BigRow {...item} key={item.id} />
				),
			),
		[data, width],
	);
	

	if (isLoading) return <Loading />;
	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}

			<div className='flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full py-10 md:py-15 lg:py-20'>
				<table className='w-full h-fit'>
					<thead className='border-b-1 border-black'>
						<tr>
							<ColumnTitle variant='black' className='text-left pb-6'>
								Товар
							</ColumnTitle>
							<ColumnTitle
								variant='black'
								className='hidden sm:table-cell lg:hidden xl:table-cell text-center pb-6'
							>
								Кількість
							</ColumnTitle>
							<ColumnTitle
								variant='black'
								className='hidden sm:table-cell lg:hidden xl:table-cell text-right pb-6'
							>
								Ціна
							</ColumnTitle>
							<ColumnTitle
								variant='black'
								className='hidden sm:table-cell lg:hidden xl:table-cell text-right pb-6'
							>
								Проміжний підсумок
							</ColumnTitle>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
				<aside className='flex flex-col gap-4 p-6 sm:p-4 lg:p-6 border-1 border-description_gray rounded-lg min-w-full lg:min-w-80 xl:min-w-90 h-fit'>
					<h3 className='text-18 sm:text-18 lg:text-20 font-500 leading-140'>
						Підсумок кошика
					</h3>
					<div className='flex flex-col gap-3 w-full'>
						{deliveryMethods?.map((item) => (
							<Radio
								key={item.method}
								name='shipping'
								value={item.method}
								checked={shippingMethod?.method === item.method}
								onChange={() => setShippingMethod(item)}
								label={item.label}
								valueName={item.label}
							/>
						))}
					</div>
					<CartFooter
						isHaveButtonLink={false}
						isLoading={isLoading}
						total={total}
						subtotal={subtotal}
						onCheckout={onCheckout}
					/>
				</aside>
			</div>
		</>
	);
}
