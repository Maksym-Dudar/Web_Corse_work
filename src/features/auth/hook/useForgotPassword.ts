"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/requests/auth/auth.services";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";
import type {
	IForgotPassword,
	IGenerateOtp,
} from "@/shared/types/auth/auth.type";
import type { ForgotPasswordSchema } from "../model/forgot-password.schema";

export function useForgotPassword() {
	const [error, setError] = useState<Error | null>(null);
	const [isEmailLocked, setIsEmailLocked] = useState(false);

	const router = useRouter();

	const forgotPasswordMutation = useMutation({
		mutationFn: (data: IForgotPassword) => authService.resetPasswordOtp(data),
		onSuccess: () => router.push(PAGE.HOME.link),
		onError: (error) => setError(error),
	});

	const generateOtpMutation = useMutation({
		mutationFn: (data: IGenerateOtp) => authService.generateOtp(data),
		onError: (error) => setError(error),
		onSuccess: () => setIsEmailLocked(true),
	});

	const submit = (data: ForgotPasswordSchema) => {
		if (data.password != data.confirmPassword) {
			setError(new Error("Паролі не збігаються"));
			return;
		}
		const { confirmPassword, ...payload } = data;
		forgotPasswordMutation.mutateAsync(payload);
	};

	const generateOtp = (data: IGenerateOtp) => {
		generateOtpMutation.mutateAsync(data);
	};

	return {
		submit,
		generateOtp,
		error: error,
		isError:
			Boolean(error) ||
			forgotPasswordMutation.isError ||
			generateOtpMutation.isError,
		isPending: forgotPasswordMutation.isPending,
		isEmailLocked,
	};
}
