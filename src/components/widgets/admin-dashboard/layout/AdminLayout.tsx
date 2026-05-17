import type { PropsWithChildren } from "react";
import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { AdminHeader } from "./AdminHeader";
export function AdminLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<PaddingXLayouts>
			<div className='flex flex-col gap-10 w-full'>
				<AdminHeader />
				{children}
			</div>
		</PaddingXLayouts>
	);
}
