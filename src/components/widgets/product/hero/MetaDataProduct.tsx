import type { Category } from "@/config/product.config";

interface Props {
	id: number;
	category: Category[];
}

export function MetaDataProduct({ id, category }: Props) {
	return (
		<section className='flex gap-14 pt-6'>
			<div className='font-inter font-400 text-12 leading-170 text-description_grey'>
				<p>SKU</p>
				<p>КАТЕГОРІЯ</p>
			</div>
			<div className='font-inter font-400 text-12 leading-170'>
				<p>{id}</p>
				<span>
					{category.map((val) => (
						<p key={val}>{val}</p>
					))}
				</span>
			</div>
		</section>
	);
}
