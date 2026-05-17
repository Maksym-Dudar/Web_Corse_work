import { useMouse } from "@/hooks";
import { useWishlistStore } from "@/store/wishlist/store";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
	id: number;
}

const BUTTON_OFFSET = 70;
const ANIMATION_DURATION = 0.3;
const EASE = "power2.out";

export function useProductCard({ id }: Props) {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const buttonFavoriteRef = useRef<HTMLButtonElement>(null);
	const hasMouse = useMouse();
	const { toggleProduct, isInWishlist } = useWishlistStore();

	useEffect(() => {
		if (!buttonRef.current || !buttonFavoriteRef.current) return;
		if (hasMouse) {
			gsap.set(buttonFavoriteRef.current, { y: -BUTTON_OFFSET });
			gsap.set(buttonRef.current, { y: BUTTON_OFFSET });
		} else {
			gsap.set(buttonFavoriteRef.current, { y: 0 });
			gsap.set(buttonRef.current, { y: 0 });
		}
	}, [hasMouse]);

	const animateButtons = (favY: number, mainY: number) => {
		if (hasMouse) {
			gsap.to(buttonFavoriteRef.current, { y: favY, ANIMATION_DURATION, EASE });
			gsap.to(buttonRef.current, { y: mainY, ANIMATION_DURATION, EASE });
		} else {
			return undefined;
		}
	};


	return {
		buttonRef,
		buttonFavoriteRef,
		toggleWishlist: () => toggleProduct(id),
		isInWishlist: isInWishlist(id),
		handleMouseEnter: () => animateButtons(0, 0),
		handleMouseLeave: () => animateButtons(-BUTTON_OFFSET, BUTTON_OFFSET),
	};
}
