import { Input } from "@/components/ui";
import { type UseFormRegister, type FieldErrors, Controller, type Control } from "react-hook-form";
import type { CheckoutSchema } from "../model/checkout.schema";
import CustomSelect from "@/components/ui/select/CustomSelect";
import type { SelectOption } from "@/components/ui/select/type";

interface Props {
	register: UseFormRegister<CheckoutSchema>;
	errors: FieldErrors<CheckoutSchema>;
	control: Control<CheckoutSchema>;
    options: SelectOption<string>[];
    disabled: boolean;
}

export function ShippingAddress({
	register,
	errors,
	control,
	options,
	disabled,
}: Props) {
	return (
		<section className='flex flex-col gap-3 border-1 border-description_gray rounded-lg pt-10 pb-6 px-6'>
			<h5 className='text-20 font-500 leading-140 pb-2'>Адреса доставки</h5>
			<Input
				variant='outlined'
				label='ВУЛИЦЯ'
				placeholder='Вулиця'
				disabled={disabled}
				errorMessage={errors.street?.message}
				{...register("street")}
			/>
			<Controller
				control={control}
				name='country'
				disabled={disabled}
				render={({ field }) => (
					<CustomSelect
						label='КРАЇНА'
						placeholder='Країна'
						className='w-full '
						options={options}
						styleType='outlined'
						onChange={(option) => field.onChange(option?.value)}
						value={null}
						errorMessage={errors.country?.message}
						isCanHaveError={true}
					/>
				)}
			/>
			<Input
				variant='outlined'
				label='МІСТО'
				placeholder='Місто'
				disabled={disabled}
				errorMessage={errors.city?.message}
				{...register("city")}
			/>
			<div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 '>
				<Input
					variant='outlined'
					label='ОБЛАСТЬ'
					placeholder='Область'
					disabled={disabled}
					errorMessage={errors.state?.message}
					{...register("state")}
				/>
				<Input
					variant='outlined'
					label='ПОШТОВИЙ ІНДЕКС'
					placeholder='Поштовий індекс'
					disabled={disabled}
					errorMessage={errors.zipCode?.message}
					{...register("zipCode")}
				/>
			</div>
			<Input
				variant='outlined'
				label='НОМЕР БУДИНКУ'
				placeholder='Номер будинку'
				disabled={disabled}
				errorMessage={errors.buildingNumber?.message}
				{...register("buildingNumber")}
			/>
		</section>
	);
}
