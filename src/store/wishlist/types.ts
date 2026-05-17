export interface IInitialWishlistStore {
	wishlist: number[];
}

export interface IWishlistStore extends IInitialWishlistStore {
	addProduct: (item: number) => void;
	removeProduct: (item: number) => void;
	toggleProduct: (item: number) => void;
	isInWishlist: (id: number) => boolean;
}
