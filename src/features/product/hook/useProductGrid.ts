import {
	DEFAULT_PRODUCTS_LIMIT,
	CategoryFilter,
	PriceRanges,
	Prices,
	Sorts,
} from "@/config/product.config";
import { useShopContext } from "@/provider/ShopContext";
import { productService } from "@/services/requests/product/product.services";
import { mapCategoryToBackend } from "@/utils/categoryMapper";
import { toNumber, toNumberOrNull } from "@/utils/numberParser";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export function useProductGrid() {
	const sp = useSearchParams();

	const paramCategory =
		(sp.get("category") as CategoryFilter) ?? CategoryFilter.All;
	const paramSort = (sp.get("sort") as Sorts) ?? Sorts.Newest;

	const paramMaxPrice = toNumber(
		sp.get("max-price"),
		PriceRanges[Prices.All].max,
	);
	const paramMinPrice = toNumber(
		sp.get("min-price"),
		PriceRanges[Prices.All].min,
	);
	const paramTake = toNumber(sp.get("take"), DEFAULT_PRODUCTS_LIMIT);
	const paramGroupId = toNumberOrNull(sp.get("group-id"));

	const { filter, setFilter } = useShopContext();
	const params = useMemo(
		() => ({
			take: paramTake,
			sort: filter.sort,
			category: mapCategoryToBackend(filter.category),
			maxPrice: filter.price.max,
			minPrice: filter.price.min,
			groupId: paramGroupId,
		}),
		[paramTake, filter, paramGroupId],
	);

	useEffect(() => {
		setFilter({
			category: paramCategory,
			sort: paramSort,
			price: { max: paramMaxPrice, min: paramMinPrice },
		});
	}, [paramCategory, paramSort, paramMaxPrice, paramMinPrice, setFilter]);

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
		error,
	} = useInfiniteQuery({
		queryKey: [
			"products",
			paramTake,
			filter.sort,
			filter.category,
			filter.price.max,
			filter.price.min,
			paramGroupId,
		],
		queryFn: ({ pageParam, signal }) =>
			productService.getCards({ ...params, page: pageParam }, signal),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < paramTake ? undefined : pages.length + 1,
	});
	return {
		data: data?.pages.flatMap(page => page) ?? [],
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
		error,
	};
}
