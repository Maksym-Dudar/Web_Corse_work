"use client"

import { useForm } from "react-hook-form";
import { CreateShippingMethodSchema } from "../../model/create-shipping-method.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { ordersService } from "@/services/requests";
import type { ICreateShippingMethod } from "@/services/requests/orders/requests.type";

export function CreateShippingMethod() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateShippingMethodSchema>({
		resolver: zodResolver(CreateShippingMethodSchema),
    });
        const createMethodMutation = useMutation({
					mutationFn: (payload: ICreateShippingMethod) =>
						ordersService.createShippingMethod(payload),
				});
	const submit = handleSubmit(async (data) => createMethodMutation.mutateAsync(data));

	return (
		<form
			className='flex flex-col w-1/2 justify-between gap-8 pb-20 items-center'
			onSubmit={submit}
		>
			<Input
				variant='outlined'
				label='НАЗВА'
				placeholder='Назва'
				errorMessage={errors.label?.message}
				{...register("label")}
			/>
			<Input
				variant='outlined'
				label='МЕТОД'
				placeholder='Метод'
				errorMessage={errors.method?.message}
				{...register("method")}
			/>
			<Input
				variant='outlined'
				label='ФІКСОВАНА ОПЛАТА'
				placeholder='Фіксована оплата'
				errorMessage={errors.fixedFee?.message}
				type='number'
				{...register("fixedFee", { valueAsNumber: true })}
			/>
			<Input
				variant='outlined'
				label='ВІДСОТОК'
				placeholder='Відсоток'
				type='number'
				min={0}
				max={1}
				step={0.01}
				errorMessage={errors.percent?.message}
				{...register("percent", { valueAsNumber: true })}
			/>
			<Button type='submit' text='Створити' className='py-3' />
		</form>
	);
}
