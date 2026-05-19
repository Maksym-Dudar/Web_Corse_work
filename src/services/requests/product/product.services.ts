import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type {
	ICartItem,
	IProductCard,
	IProductDetails,
	IProductGroupSearchCard,
	IProductPage,
	IProductParams,
	IWishlist,
} from "@/shared/types/product/product.type";
import type { IProductPageDto, IProductGroup } from "./dto.type";
import categoryParser from "@/utils/categoryParser";
import type { IGetSearchRequest, IGetWishlistRequest } from "./requests.type";
import { mapCategoryFromBackend } from "@/utils/categoryMapper";
import { BackendCategory } from "@/config/product.config";

class ProductService {
	constructor() {}

	async getCards(
		params: IProductParams,
		signal?: AbortSignal,
	): Promise<IProductCard[]> {
		const res = await instance.get(API.PRODUCT_CARDS, { params, signal });
		return res.data;
	}

	async getDetails(id: number, signal?: AbortSignal): Promise<IProductPage> {
		const res = await instance.get<IProductPageDto>(API.PRODUCT_DETAILS, {
			params: { id },
			signal,
		});
		return {
			...res.data,
			offerExpires: new Date(res.data.offerExpires),
			category: res.data.category
				.filter((val): val is BackendCategory =>
					Object.values(BackendCategory).includes(val as BackendCategory),
				)
				.map((val) => mapCategoryFromBackend(val)),
		};
	}

	async getSearchCards(
		params: IGetSearchRequest,
		signal?: AbortSignal,
	): Promise<IProductGroupSearchCard[]> {
		return (await instance.get(API.PRODUCT_SEARCH, { params, signal })).data;
	}

	async getCartCards(
		products: number[],
		signal?: AbortSignal,
	): Promise<ICartItem[]> {
		const params = products.join(",");
		const res = (await instance.get(API.PRODUCT_BAG, { params: { ids: params }, signal }));
		return res.data;
	}

	async getWishlist(
		params: IGetWishlistRequest,
		signal?: AbortSignal,
	): Promise<IWishlist[]> {
		return (await instance.get(API.USER_WISHLIST, { params, signal })).data;
	}

	async getProductGroup(signal?: AbortSignal): Promise<IProductGroup[]> {
		return (await instance.get(API.PRODUCT_GROUP, { signal })).data;
	}

	async createProduct(payload: FormData): Promise<IProductDetails> {
		return (await instance.post(API.PRODUCT, payload)).data;
	}
}

export const productService = new ProductService();
