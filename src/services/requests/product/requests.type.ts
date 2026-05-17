import type { CreateProductSchema } from "@/features/admin/model/create-product.schema";

export interface IGetSearchRequest {
	search: string;
}

export interface IGetWishlistRequest {
	wishlist: string;
}

export interface ICreateProduct extends CreateProductSchema {}