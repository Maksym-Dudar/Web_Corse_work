"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/requests/auth/auth.services";
import type { ISignIn } from "@/shared/types/auth/auth.type";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";

export function useSignIn() {
	const router = useRouter();

	const signInMutation = useMutation({
		mutationFn: (data: ISignIn) => authService.signIn(data),
		onSuccess: () => router.push(PAGE.HOME.link),
	});

	const submit = signInMutation.mutateAsync;

	return {
		submit,
		error: signInMutation.error,
		isError: signInMutation.isError,
		isPending: signInMutation.isPending,
	};
}
