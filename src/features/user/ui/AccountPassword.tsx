import { Input } from "@/components/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { AccountSchema } from "../model/account.schema";

interface Props {
	register: UseFormRegister<AccountSchema>;
	errors: FieldErrors<AccountSchema>;
}

export function AccountPassword({ register, errors }: Props) {
	return (
		<article className='flex flex-col w-full gap-6'>
			<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160'>
				Пароль
			</h4>
			<div className='flex flex-col w-full gap-1'>
				<Input
					label='СТАРИЙ ПАРОЛЬ'
					variant='outlined'
					errorMessage={errors.oldPassword?.message}
					placeholder='Старий пароль'
					{...register("oldPassword")}
				/>
				<Input
					label='НОВИЙ ПАРОЛЬ'
					variant='outlined'
					errorMessage={errors.newPassword?.message}
					placeholder='Новий пароль'
					{...register("newPassword")}
				/>
				<Input
					label='ПОВТОРІТЬ НОВИЙ ПАРОЛЬ'
					variant='outlined'
					errorMessage={errors.confirmNewPassword?.message}
					placeholder='Повторіть новий пароль'
					{...register("confirmNewPassword")}
				/>
			</div>
		</article>
	);
}
