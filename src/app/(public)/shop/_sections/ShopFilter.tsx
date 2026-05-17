"use client";

import { useShopContext } from "@/provider/ShopContext";
import {
	Prices,
	CategoryFilter,
	PriceRanges,
	Sorts,
} from "@/config/product.config";
import {
	categoryOptions,
	priceOptions,
	sortOptions,
} from "@/config/shopSelectOptions";
import CustomSelect  from "@/components/ui/select/CustomSelect";

export function ShopFilter() {
	const { filter, setFilter } = useShopContext();

	const categoryValue =
		categoryOptions.find((o) => o.value === filter.category) ?? null;

	const priceValue =
		priceOptions.find((o) => o?.value === filter.price) ?? null;

	const sortValue = sortOptions.find((o) => o?.value === filter.sort) ?? null;

	return (
		<div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0 pt-10 md:pt-15 w-full'>
			<div className='flex gap-4 lg:gap-6 flex-col md:flex-row w-full'>
				<CustomSelect
					label='КАТЕГОРІЇ'
					labelVersion='thin'
					options={categoryOptions}
					value={categoryValue}
					className='w-full md:w-44 lg:w-52 xl:w-60'
					onChange={(val) =>
						setFilter((prev) => ({
							...prev,
							category: val?.value ?? CategoryFilter.All,
						}))
					}
					placeholder='Категорія'
					styleType='outlined'
				/>
				<CustomSelect
					label='ЦІНА'
					labelVersion='thin'
					options={priceOptions}
					value={priceValue}
					className='w-full md:w-44 lg:w-52 xl:w-60'
					onChange={(val) =>
						setFilter((prev) => ({
							...prev,
							price: val?.value ?? PriceRanges[Prices.All],
						}))
					}
					placeholder='Ціна'
					styleType='outlined'
				/>
			</div>
			<CustomSelect
				label='Сортувати за'
				labelVersion='thin'
				options={sortOptions}
				value={sortValue}
				className='w-full md:w-52 xl:w-60'
				onChange={(val) =>
					setFilter((prev) => ({
						...prev,
						sort: val?.value ?? Sorts.Newest,
					}))
				}
				placeholder='Ціна'
				styleType='borderless'
			/>
		</div>
	);
}
