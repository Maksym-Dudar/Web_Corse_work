"use client";

import { usePathname } from "next/navigation";
import { useOverlay } from "@/provider/overlay/OverlayProvider";
import {
	Header,
	HeaderActions,
	MobileNavigation,
	SocialLink,
	UserActionButton,
} from "./section";

export function MobileMenu() {
	const pathname = usePathname();
	const { close } = useOverlay();

	return (
		<div className='flex'>
			<aside className='flex flex-col justify-between fixed h-full w-11/12 sm:w-8/12  z-50 bg-white py-6 sm:py-8 px-6'>
				<section className='flex flex-col gap-8'>
					<Header closeMobileMenu={close} />
					<MobileNavigation pathname={pathname} close={close} />
				</section>
				<section className='flex flex-col gap-4'>
					<HeaderActions />
					<UserActionButton />
					<SocialLink />
				</section>
			</aside>
		</div>
	);
}
