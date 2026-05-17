import type { PropsWithChildren, ReactNode } from "react";



export default function Cell({ children }: PropsWithChildren) {
	return (
		<td className='font-inter text-start text-12 md:text-14 text-black font-400 leading-160 py-6'>
			{children}
		</td>
	);
}
