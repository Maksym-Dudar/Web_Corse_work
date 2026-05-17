import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type {
	IDeliveryOptions,
	IOrder,
	IOrderComplete,
} from "@/shared/types/orders/orders";
import type {
	IConfirmOrder,
	ICreateOrder,
	ICreateShippingMethod,
} from "./requests.type";
import type { IGetUserOrdersDto } from "./dto.type";

class OrdersService {
	constructor() {}

	async getOrders(signal?: AbortSignal): Promise<IGetUserOrdersDto[]> {
		const res = await instance.get<IGetUserOrdersDto[]>(API.USER_ORDERS, {
			signal,
		});
		const data = res.data.map((val) => ({
			...val,
			createdAt: new Date(val.createdAt),
		}));
		return data;
	}

	async createOrder(payload: ICreateOrder): Promise<IOrder> {
		return (await instance.post(API.ORDER, payload)).data;
	}
	async getOrder(orderId: number): Promise<IOrder> {
		return (await instance.get(API.getOrderById(orderId))).data;
	}

	async confirmOrder(payload: IConfirmOrder): Promise<IOrder> {
		return (await instance.post(API.ORDER, payload)).data;
	}

	async completeOrder(orderId: number): Promise<IOrderComplete> {
		const res = (
			await instance.get<IOrderComplete>(API.getCompleteOrderById(orderId))
		).data;
		return { ...res, createdAt: new Date(res.createdAt) };
	}

	async getDeliveryOptions(): Promise<IDeliveryOptions[]> {
		return (await instance.get(API.DELIVERY_METHODS)).data;
	}

	async createShippingMethod(payload: ICreateShippingMethod): Promise<[]> {
		return (await instance.post(API.DELIVERY_METHODS, payload)).data;
	}
}

export const ordersService = new OrdersService();
