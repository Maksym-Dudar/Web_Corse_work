"use client";

import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/requests/user/user.services";
import { useUser } from "@/features/user/hook/useUser";

export function useAuth() {
	const query = useUser();

	return {
		user: query.userData ?? null,
		isAuthorized: !!query.userData,
		isLoading: query.isLoading,
	};
}
