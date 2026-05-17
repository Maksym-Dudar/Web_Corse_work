"use client";

import { ArrowLink, ErrorToast } from "@/components/ui";
import { PAGE } from "@/config";
import { ProductCard } from "@/components/cards";
import type { IProductParams } from "@/shared/types/product/product.type";
import { useProductRow } from "../hook/useProductRow";
import { Loading } from "@/components/widgets";
import type { PropsWithChildren } from "react";
import { useErrorToast } from "@/hooks/useErrorToast";

interface Props extends Partial<IProductParams>, PropsWithChildren {}
export function ProductRow({ children, ...params }: Props) {
	const { scrollRef, data, isLoading, error, isError } = useProductRow(params);
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<section className='flex flex-col w-full py-12 gap-12'>
				<div className='flex justify-between items-end h-fit'>
					<h3 className='text-32 sm:text-36 md:text-38 lg:text-40 font-500 leading-110 grid grid-rows-2 h-20'>
						{children}
					</h3>
					<ArrowLink title='Більше товарів' link={PAGE.SHOP.link} />
				</div>
				<div
					ref={scrollRef}
					className='flex gap-4 md:gap-5 lg:gap-6 overflow-x-scroll custom-scrollbar scroll-smooth pb-8 md:pb-12'
				>
					{!errorMessage &&
						data?.map((item) => (
							<div key={item.id} className='shrink-0 w-52 sm:w-60 lg:w-72'>
								<ProductCard {...item} />
							</div>
						))}
				</div>
			</section>
		</>
	);
}
