"use client";

import { useOverlay } from "@/provider/overlay/OverlayProvider";
import type { DrawerId } from "@/shared/types/drawer.type";
import { twMerge } from "tailwind-merge";

interface Props {
	id: DrawerId;
	openClass: string;
	closedClass: string;
	className?: string;
	children: React.ReactNode;
}

export function DrawerShell({
	id,
	openClass,
	closedClass,
	className,
	children,
}: Props) {
	const { isOpen } = useOverlay();

    const baseStyle = "fixed z-40 transition-all duration-300"
	return (
		<div
			className={twMerge(
				baseStyle,
				isOpen(id) ? openClass : closedClass,
				className
			)}
		>
			{children}
		</div>
	);
}
