"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/requests/auth/auth.services";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";
import type { ISignUp } from "@/shared/types/auth/auth.type";
import type { SignUpSchema } from "../model/sign-up";

export function useSignUp() {
	const router = useRouter();
	const [error, setError] = useState<Error | null>(null);

	const signUpMutation = useMutation({
		mutationFn: (data: ISignUp) => authService.signUp(data),
		onSuccess: () => router.push(PAGE.HOME.link),
		onError: (err: Error) => setError(err),
	});

	const submit = (data: SignUpSchema) => {
		if (data.password !== data.confirmPassword) {
			setError(new Error("Паролі не збігаються"));
			return;
		}

		setError(null);

		const { confirmPassword, isAgree, ...payload } = data;
		signUpMutation.mutate(payload);
	};

	return {
		submit,
		error,
		isError: Boolean(error) || signUpMutation.isError,
		isPending: signUpMutation.isPending,
	};
}
