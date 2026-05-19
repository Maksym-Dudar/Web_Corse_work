import { Input } from "@/components/ui";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { CheckoutSchema } from "../model/checkout.schema";

interface Props {
	register: UseFormRegister<CheckoutSchema>;
	errors: FieldErrors<CheckoutSchema>;
	disabled: boolean;
}

export function ContactInformation({ register, errors, disabled }: Props) {
	return (
		<section className='flex flex-col gap-3 border-1 border-description_gray rounded-lg pt-10 pb-6 px-6'>
			<h5 className='text-20 font-500 leading-140 pb-2'>
				Контактна інформація
			</h5>
			<div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 '>
				<Input
					variant='outlined'
					label="ІМ'Я"
					placeholder="Ім'я"
					disabled={disabled}
					errorMessage={errors.firstName?.message}
					{...register("firstName")}
				/>
				<Input
					variant='outlined'
					label='ПРІЗВИЩЕ'
					placeholder='Прізвище'
					disabled={disabled}
					errorMessage={errors.lastName?.message}
					{...register("lastName")}
				/>
			</div>
			<Input
				variant='outlined'
				label='НОМЕР ТЕЛЕФОНУ'
				placeholder='Номер телефону'
				disabled={disabled}
				errorMessage={errors.phoneNumber?.message}
				{...register("phoneNumber")}
			/>
			<Input
				variant='outlined'
				label='EMAIL'
				placeholder='Ваш email'
				disabled={disabled}
				errorMessage={errors.email?.message}
				{...register("email")}
			/>
		</section>
	);
}
