import { API } from "@/config/api.config";
import { instance } from "../axios.interceptor";
import type { IUser } from "@/shared/types/user/user.type";
import type { MassageResponse } from "../type";
import type {
	IForgotPassword,
	IGenerateOtp,
	ISignIn,
	ISignUp,
} from "@/shared/types/auth/auth.type";

class AuthService {
	async signIn(payload: ISignIn): Promise<IUser> {
		return (await instance.post(API.AUTH_SIGN_IN, payload)).data;
	}

	async signUp(payload: ISignUp): Promise<IUser> {
		return (await instance.post(API.AUTH_SIGN_UP, payload)).data;
	}

	async generateOtp(payload: IGenerateOtp): Promise<MassageResponse> {
		return (await instance.post(API.AUTH_GENERATE_OTP, payload)).data;
	}

	async resetPasswordOtp(payload: IForgotPassword): Promise<IUser> {
		return (await instance.post(API.AUTH_RESET_PASSWORD_OTP, payload)).data;
	}

	async logOut(): Promise<MassageResponse> {
		return (await instance.delete(API.AUTH_LOG_OUT)).data;
	}
}

export const authService = new AuthService();
