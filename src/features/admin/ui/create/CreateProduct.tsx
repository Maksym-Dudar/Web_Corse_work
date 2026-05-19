"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { CreateProductSchema } from "../../model/create-product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import {
	Button,
	ErrorToast,
	Input,
	Label,
	TextArea,
	Toggle,
} from "@/components/ui";
import CustomSelect from "@/components/ui/select/CustomSelect";
import CheckBox from "@/components/ui/inputs/CheckBox";
import { useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/requests";
import { useErrorToast } from "@/hooks/useErrorToast";
import { Loading } from "@/components/widgets";
import { BackendCategory, Category } from "@/config/product.config";
import Image from "next/image";
import { FieldError } from "@/components/ui/inputs/FieldError";

export const optionCreate = {
	label: "Створити",
	value: -1,
};

export function CreateProduct() {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateProductSchema>({
		resolver: zodResolver(CreateProductSchema),
		defaultValues: {
			isNew: false,
			category: [],
		},
	});

	const { data, isError, isLoading, error } = useQuery({
		queryKey: ["Product Group"],
		queryFn: () => productService.getProductGroup(),
	});

	const [haveSale, setHaveSale] = useState<boolean>(false);
	const { errorMessage, closeError } = useErrorToast(
		error,
		isError,
	);

	const groupOptions = (data ?? []).map((val) => ({
		label: val.title,
		value: val.id,
	}));
	groupOptions.push(optionCreate);

	const categoryOptions = [
		{ label: Category.LivingRoom, value: BackendCategory.LivingRoom },
		{ label: Category.Bedroom, value: BackendCategory.Bedroom },
		{ label: Category.Kitchen, value: BackendCategory.Kitchen },
		{ label: Category.Bathroom, value: BackendCategory.Bathroom },
		{ label: Category.Office, value: BackendCategory.Office },
	];

	const images = useWatch({ control, name: "images" });
	const productGroupId = useWatch({ control, name: "productGroupId" });

	const imagesPreview = useMemo(() => {
		if (!images?.length) {
			return [];
		}

		return Array.from(images).map((file) => URL.createObjectURL(file));
	}, [images]);

	useEffect(() => {
		if (!imagesPreview.length) return;

		return () => {
			imagesPreview.forEach((url) => URL.revokeObjectURL(url));
		};
	}, [imagesPreview]);

	const createProductMutation = useMutation({
		mutationFn: (payload: FormData) => productService.createProduct(payload),
	});

	const submit = handleSubmit(async (payload) => {
		const formData = new FormData();

		Object.entries(payload).forEach(([key, value]) => {
			if (key === "images" && value instanceof FileList) {
				Array.from(value).forEach((file) => {
					formData.append("images", file);
				});
			} else if (Array.isArray(value)) {
				value.forEach((v) => formData.append(key, String(v)));
			} else if (value instanceof Date) {
				formData.append(key, value.toISOString());
			} else if (value !== undefined && value !== null) {
				formData.append(key, String(value));
			}
		});

		await createProductMutation.mutateAsync(formData);
	});

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<form
				className='flex flex-row w-full justify-between gap-8 pb-20'
				onSubmit={submit}
			>
				<section className='flex flex-col h-full w-full gap-6'>
					<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140'>
						ЗОБРАЖЕННЯ ТОВАРУ
					</h6>
					<div className='flex flex-col w-full gap-3'>
						<label
							htmlFor='productImages'
							className='inline-flex items-center justify-center px-4 py-2 rounded-full border-1 border-grey bg-white text-grey-900 shadow-md transition hover:shadow-lg active:shadow-inner'
						>
							Оберіть зображення товару
						</label>
						<Controller
							control={control}
							name='images'
							render={({ field }) => (
								<input
									type='file'
									multiple
									accept='image/*'
									onChange={(e) => field.onChange(e.target.files)}
								/>
							)}
						/>
						<FieldError errorMessage={errors.images?.message} />
					</div>

					<div className='grid grid-cols-2 gap-3'>
						{imagesPreview.map((src, index) => (
							<Image
								key={src}
								src={src}
								alt={`preview-${index}`}
								width={0}
								height={0}
								sizes='100vw'
								style={{ width: "auto", height: "auto", borderRadius: "10px" }}
							/>
						))}
					</div>
				</section>
				<div className='w-full flex flex-col gap-14'>
					<section className='flex flex-col gap-3'>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							ГРУПА ТОВАРУ
						</h6>
						<Controller
							control={control}
							name='productGroupId'
							render={({ field }) => (
								<CustomSelect
									label='ГРУПА ТОВАРУ'
									placeholder='Група товару'
									className='w-full '
									options={groupOptions}
									styleType='outlined'
									onChange={(option) => field.onChange(option?.value)}
									value={
										groupOptions.find((o) => o.value === field.value) ?? null
									}
								/>
							)}
						/>
						<Input
							variant='outlined'
							label='НАЗВА ТОВАРУ'
							placeholder='Назва товару'
							errorMessage={errors.title?.message}
							disabled={productGroupId === undefined}
							{...register("title")}
						/>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							ДЕТАЛІ ТОВАРУ
						</h6>
						<Controller
							control={control}
							name='category'
							render={({ field }) => (
								<CustomSelect
									label='КАТЕГОРІЯ'
									placeholder='Категорія'
									className='w-full'
									options={categoryOptions}
									styleType='outlined'
									isMulti={true}
									value={
										Array.isArray(field.value)
											? categoryOptions.filter((o) =>
													field.value.includes(o.value),
												)
											: []
									}
									onChange={(selected) =>
										field.onChange(
											Array.isArray(selected)
												? selected.map((s) => s.value)
												: [],
										)
									}
								/>
							)}
						/>
						<Input
							variant='outlined'
							label='КОЛІР'
							placeholder='Колір'
							errorMessage={errors.color?.message}
							{...register("color")}
						/>
						<Input
							variant='outlined'
							label='РОЗМІРИ'
							placeholder='Розміри'
							errorMessage={errors.measurements?.message}
							{...register("measurements")}
						/>
						<div className='flex flex-row gap-4 items-start justify-between'>
							<Input
								variant='outlined'
								label='ЦІНА'
								placeholder='Ціна'
								type='number'
								errorMessage={errors.price?.message}
								{...register("price", { valueAsNumber: true })}
							/>
							<Input
								variant='outlined'
								label='КІЛЬКІСТЬ НА СКЛАДІ'
								placeholder='Кількість на складі'
								type='number'
								errorMessage={errors.quantityWarehouse?.message}
								{...register("quantityWarehouse", { valueAsNumber: true })}
							/>
						</div>
						<div className='flex flex-row gap-4 w-full'>
							<Label id='isNew' label='НОВИНКА?' className='w-16' />
							<CheckBox
								id='isNew'
								errorMessage={errors.isNew?.message}
								{...register("isNew")}
							/>
						</div>
						<h6 className='text-16 sm:text-18 lg:text-20 font-500 leading-140 pb-2'>
							ЗНИЖКА
						</h6>
						<div className='flex flex-row gap-4 items-start justify-between'>
							<div className='flex flex-col gap-2 w-24'>
								<Label id='haveSle' label='Є ЗНИЖКА?' className='w-full' />
								<Toggle
									id='haveSle'
									checked={haveSale}
									onChange={(checked: boolean) => setHaveSale(checked)}
								/>
							</div>
							<Input
								variant='outlined'
								label='ЗНИЖКА'
								placeholder='Знижка'
								type='number'
								min={0}
								max={1}
								step={0.01}
								errorMessage={errors.sale?.message}
								disabled={!haveSale}
								{...register("sale", { valueAsNumber: true })}
							/>
						</div>
						<Input
							variant='outlined'
							label='ПРОПОЗИЦІЯ ДІЄ ДО'
							placeholder='Пропозиція діє до'
							errorMessage={errors.offerExpires?.message}
							type='date'
							disabled={!haveSale}
							{...register("offerExpires", { valueAsDate: true })}
						/>
						<TextArea
							label='ОПИС'
							placeholder='Опис'
							errorMessage={errors.description?.message}
							{...register("description")}
						/>
					</section>
					<Button type='submit' text='Створити' className='py-3' />
				</div>
			</form>
		</>
	);
}
