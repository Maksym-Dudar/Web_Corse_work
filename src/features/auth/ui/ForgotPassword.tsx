"use client";

import { useForm } from "react-hook-form";
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
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(ForgotPasswordSchema),
	});

	const { submit, generateOtp, isError, error, isPending, isEmailLocked } =
		useForgotPassword();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	const onSubmit = handleSubmit((data: ForgotPasswordSchema) => submit(data));
	const email = watch("email");

	const onSendCode = () => generateOtp({ email });
	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				onSubmit={onSubmit}
				className='flex flex-col w-full justify-center gap-8 pl-20 max-w-125'
			>
				<h2 className='text-40 font-500 leading-110'>
					{PAGE.FORGOT_PASSWORD.label}
				</h2>
				<section className='flex flex-col gap-4'>
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
							text='Надіслати код'
							className='w-3/6 items-center h-10 top-0'
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
					<Button
						text='Змінити пароль'
						type='submit'
						className='py-2'
						disabled={isPending}
					/>
				</section>
			</form>
		</>
	);
}
