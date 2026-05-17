import type { StylesConfig } from "react-select";
import type { SelectOption, SelectVariant } from "./type";

export const createSelectBaseStyles = <T,>(): StylesConfig<
	SelectOption<T>,
	false
> => ({
	menu: (base) => ({
		...base,
		borderRadius: 16,
		padding: "5px 8px",
	}),
	option: (base, { isFocused, isSelected }) => ({
		...base,
		padding: "0.5rem 0.75rem",
		borderRadius: 12,
		backgroundColor: isSelected ? "#F3F5F7" : isFocused ? "#FEFEFE" : "#fff",
		color: isSelected
			? "#000"
			: isFocused
				? "var(--black)"
				: "var(--description-grey)",
		cursor: "pointer",
	}),
});

export const createSelectVariantStyles = <T,>(): Record<
	SelectVariant,
	StylesConfig<SelectOption<T>, false>
> => ({
	outlined: {
		control: (base) => ({
			...base,
			borderRadius: 8,
			borderWidth: 1.5,
			borderColor: "var(--not-active)",
		}),
	},
	borderless: {
		control: (base) => ({
			...base,
			border: "none",
			boxShadow: "none",
		}),
	},
});

export const baseLayoutStyles: { div: string; p: string } = {
	div: "flex ",
	p: "text-14 sm:text-16 font-400 leading-160 font-inter text-description_grey",
};
export const layoutStyles: Record<SelectVariant, { div: string; p: string }> = {
	outlined: {
		div: " flex-col gap-2",
		p: "",
	},
	borderless: {
		div: " flex-row items-center justify-center w-max",
		p: " w-20 md:w-max",
	},
};
