"use client";

import Input from "@/components/ui/inputs/Input";
import { PAGE } from "@/config";
import Link from "next/link";
import PasswordInput from "./PasswordInput";
import CheckBox from "@/components/ui/inputs/CheckBox";
import Button from "@/components/ui/buttons/Button";
import { SignUpSchema } from "../model/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignUp } from "../hook/useSignUp";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";

export function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(SignUpSchema),
	});
	const { submit, isPending, isError, error } = useSignUp();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	const onSubmit = handleSubmit((data: SignUpSchema) => submit(data));
	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				onSubmit={onSubmit}
				className='flex flex-col w-full justify-center gap-8 pl-20 max-w-125'
			>
				<section className='flex flex-col gap-6'>
					<h2 className='text-40 font-500 leading-110'>{PAGE.SIGN_UP.label}</h2>
					<p className='text-16 font-400 leading-160 font-inter text-description_grey'>
						Вже маєте акаунт?{" "}
						<Link href={PAGE.SIGN_IN.link} className='text-green'>
							{PAGE.SIGN_IN.label}
						</Link>
					</p>
				</section>
				<section className='flex flex-col gap-4'>
					<Input
						placeholder="Введіть ім'я"
						variant='borderless'
						errorMessage={errors.firstName?.message}
						{...register("firstName")}
					/>
					<Input
						placeholder='Введіть email'
						variant='borderless'
						errorMessage={errors.email?.message}
						{...register("email")}
					/>
					<PasswordInput
						placeholder='Введіть пароль'
						errorMessage={errors.password?.message}
						{...register("password")}
					/>
					<PasswordInput
						placeholder='Підтвердьте пароль'
						errorMessage={errors.confirmPassword?.message}
						{...register("confirmPassword")}
					/>
					<CheckBox
						errorMessage={errors.isAgree?.message}
						{...register("isAgree")}
					>
						<p className='text-16 font-400 leading-160 font-inter '>
							Я погоджуюся з <b>Політикою конфіденційності</b> та <b>Умовами використання</b>
						</p>
					</CheckBox>
				</section>
				<Button
					text={PAGE.SIGN_UP.label}
					type='submit'
					className='py-2'
					disabled={isPending}
				/>
			</form>
		</>
	);
}
