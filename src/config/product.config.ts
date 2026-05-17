export const DEFAULT_PRODUCTS_LIMIT = 12;


export const Category = {
	LivingRoom: "Вітальня",
	Bedroom: "Спальня",
	Kitchen: "Кухня",
	Bathroom: "Ванна кімната",
	Office: "Офіс",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const BackendCategory = {
	All: "ALL",
	LivingRoom: "LIVING_ROOM",
	Bedroom: "BEDROOM",
	Kitchen: "KITCHEN",
	Bathroom: "BATHROOM",
	Office: "OFFICE",
} as const;

export type BackendCategory =
	(typeof BackendCategory)[keyof typeof BackendCategory];


export const CategoryFilter = {
	All: "Усі кімнати",
	...Category,
} as const;

export type CategoryFilter = (typeof CategoryFilter)[keyof typeof CategoryFilter];

export const Prices = {
	All: "Усі ціни",
	Price_to_100: "0-100",
	Price_to_200: "100-200",
	Price_to_300: "200-300",
	Price_to_400: "300-400",
	Price_to_500: "400-500",
	Price_over_500: "Понад 500",
};
export type Prices = (typeof Prices)[keyof typeof Prices];

export interface IPriseValue {
	min: number;
	max: number;
}

export const PriceRanges: Record<Prices, IPriseValue> = {
	[Prices.All]: { min: 0, max: 9999999999999999 },
	[Prices.Price_to_100]: { min: 0, max: 100 },
	[Prices.Price_to_200]: { min: 100, max: 200 },
	[Prices.Price_to_300]: { min: 200, max: 300 },
	[Prices.Price_to_400]: { min: 300, max: 400 },
	[Prices.Price_to_500]: { min: 400, max: 500 },
	[Prices.Price_over_500]: { min: 500, max: 99999999999999999 },
};
export type PriceOption = {
	label: Prices;
	value: IPriseValue;
};


export const Sorts = {
	Top_rated: "Найвищий рейтинг",
	Low_to_high_price: "Від дешевших до дорожчих",
	High_to_low_price: "Від дорожчих до дешевших",
	Newest: "Новинки",
} as const;

export type Sorts = (typeof Sorts)[keyof typeof Sorts];
