import type {
	ISameColorCard,
} from "@/shared/types/product/product.type";

export interface IProductPageDto {
	offerExpires: string;
	category: string[];
	id: number;
	title: string;
	description: string;
	price: number;
	priceWithSale: number;
	sale: number;
	rating: number;
	isNew: boolean;
	measurements: string;
	sameProduct: ISameColorCard[];
	color: string;
	image: string[];
	reviews: number;
}

export interface IProductGroup {
	title: string;
	id: number;
}
