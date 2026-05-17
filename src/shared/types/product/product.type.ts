import type { Category, BackendCategory, Sorts } from "@/config/product.config";

export interface IProductCard {
	id: number;
	price: number;
	priceWithSale: number;
	rating: number;
	sale: number;
	isNew: boolean;
	image: string;
	title: string;
}

export interface IProductDetails {
	id: number;
	productGroupId: number;
	price: number;
	priceWithSale: number;
	offerExpires: Date;
	measurements: string;
	rating: number;
	sale: number;
	isNew: boolean;
	image: string[];
	category: Category[];
	reviews: number;
	color: string;
	description: string;
	title: string;
}

export interface IProductGroupSearchCard {
	id: number;
	title: string;
}

export interface ICartItem {
	image: string;
	title: string;
	color: string;
	price: number;
	sale: number;
	id: number;
}

export interface IProductParams {
	page?: number;
	take: number;
	sort?: Sorts;
	category?: BackendCategory;
	maxPrice?: number;
	minPrice?: number;
	groupId?: number | null;
}

export interface IWishlist {
	id: number;
	color: string;
	price: number;
	image: string;
	title: string;
}

export interface IProductPage {
	id: number;
	title: string;
	description: string;
	price: number;
	priceWithSale: number;
	sale: number;
	rating: number;
	isNew: boolean;
	offerExpires: Date;
	measurements: string;
	sameProduct: ISameColorCard[];
	color: string;
	image: string[];
	category: Category[];
	reviews: number;
}

export interface ISameColorCard {
	color: string;
	id: number;
	image: string;
	isActive: boolean;
}