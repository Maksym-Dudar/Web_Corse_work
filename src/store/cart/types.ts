export interface ICartStoreItem {
	productId: number;
	quantity: number;
}
export interface IInitialCartStore {
	cart: ICartStoreItem[];
}

export interface IAction {
	addProduct: (item: ICartStoreItem) => void;
	removeProduct: (id: number) => void;
	decreaseItemCount: (item: ICartStoreItem) => void;
}

export interface ICartStore extends IInitialCartStore, IAction {}
