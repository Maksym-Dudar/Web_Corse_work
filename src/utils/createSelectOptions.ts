import { CategoryFilter } from "@/config/product.config";

export function createSelectOptions<T extends string>(values: readonly T[]) {
	return values.map((v) => ({
		value: v,
		label: v,
	}));
}
