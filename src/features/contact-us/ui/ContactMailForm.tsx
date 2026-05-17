"use client";

import { Button, ErrorToast, Input, TextArea } from "@/components/ui";
import { emailService} from "@/services/requests/email/email.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactMailFormSchema } from "../model/contact-mail.schema";
import { useMutation } from "@tanstack/react-query";
import { useErrorToast } from "@/hooks/useErrorToast";
import type { ISendMailDto } from "@/services/requests/email/dto.type";

export function ContactMailForm() {
	const { register, handleSubmit } = useForm<ContactMailFormSchema>({
		resolver: zodResolver(ContactMailFormSchema),
	});

	const emailMutation = useMutation({
		mutationFn: (data: ISendMailDto) => emailService.sendMail(data),
	});

	const submit = handleSubmit((data) => emailMutation.mutate(data));

	const { errorMessage, closeError } = useErrorToast(
		emailMutation.error,
		emailMutation.isError,
	);

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}{" "}
			<form onSubmit={submit} className='flex flex-col w-full gap-2'>
				<Input
					label="ПОВНЕ ІМ'Я"
					placeholder="Ваше ім'я"
					{...register("name")}
				/>
				<Input
					label='EMAIL'
					placeholder='Ваш email'
					{...register("email")}
				/>
				<TextArea
					label='ПОВІДОМЛЕННЯ'
					placeholder='Ваше повідомлення'
					{...register("message")}
				/>
				<Button type='submit' className="py-2 mt-3" text='Надіслати повідомлення' />
			</form>
		</>
	);
}
