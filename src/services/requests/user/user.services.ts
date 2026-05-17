import type {
	IUpdateAvatarRequest,
} from "@/services/requests/user/requests.type";
import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type { IPartialUser, IUser } from "@/shared/types/user/user.type";
import type { IUpdateAvatarResponse } from "./dto.type";

class UserService {
	constructor() {}

	async updateAvatar(
		payload: IUpdateAvatarRequest,
	): Promise<IUpdateAvatarResponse> {
		const formData = new FormData();
		formData.append("file", payload.avatar);
		return (await instance.put(API.USER_AVATAR, formData)).data;
	}

	async getUser(signal?: AbortSignal): Promise<IUser> {
		return (await instance.get(API.USER, { signal })).data;
	}

	async updateUser(payload: IPartialUser): Promise<IUser> {
		return (await instance.patch(API.USER, payload)).data;
	}
}

export const userService = new UserService();
