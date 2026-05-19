import type { IAddress, IAddressBase } from "@/shared/types/address/address.type";
import { instance } from "../axios.interceptor";
import { API } from "@/config";

class AddressService {
	constructor() {}

	async getAllAddress(): Promise<IAddress[]> {
		return (await instance.get(API.ADDRESS)).data;
	}
	async getAddress(id: number): Promise<IAddress> {
		return (await instance.get(API.getAddressById(id))).data;
	}
	async createAddress(payload: IAddressBase): Promise<IAddress> {
		return (await instance.post(API.ADDRESS, payload)).data;
	}

	async updateAddress(payload: IAddress): Promise<IAddress> {
		return (await instance.put(API.ADDRESS, payload)).data;
	}
}

export const addressService = new AddressService();
