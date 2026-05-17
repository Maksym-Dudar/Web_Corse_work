import { PathPage } from "@/components/ui";
import { PAGE } from "@/config/page.config";
import { Category } from "@/config/product.config";

interface Props {
	category: Category;
	nameProduct: string;
}

export function HeaderProduct({ category, nameProduct }: Props) {
  return (
		<div className='flex flex-row gap-4 py-4'>
			<PathPage label={PAGE.HOME.label} src={PAGE.HOME.link} />
			<PathPage label={PAGE.SHOP.label} src={PAGE.SHOP.link} />
			<PathPage
				label={category}
				src={category && `/${PAGE.SHOP.link}?category=${category}`}
			/>
			<p className='font-inter text-12 md:text-14'>{nameProduct}</p>
		</div>
	);
}