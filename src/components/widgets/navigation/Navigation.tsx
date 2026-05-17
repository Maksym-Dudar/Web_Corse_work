"use client";

import { NAVIGATION } from "@/config/page.config";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { NavItem } from "./NavItem";

interface Props {
	variant: "light" | "night";
}

const VARIANT_STYLES = {
	light: {
		active: "text-white",
		inactive: "text-not_active",
	},
	night: {
		active: "text-black",
		inactive: "text-description_grey",
	},
} as const;

export function Navigation({ variant }: Props) {
	const pathname = usePathname();

	const { active, inactive } = VARIANT_STYLES[variant];

	return (
		<nav className='flex gap-x-10 items-center'>
			{NAVIGATION.map((item) => (
				<div key={item.link}>
					<NavItem
						label={item.label}
						link={item.link}
						className={!!match(item.link)(pathname) ? active : inactive}
					/>
				</div>
			))}
		</nav>
	);
}
