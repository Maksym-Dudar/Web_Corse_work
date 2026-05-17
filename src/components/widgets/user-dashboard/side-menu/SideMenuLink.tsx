"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
	title: string;
	link: string;
	isActive: boolean;
}
export function SideMenuLink({ title, link, isActive }: Props) {
	const baseStyle = "font-inter font-500 text-18 sm:text-16 leading-160 ";
	const activeStyleText = isActive
		? "text-black"
		: "text-description_grey hover:text-black hover:opacity-80";

	return (
		<li
			className={
				isActive
					? "border-b-1 border-black py-1 w-30 text-center sm:text-start"
					: "py-1 w-full text-center sm:text-start"
			}
		>
			<Link className={twMerge(baseStyle, activeStyleText)} href={link}>
				{title}
			</Link>
		</li>
	);
}
