import { Input } from "@/components/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { AccountSchema } from "../model/account.schema";

interface Props {
	register: UseFormRegister<AccountSchema>;
	errors: FieldErrors<AccountSchema>;
}

export function AccountDetails({ register, errors }: Props) {
	return (
		<article className='flex flex-col w-full gap-6'>
			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160'>
				Дані акаунта
			</h4>
			<div className='flex flex-col w-full gap-1'>
				<Input
					label="ІМ'Я *"
					variant='outlined'
					errorMessage={errors.firstName?.message}
					placeholder="Ім'я"
					{...register("firstName")}
				/>
				<Input
					label='ПРІЗВИЩЕ *'
					variant='outlined'
					errorMessage={errors.lastName?.message}
					placeholder='Прізвище'
					{...register("lastName")}
				/>
				<Input
					label='EMAIL *'
					variant='outlined'
					errorMessage={errors.email?.message}
					placeholder='Email'
					readOnly={true}
					{...register("email")}
				/>
			</div>
		</article>
	);
}
