"use client";

import { useOverlay } from "@/provider/overlay/OverlayProvider";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

export function Overlay() {
	const { active, close } = useOverlay();

	const baseStyle =
        "fixed inset-0 bg-black z-30 transition-opacity duration-300 w-full h-full";
    
    	if (typeof document === "undefined") return null;

	console.log(active)
	return(
		<div
			onClick={close}
			className={twMerge(
				baseStyle,
				active ? "opacity-70" : "opacity-0 pointer-events-none"
			)}
		/>
	);
}
