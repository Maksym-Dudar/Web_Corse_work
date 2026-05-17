import { PAGE } from "@/config";
import { SideMenuLink } from "./SideMenuLink";
import { match } from "path-to-regexp";

interface Props {
	pathname: string;
	logOut: () => void;
}

export function SideMenu({ pathname, logOut }: Props) {
	return (
		<menu className='flex flex-col items-center sm:items-start w-full gap-3'>
			<SideMenuLink
				title={PAGE.ACCOUNT.label}
				link={PAGE.ACCOUNT.link}
				isActive={!!match(pathname)(PAGE.ACCOUNT.link)}
			/>
			<SideMenuLink
				title={PAGE.ADDRESS.label}
				link={PAGE.ADDRESS.link}
				isActive={!!match(pathname)(PAGE.ADDRESS.link)}
			/>
			<SideMenuLink
				title={PAGE.ORDERS.label}
				link={PAGE.ORDERS.link}
				isActive={!!match(pathname)(PAGE.ORDERS.link)}
			/>
			<SideMenuLink
				title={PAGE.WISHLIST.label}
				link={PAGE.WISHLIST.link}
				isActive={!!match(pathname)(PAGE.WISHLIST.link)}
			/>
			<button
				className='py-1 text-description_grey font-inter font-500 text-18 sm:text-16 leading-160 cursor-pointer'
				onClick={logOut}
			>
				Вийти
			</button>
		</menu>
	);
}
