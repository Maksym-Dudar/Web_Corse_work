"use client";

import { useState } from "react";

export function useErrorToast(error: Error | null, isError?: boolean) {
	const [closed, setClosed] = useState(false);

	const errorMessage =
		!closed && (isError || error)
			? error instanceof Error
				? error.message
				: "Unknown error"
			: null;

	const closeError = () => setClosed(true);

	return { errorMessage, closeError };
}
