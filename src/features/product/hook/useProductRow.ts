"use client";

import { productService } from "@/services/requests/product/product.services";
import type { IProductParams } from "@/shared/types/product/product.type";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

interface Props extends Partial<IProductParams> {}

export function useProductRow(params: Props) {
	const scrollRef = useRef<HTMLDivElement>(null);

	const { data, error, isError, isLoading } = useQuery({
		queryKey: ["products", params],
		queryFn: () =>
			productService.getCards({
				take: params.take ?? 8,
				...params,
			}),
	});

	return {
		error,
		scrollRef,
		data,
		isError,
		isLoading,
	};
}
