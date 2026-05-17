"use client";

import { createContext, useContext, useState } from "react";
import type { DrawerId } from "../../shared/types/drawer.type";

interface OverlayContextValue {
	active: DrawerId | null;
	open: (id: DrawerId) => void;
	close: () => void;
	isOpen: (id: DrawerId) => boolean;
}

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
	const [active, setActive] = useState<DrawerId | null>(null);

	const open = (id: DrawerId) => setActive(id);
	const close = () => setActive(null);
	const isOpen = (id: DrawerId) => active === id;

	return (
		<OverlayContext.Provider value={{ active, open, close, isOpen }}>
			{children}
		</OverlayContext.Provider>
	);
}

export function useOverlay() {
	const ctx = useContext(OverlayContext);
	if (!ctx) throw new Error("useMenu outside provider");
	return ctx;
}
