import type { IPage } from "@/config/page.config";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"a">, IPage {}

export function NavItem({ link, label, className }: Props) {
	const baseStyle =
		"text-12 sm:text-14 font-500 leading-170 transition-transform hover:scale-105";

	return (
		<Link href={link} className={baseStyle + " " + className}>
			{label}
		</Link>
	);
}
