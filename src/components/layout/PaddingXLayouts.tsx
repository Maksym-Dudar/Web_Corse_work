import type { PropsWithChildren } from "react";

export default function PaddingXLayouts({ children }: PropsWithChildren) {
	return (
		<article className='flex w-full px-8 sm:px-12 md:px-14 lg:px-20 xl:px-30 2xl:px-38'>
			{children}
		</article>
	);
}
