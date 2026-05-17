"use client";

import Button from "@/components/ui/buttons/Button";
import Input from "@/components/ui/inputs/Input";
import { PAGE } from "@/config";
import PasswordInput from "./PasswordInput";
import Link from "next/link";
import { SignInSchema } from "../model/sign-in.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignIn } from "../hook/useSignIn";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInSchema>({
		resolver: zodResolver(SignInSchema),
	});
	const { submit, isPending, isError, error } = useSignIn();
	const { errorMessage, closeError } = useErrorToast(error, isError);
	const onSubmit = handleSubmit((data: SignInSchema) => submit(data));
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
					<h2 className='text-40 font-500 leading-110'>{PAGE.SIGN_IN.label}</h2>
					<p className='text-16 font-400 leading-160 font-inter text-description_grey'>
						Ще не маєте акаунта?{" "}
						<Link href={PAGE.SIGN_UP.link} className='text-green'>
							{PAGE.SIGN_UP.label}
						</Link>
					</p>
				</section>
				<section className='flex flex-col gap-4'>
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
					<Link
						href={PAGE.FORGOT_PASSWORD.link}
						className='text-16 font-600 leading-160 font-inter'
					>
						{PAGE.FORGOT_PASSWORD.label}?
					</Link>
				</section>
				<Button
					text={PAGE.SIGN_IN.label}
					type='submit'
					className='py-2'
					disabled={isPending}
				/>
			</form>
		</>
	);
}
