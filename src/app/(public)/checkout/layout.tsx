import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { CheckoutHeader } from "@/components/widgets/checkout/CheckoutHeader";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<PaddingXLayouts>
			<div className='flex flex-col w-full py-10 md:py-15 lg:py-20'>
				<CheckoutHeader />
				{children}
			</div>
		</PaddingXLayouts>
	);
}
