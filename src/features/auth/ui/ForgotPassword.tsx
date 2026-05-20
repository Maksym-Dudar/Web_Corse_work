"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/Input";
import { PAGE } from "@/config";
import PasswordInput from "./PasswordInput";
import { ForgotPasswordSchema } from "../model/forgot-password.schema";
import { useForgotPassword } from "../hook/useForgotPassword";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";

export function ForgotPassword() {
	const {
		register,
		control,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(ForgotPasswordSchema),
	});

	const { submit, generateOtp, isError, error, isPending, isEmailLocked } =
		useForgotPassword();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	const onSubmit = handleSubmit((data: ForgotPasswordSchema) => submit(data));
	const email = useWatch({ control, name: "email" });

	const onSendCode = async () => {
		const isEmailValid = await trigger("email");

		if (isEmailValid) {
			generateOtp({ email });
		}
	};
	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				onSubmit={onSubmit}
				className='flex flex-col w-full lg:w-fit h-full justify-center items-center gap-8 pl-0 lg:pl-10 xl:pl-20'
			>
				<div className='flex flex-col max-w-125 px-6 sm:px-0'>
					<h2 className='text-30 lg:text-40 font-500 leading-110'>
						{PAGE.FORGOT_PASSWORD.label}
					</h2>
					<section className='flex flex-col gap-4 py-4'>
						<div className='flex flex-row gap-4 w-full'>
							<Input
								placeholder='Ваш email'
								variant='borderless'
								errorMessage={errors.email?.message}
								disabled={isEmailLocked}
								{...register("email")}
							/>
							<Button
								type='button'
								text='Отримати код'
								className='w-fit h-fit p-2.5 text-nowrap text-white'
								onClick={onSendCode}
							/>
						</div>
						<Input
							placeholder='Введіть код підтвердження'
							variant='borderless'
							errorMessage={errors.otpCode?.message}
							{...register("otpCode")}
						/>
						<PasswordInput
							placeholder='Новий пароль'
							errorMessage={errors.password?.message}
							{...register("password")}
						/>
						<PasswordInput
							placeholder='Підтвердьте пароль'
							errorMessage={errors.confirmPassword?.message}
							{...register("confirmPassword")}
						/>
					</section>
					<Button
						text='Змінити пароль'
						type='submit'
						className='py-2'
						disabled={isPending}
					/>
				</div>
			</form>
		</>
	);
}
