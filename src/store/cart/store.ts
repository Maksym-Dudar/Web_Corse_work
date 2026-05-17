import { create, type StateCreator } from "zustand";
import type { ICartStore, IInitialCartStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

const initialCartStore: IInitialCartStore = {
	cart: [],
};

const cartStore: StateCreator<ICartStore> = (set) => ({
	...initialCartStore,
	addProduct: (item) => {
		set((state) => {
			const cart = [...state.cart];
			const index = cart.findIndex((val) => val.productId === item.productId);
			if (index !== -1) {
				const existing = cart[index];
				const newQty = Math.max(existing.quantity + 1, item.quantity); //todo
				cart[index] = { ...existing, quantity: newQty };
			} else {
				cart.push({ productId: item.productId, quantity: item.quantity });
			}
			return { ...state, cart };
		});
	},

	removeProduct: (id) => {
		set((state) => {
			const cart = state.cart.filter((val) => val.productId !== id);
			return { ...state, cart };
		});
	},

	decreaseItemCount: (item) => {
		set((state) => {
			const cart = [...state.cart];
			const index = cart.findIndex((val) => val.productId === item.productId);
			if (index !== -1) {
				const existing = cart[index];
				const newQty = existing.quantity - 1;
				if (newQty > 0) {
					cart[index] = { ...existing, quantity: newQty };
				} else {
					cart.splice(index, 1);
				}
			}
			return { ...state, cart };
		});
	},
});

export const useCartStore = create<ICartStore>()(
	persist(cartStore, {
		name: "shopping-cart",
		storage: createJSONStorage(() => localStorage),
		partialize: (state) => ({
			cart: state.cart,
		}),
	}),
);





