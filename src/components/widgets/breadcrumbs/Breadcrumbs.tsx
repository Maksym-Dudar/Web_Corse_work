"use client";

import { useBreadcrumbs } from "./useBreadcrumbs";
import { PathPage } from "@/components/ui";

export function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs();
	return (
		<section className='flex flex-row w-full gap-1 items-start'>
			{breadcrumbs.map((val) => (
				<PathPage {...val} key={val.src} />
			))}
		</section>
	);
}
