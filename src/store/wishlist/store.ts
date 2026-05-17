import { create, type StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type {
	IInitialWishlistStore,
	IWishlistStore,
} from "./types";

const initialWishlistStore: IInitialWishlistStore = {
	wishlist: [],
};

const wishlistStore: StateCreator<IWishlistStore> = (set, get) => ({
	...initialWishlistStore,

	addProduct: (item) => {
		const exists = get().wishlist.some((x) => x === item);
		if (!exists) {
			set((state) => ({
				wishlist: [...state.wishlist, item],
			}));
		}
	},

	removeProduct: (item) => {
		set((state) => ({
			wishlist: state.wishlist.filter((x) => x !== item),
		}));
	},

	toggleProduct: (item) => {
		const exists = get().wishlist.some((x) => x === item);
		if (exists) {
			get().removeProduct(item);
		} else {
			get().addProduct(item);
		}
	},

	isInWishlist: (id) => {
		return get().wishlist.some((x) => x === id);
	},
});

export const useWishlistStore = create<IWishlistStore>()(
	persist(wishlistStore, {
		name: "wishlist",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			wishlist: state.wishlist,
		}),
	})
);