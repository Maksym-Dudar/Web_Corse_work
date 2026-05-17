import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type { IGetClientSecretRequest } from "./requests.type";
import type { IPaymentIntentResponse } from "./dto.type";

class PaymentService {
	constructor() {}

	async getClientSecret(
		payload: IGetClientSecretRequest,
	): Promise<IPaymentIntentResponse> {
		return (await instance.post(API.PAYMENT_INTENT, payload)).data;
	}
}

export const paymentService = new PaymentService();
