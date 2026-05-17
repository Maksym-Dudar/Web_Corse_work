import type { ThHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TVariantColumnTitle = "grey" | "black";

interface Props extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
	variant?: TVariantColumnTitle;
}

const style: Record<TVariantColumnTitle, string> = {
	grey: "font-inter text-start text-12 sm:text-10 md:text-12 lg:text-14 text-description_grey font-400 leading-160",
	black:
		"font-inter text-start text-14 sm:text-12 md:text-14 lg:text-16 text-black font-600 leading-160",
};

export default function ColumnTitle({ variant = "grey", className, children, ...rest }: Props) {
	return (
		<th className={twMerge(style[variant], className)} {...rest}>
			{children}
		</th>
	);
}
