import axios from "axios";
import type { MassageResponse } from "./type";
import { NEXT_PUBLIC_BACKEND_URL } from "@/config/env";

export const instance = axios.create({
	baseURL: NEXT_PUBLIC_BACKEND_URL,
	withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		console.log("Request:", config.method?.toUpperCase(), config.url);
		return config;
	},
	(error) => Promise.reject(error),
);

instance.interceptors.response.use(
	(res) => res,
	(error) => {
		console.log(error);
		if (axios.isAxiosError(error)) {
			const serverMessage = (error.response?.data as MassageResponse)?.message;
	return Promise.reject(new Error(serverMessage || "Помилка сервера"));
		}
		return Promise.reject(error);
	}
);
