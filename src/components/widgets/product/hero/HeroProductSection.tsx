"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Error, Loading } from "../..";
import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { HeaderProduct } from "../HeaderProduct";
import { InfoProduct } from "./InfoProduct";
import { CountdownTimer } from "./CountdownTimer";

import { MetaDataProduct } from "./MetaDataProduct";
import { productService } from "@/services/requests";
import { useErrorToast } from "@/hooks/useErrorToast";
import { ErrorToast } from "@/components/ui";
import { SwiperSectionProduct } from "./SwiperSectionProduct";
import { OptionsProduct } from "./OptionsProduct";
import { PurchaseActions } from "./PurchaseActions";
import type { IProductPage } from "@/shared/types/product/product.type";

export function HeroProductSection() {
	const params = useParams();
	const id = Number(params.id);
	const { data, isLoading, error, isError } = useQuery<IProductPage>({
		queryKey: ["product", id],
		queryFn: ({ signal }) => productService.getDetails(id, signal),
		enabled: Number.isFinite(id),
	});

	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (!Number.isFinite(id)) {
		return <Error message='Некоректний ID товару' />;
	}

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			{data && (
				<div className='flex flex-col w-full'>
					<HeaderProduct category={data.category[0]} nameProduct={data.title} />
					<div className='flex flex-col md:flex-row w-full justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16'>
							<SwiperSectionProduct
								images={data.image || []}
								isNew={data.isNew}
								sale={data.sale}
							/>
						<div className='flex flex-col w-full md:w-1/2'>
							<InfoProduct
								name={data.title}
								rating={data.rating}
								reviews={data.reviews}
								description={data.description}
								price={data.price}
								priceWithSale={data.priceWithSale}
								sale={!!data.sale}
							/>
							{data.sale && (
								<CountdownTimer
									offerExpires={new Date(data.offerExpires)}
									sale={!!data.sale}
								/>
							)}
							<OptionsProduct
								color={data.color}
								same={data.sameProduct}
								measurements={data.measurements}
							/>
							<PurchaseActions id={id} />
							<MetaDataProduct id={id} category={data.category} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
