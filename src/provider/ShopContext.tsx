"use client";

import { Prices, Sorts, CategoryFilter, type IPriseValue, PriceRanges } from "@/config/product.config";
import {
	createContext,
	useContext,
	useMemo,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

interface IFilterState {
	category: CategoryFilter;
	price: IPriseValue;
	sort: Sorts;
}

interface ShopContextType {
	filter: IFilterState;
	setFilter: Dispatch<SetStateAction<IFilterState>>;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
	const [filter, setFilter] = useState<IFilterState>({
		category: CategoryFilter.All,
		price: PriceRanges[Prices.All],
		sort: Sorts.Top_rated,
	});

	const contextValue = useMemo(
		() => ({
			filter,
			setFilter,
		}),
		[filter, setFilter]
	);
	return (
		<ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
	);
}

export function useShopContext() {
	const context = useContext(ShopContext);
	if (!context) {
		throw new Error("useShopContext must be used within a ShopProvider");
	}
	return context;
}
