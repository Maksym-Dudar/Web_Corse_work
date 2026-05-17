"use client";

import { useForm } from "react-hook-form";
import { AccountDetails } from "./AccountDetails";
import { AccountPassword } from "./AccountPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { useErrorToast } from "@/hooks/useErrorToast";
import { useMutation } from "@tanstack/react-query";
import { userService } from "@/services/requests";
import type { IPartialUser } from "@/shared/types/user/user.type";
import { Button, ErrorToast } from "@/components/ui";
import { AccountSchema } from "../model/account.schema";
import { useState } from "react";

export function Account() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AccountSchema>({
		resolver: zodResolver(AccountSchema),
	});

	const [error, setError] = useState("");

	const forgotPasswordMutation = useMutation({
		mutationFn: (data: IPartialUser) => userService.updateUser(data),
		onError: (error) => setError(error.message),
	});
	const { errorMessage, closeError } = useErrorToast(new Error(error), !!error);

	const submit = () =>
		handleSubmit((data) => {
			if (data.confirmNewPassword != data.newPassword) {
				setError("Паролі не збігаються");
			}
			if (data.confirmNewPassword == data.newPassword && !data.oldPassword) {
				setError("Введіть старий пароль");
			}
			const { email, confirmNewPassword, ...restData } = data;
			forgotPasswordMutation.mutate(restData);
		});

	return (
		<>
			{!!errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form onSubmit={submit} className='flex flex-col w-full gap-10 pb-20'>
				<AccountDetails register={register} errors={errors} />
				<div className='flex flex-col w-full gap-6'>
					<AccountPassword register={register} errors={errors} />
					<Button
						type='submit'
						text='Зберегти зміни'
						className='px-10 py-3 w-fit'
					/>
				</div>
			</form>
		</>
	);
}
