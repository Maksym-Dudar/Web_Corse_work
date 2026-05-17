import type { IDeliveryOptions } from "@/shared/types/orders/orders";

export interface IGetUserOrdersDto {
	total: number;
	subtotal: number;
	shippingMethod: IDeliveryOptions;
	id: number;
	userId: number;
	addressId: number | null;
	createdAt: Date;
	status:
		| "PENDING"
		| "CONFIRMED"
		| "PROCESSING"
		| "SHIPPED"
		| "DELIVERED"
		| "COMPLETED"
		| "CANCELLED"
		| "RETURNED"
		| "FAILED"; // todo
}
