"use client";

import { PAGE } from "@/config/page.config";
import { MenuLink } from "./MenuLink";
import { usePathname } from "next/navigation";

export function AdminMenu() {
	const path = usePathname();
	return (
		<menu className='flex gap-6 justify-center items-center pt-2'>
			<MenuLink
				label={PAGE.ADMIN_DASHBOARD.label}
				link={PAGE.ADMIN_DASHBOARD.link}
				isActive={path == PAGE.ADMIN_DASHBOARD.link}
			/>
			<MenuLink
				label={PAGE.CREATE_PRODUCT.label}
				link={PAGE.CREATE_PRODUCT.link}
				isActive={path == PAGE.CREATE_PRODUCT.link}
			/>
			<MenuLink
				label={PAGE.ADMIN_SHIPPING_METHOD.label}
				link={PAGE.ADMIN_SHIPPING_METHOD.link}
				isActive={path == PAGE.ADMIN_SHIPPING_METHOD.link}
			/>
		</menu>
	);
}
