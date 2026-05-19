import axios from "axios";
import type { MassageResponse } from "./type";

export const instance = axios.create({
	baseURL: "/api",
	withCredentials: true,
});

instance.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error),
);

instance.interceptors.response.use(
	(res) => res,
	(error) => {
		if (axios.isAxiosError(error)) {
			const serverMessage = (error.response?.data as MassageResponse)?.message;
			return Promise.reject(new Error(serverMessage || "Помилка сервера"));
		}
		return Promise.reject(error);
	}
);
