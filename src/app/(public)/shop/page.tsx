import { ShopProvider } from "@/provider/ShopContext";
import { ShopHero } from "./_sections/ShopHero";
import { ShopFilter } from "./_sections/ShopFilter";
import { ProductGrid } from "@/features/product/ui/ProductGrid";

export default function Shop() {
	return (
		<ShopProvider>
			<div className='flex flex-col w-full'>
				<ShopHero />
				<ShopFilter />
				<ProductGrid />
			</div>
		</ShopProvider>
	);
}
