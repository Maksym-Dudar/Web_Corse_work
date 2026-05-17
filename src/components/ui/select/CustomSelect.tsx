"use client";

import Select, {
	type StylesConfig,
	type Props as ReactSelectProps,
} from "react-select";
import { twMerge } from "tailwind-merge";
import {
	baseLayoutStyles,
	createSelectBaseStyles,
	createSelectVariantStyles,
	layoutStyles,
} from "./styles";
import type { LabelVariant, SelectOption, SelectVariant } from "./type";
import { memo, useId, type JSX } from "react";
import { Label } from "../inputs/Label";
import { FieldError } from "../inputs/FieldError";

interface Props<T, IsMulti extends boolean = false> extends Omit<
	ReactSelectProps<SelectOption<T>, IsMulti>,
	"onChange" | "value"
> {
	label: string;
	options: SelectOption<T>[];
	value: IsMulti extends true ? SelectOption<T>[] : SelectOption<T> | null;
	placeholder: string;
	styleType: SelectVariant;
	labelVersion?: LabelVariant;
	isDisabled?: boolean;
	className?: string;
	isCanHaveError?: boolean;
	errorMessage?: string;
	isMulti?: IsMulti;
	onChange: (
		val: IsMulti extends true ? SelectOption<T>[] : SelectOption<T> | null,
	) => void;
}

function CustomSelect<T, IsMulti extends boolean = false>({
	label,
	options,
	placeholder,
	styleType,
	value,
	className,
	errorMessage,
	isDisabled = false,
	labelVersion = "bold",
	isCanHaveError = false,
	isMulti = false as IsMulti,
	onChange,
	...props
}: Props<T, IsMulti>) {
	const id = useId();

const selectStyles = {
	...createSelectBaseStyles<T>(),
	...createSelectVariantStyles<T>()[styleType],
} as unknown as StylesConfig<SelectOption<T>, IsMulti>;

	return (
		<div
			className={twMerge(
				layoutStyles[styleType].div,
				baseLayoutStyles.div,
				className,
			)}
		>
			{labelVersion === "bold" ? (
				<Label id={id} label={label} />
			) : (
				<label
					htmlFor={id}
					className={twMerge(layoutStyles[styleType].p, baseLayoutStyles.p)}
				>
					{label}
				</label>
			)}

			<div className='w-full'>
				<Select<SelectOption<T>, IsMulti>
					inputId={id}
					instanceId={id}
					options={options}
					value={value as any} // TS тут любить підкидати через generic
					onChange={(val) => onChange(val as any)}
					placeholder={placeholder}
					styles={selectStyles}
					isDisabled={isDisabled}
					isMulti={isMulti}
					classNames={{
						singleValue: () =>
							"text-14 sm:text-16 text-black font-400 leading-160",
						control: () => "min-h-[48px]",
						menu: () => "text-14 md:text-16 text-description_grey",
						indicatorSeparator: () => "hidden",
					}}
					{...props}
				/>
			</div>
			{isCanHaveError && <FieldError errorMessage={errorMessage} />}
		</div>
	);
}

export default memo(CustomSelect) as <T, IsMulti extends boolean = false>(
	props: Props<T, IsMulti>,
) => JSX.Element;
