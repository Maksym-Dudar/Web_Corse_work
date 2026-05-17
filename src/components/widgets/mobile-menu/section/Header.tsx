import { ButtonCross } from "@/components/ui";
import { Search } from "@/features/search/ui/Search";

interface Props {
	closeMobileMenu: () => void;
}

export function Header({ closeMobileMenu }: Props) {
	return (
		<article className='relative flex flex-col gap-2'>
			<div className='flex flex-row justify-between'>
				<h1 className='text-black text-20 sm:text-24 md:text-28 font-500 leading-120'>
					3legant
				</h1>
				<ButtonCross size={6} onClick={closeMobileMenu} />
			</div>
			<Search />
		</article>
	);
}
