
export interface IOrderItem {
	id: number;
	color: string;
	title: string;
	quantity: number;
	image: string;
	price: number;
}

export interface IOrder {
	id: number;
	status: string;
	total: number;
	subtotal: number;
	shippingMethod: IDeliveryOptions;
	orderItem: IOrderItem[];
}

interface ICompleteOrderItem {
	quantity: number;
	image: string;
}

export interface IOrderComplete {
	id: number;
	total: number;
	shippingMethod: IDeliveryOptions;
	createdAt: Date;
	orderItem: ICompleteOrderItem[];
}

export interface IDeliveryOptions {
	id: number;
	percent: number;
	fixedFee: number;
	method: string;
	label: string;
}
