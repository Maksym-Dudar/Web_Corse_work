import { PAGE } from "@/config/page.config";
import Link from "next/link";
import { AdminMenu } from "./AdminMenu";

export function AdminHeader() {
	return (
		<header className='flex flex-row justify-between items-center'>
			<Link key={PAGE.HOME.link} href={PAGE.HOME.link} className=''>
				<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500'>
					3legant
				</h1>
			</Link>
			<AdminMenu />
			<div className='text-18 sm:text-20 md:text-22 lg:text-24 font-500 text-white'>
				3legant
			</div>
		</header>
	);
}
