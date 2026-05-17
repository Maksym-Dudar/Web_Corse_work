import { type ButtonHTMLAttributes, forwardRef, memo } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(({ className, text, ...props }, ref) => {
	const baseStyle =
		"w-full text-center font-inter bg-black rounded-lg text-12 sm:text-14 md:text-16 font-500 leading-180 text-white";

	return (
		<button {...props} ref={ref} className={twMerge(baseStyle, className)}>
			{text}
		</button>
	);
})

Button.displayName = "Button";

export default memo(Button);