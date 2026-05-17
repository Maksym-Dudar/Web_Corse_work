import { DrawerShell } from "@/components/ui/drawer/DrawerShell";
import { Overlay } from "@/components/ui/overlay/Overlay";
import { Footer, Header, MobileMenu } from "@/components/widgets";
import { Cart } from "@/features/cart/ui/Cart";
import { OverlayProvider } from "@/provider";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<OverlayProvider>
				<Overlay />
				<DrawerShell
					id='mobile'
					openClass='left-0 top-0 h-full w-11/12 sm:w-8/12 bg-white shadow-lg'
					closedClass='-left-full top-0 h-full w-11/12 sm:w-8/12 bg-white shadow-lg'
				>
					<MobileMenu />
				</DrawerShell>
				<DrawerShell
					id='cart'
					openClass='right-0 top-0 h-full w-11/12 sm:w-1/3 bg-white shadow-lg'
					closedClass='-right-full top-0 h-full w-11/12 sm:w-8/12 bg-white shadow-lg'
				>
					<Cart />
				</DrawerShell>
				<Header />
				{children}
				<Footer />
			</OverlayProvider>
		</>
	);
}
