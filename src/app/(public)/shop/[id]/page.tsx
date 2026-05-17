import { HeroProductSection } from "@/components/widgets/product/hero/HeroProductSection";
import { Sorts } from "@/config/product.config";
import { ProductRow } from "@/features/product/ui/ProductRow";


export default function page() {
	return (
		<div className="flex flex-col w-full">
			<HeroProductSection />
			<ProductRow sort={Sorts.Top_rated} />
		</div>
	);
}
