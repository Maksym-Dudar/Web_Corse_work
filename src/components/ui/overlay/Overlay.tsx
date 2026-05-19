"use client";

import { useOverlay } from "@/provider/overlay/OverlayProvider";
import { twMerge } from "tailwind-merge";

export function Overlay() {
	const { active, close } = useOverlay();

	const baseStyle =
		"fixed inset-0 bg-black z-30 transition-opacity duration-300 w-full h-full";

	return (
		<div
			onClick={close}
			className={twMerge(
				baseStyle,
				active ? "opacity-70" : "opacity-0 pointer-events-none",
			)}
		/>
	);
}
