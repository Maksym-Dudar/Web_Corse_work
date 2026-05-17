type TVariantCounter = "grey" | "white";

interface Props {
	quantity: number;
	decrement: () => void;
	increment: () => void;
	disabled?: boolean;
	variant?: TVariantCounter;
}

const style: Record<
	TVariantCounter,
	{ button: string; quantity: string; general: string }
> = {
	grey: {
		button: "text-18 md:text-20 font-300 leading-170",
		quantity: "flex w-1 justify-center text-18 md:text-20 font-300 leading-170",
		general:
			"flex flex-row w-fit px-3 md:px-4 py-1.5 md:py-3 gap-6 bg-grey rounded-lg",
	},
	white: {
		button: "text-16 sm:text-20 font-200 leading-100",
		quantity: "flex w-1 justify-center text-12 font-600 leading-170",
		general:
			"flex flex-row items-center w-fit px-1 md:px-2 py-0.5 md:py-1 gap-3 bg-white rounded-lg border border-not_active",
	},
};

export function Counter({
	quantity,
	decrement,
	increment,
	disabled=false,
	variant = "white",
}: Props) {
	return (
		<div className={style[variant].general}>
			<button
				className={style[variant].button}
				onClick={decrement}
				disabled={disabled}
			>
				-
			</button>
			<p className={style[variant].quantity}>{quantity}</p>
			<button
				className={style[variant].button}
				onClick={increment}
				disabled={disabled}
			>
				+
			</button>
		</div>
	);
}
