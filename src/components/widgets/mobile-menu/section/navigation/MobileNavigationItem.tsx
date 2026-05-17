import type { IPage } from "@/config/page.config";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
	item: IPage;
	isActive: boolean;
	close: () => void;
}

export function MobileNavigationItem({ item, isActive, close }: Props) {
	const baseStyle = "text-14 font-500 leading-170";
	const activeStyle = isActive
		? "hover:scale-105 text-not_active"
		: "text-black";
	return (
		<div className='w-full border-b-1 border-white_grey pb-2'>
			<Link
				href={item.link}
				className={twMerge(baseStyle, activeStyle)}
				onClick={close}
			>
				{item.label}
			</Link>
		</div>
	);
}
