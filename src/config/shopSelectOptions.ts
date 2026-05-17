import { CategoryFilter, PriceRanges, Prices, Sorts, type PriceOption } from "@/config/product.config";
import { createSelectOptions } from "@/utils/createSelectOptions";

export const categoryOptions = createSelectOptions(Object.values(CategoryFilter));

export const priceOptions: PriceOption[] = Object.values(Prices).map(
	(priceLabel) => ({
		label: priceLabel,
		value: PriceRanges[priceLabel],
	}),
);

export const sortOptions = createSelectOptions(Object.values(Sorts));
