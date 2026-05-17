import Link from "next/link";
import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import { SocialLink } from "./SocialLink";
import { CopyrightPolicy } from "./CopyrightPolicy";
import { PAGE } from "@/config/page.config";
import { Navigation } from "../navigation/Navigation";

export function Footer() {
	return (
		<footer className='bg-black'>
			<PaddingXLayouts>
				<div className='w-full flex flex-col pt-20 pb-8 gap-12'>
					<div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-center md:justify-between items-center'>
						<section className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center'>
							<Link href={PAGE.HOME.link}>
								<h1 className='text-18 sm:text-20 md:text-22 lg:text-24 font-500 leading-100 text-white'>
									3legant
								</h1>
							</Link>
							<div className='h-px w-6 md:rotate-90 bg-dark_grey'></div>
							<p className='text-12 md:text-14 text-white_grey font-400 leading-160'>
								Магазин подарунків і декору
							</p>
						</section>
						<Navigation variant='light' />
					</div>
					<div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center md:justify-between border-t-1 border-not_active pt-4'>
						<CopyrightPolicy />
						<SocialLink />
					</div>
				</div>
			</PaddingXLayouts>
		</footer>
	);
}
