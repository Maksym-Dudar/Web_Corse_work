"use client";

import { PAGE } from "@/config";
import { useDebounce } from "@/hooks/useDebounce";
import { useOverlay } from "@/provider/overlay/OverlayProvider";
import { productService } from "@/services/requests/product/product.services";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo, useState, type ChangeEvent } from "react";

export interface SearchOptions {
	label: string;
	groupId: number;
}

export function useSearch() {
	const router = useRouter();
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 400);

	const { data } = useQuery({
		queryKey: ["searchProduct", debouncedSearch],
		queryFn: ({ signal }) =>
			productService.getSearchCards({ search: debouncedSearch }, signal),
		enabled: debouncedSearch.length > 0,
	});

	const searchOptions = useMemo<SearchOptions[]>(() => {
		return (
			data?.map((val) => ({
				label: val.title,
				groupId: val.id,
			})) ?? []
		);
	}, [data]);

	const goToProducts = (groupId: number) => {
		setSearch("");
		router.push(`${PAGE.SHOP.link}?groupId=${groupId}`);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const searchButton = () => {
		if (search.length > 0) {
			const groupIdArray = searchOptions.map((item) => item.groupId);
			setSearch("");
			router.push(`${PAGE.SHOP.link}?groupId=${groupIdArray}`);
		}
	};

	const cleanUp = () => {
		setSearch("");
	};

	return {
		search,
		searchOptions,
		goToProducts,
		handleInputChange,
		searchButton,
		cleanUp,
	};
}
