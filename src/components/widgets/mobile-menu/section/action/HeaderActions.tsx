import { PAGE } from "@/config/page.config";
import { IMAGE } from "@/config/image.config";
import { HeaderActionItem } from "./HeaderActionItem";
import { useWishlistStore } from "@/store/wishlist/store";
import { useCartStore } from "@/store/cart/store";

export function HeaderActions() {
	const { cart } = useCartStore();
	const { wishlist } = useWishlistStore();
	return (
		<article className='flex flex-col gap-2'>
			<HeaderActionItem
				src={IMAGE.SHOPPING_BAG.src}
				alt={IMAGE.SHOPPING_BAG.alt}
				link={PAGE.CART.link}
				label={PAGE.CART.label}
				size={cart.length}
			/>
			<HeaderActionItem
				src={IMAGE.LIKE_NOT_ACTIVE.src}
				alt={IMAGE.LIKE_NOT_ACTIVE.alt}
				link={PAGE.WISHLIST.link}
				label={PAGE.WISHLIST.label}
				size={wishlist.length}
			/>
		</article>
	);
}
