import { AsideBannerAuth } from "@/components/form/auth";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
			<article className='flex overflow-hidden h-full w-full'>
				<AsideBannerAuth />
				{children}
			</article>
		);
}
