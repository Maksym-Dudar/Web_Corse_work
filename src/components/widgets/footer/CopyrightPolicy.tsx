import { TERMS_PRIVACY } from "@/config/page.config";
import Link from "next/link";

export function CopyrightPolicy() {
	return (
		<section className='flex flex-col-reverse md:flex-row gap-7 items-center'>
			<p className='text-white_grey text-8 sm:text-10 md:text-12 font-400 leading-170'>
				Copyright © 2023 3legant. Усі права захищено
			</p>
			<div className='flex flex-row gap-7'>
				{TERMS_PRIVACY.map((item) => (
					<Link
						key={item.link}
						href={item.link}
						className='text-10 md:text-12 font-600 leading-170 font-medium text-white'
					>
						{item.label}
					</Link>
				))}
			</div>
		</section>
	);
}
