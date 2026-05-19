"use client";

import { useState } from "react";

export function useErrorToast(error: Error | null, isError?: boolean) {
	const [closedMessage, setClosedMessage] = useState<string | null>(null);
	const message = error instanceof Error ? error.message : null;

	const errorMessage =
		closedMessage !== message && (isError || error)
			? error instanceof Error
				? error.message
				: "Unknown error"
			: null;

	const closeError = () => setClosedMessage(errorMessage);

	return { errorMessage, closeError };
}
