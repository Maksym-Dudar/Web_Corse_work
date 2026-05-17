import { z } from "zod";

export const AddressSchema = z.object({
	name: z.string().nonempty("Це поле обов'язкове"),
	phone: z
		.string()
		.length(10, "Номер телефону має містити рівно 10 символів")
		.nonempty("Це поле обов'язкове"),
	country: z.string().nonempty("Це поле обов'язкове"),
	state: z.string().nonempty("Це поле обов'язкове"),
	city: z.string().nonempty("Це поле обов'язкове"),
	street: z.string().nonempty("Це поле обов'язкове"),
	buildingNumber: z.string(),
	zipCode: z
		.string()
		.length(5, "Поштовий індекс має містити рівно 5 символів")
		.nonempty("Це поле обов'язкове"),
});

export type AddressSchema = z.infer<typeof AddressSchema>;
