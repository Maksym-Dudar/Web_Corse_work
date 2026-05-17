import type { IDeliveryOptions } from "@/shared/types/orders/orders";

interface OrderItem {
	productId: number;
	quantity: number;
}

export interface ICreateOrder {
	total: number;
	subtotal: number;
	shippingMethodId: number;
	items: OrderItem[];
}

export interface IConfirmOrder {
	id: number;
	addressId: number;
	firstName: string;
	lastName: string;
	email: string;
}

export interface ICreateShippingMethod {
	percent: number;
	fixedFee: number;
	method: string;
	label: string;
}
