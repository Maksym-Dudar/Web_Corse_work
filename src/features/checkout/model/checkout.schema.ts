import { z } from "zod";

export const CheckoutSchema = z.object({
	firstName: z.string().nonempty("Це поле обов'язкове"),
	lastName: z.string().nonempty("Це поле обов'язкове"),
	phone: z
		.string()
		.length(10, "Номер телефону має містити рівно 10 символів")
		.nonempty("Це поле обов'язкове"),
	email: z.email("Некоректна email-адреса").nonempty("Це поле обов'язкове"),

	street: z.string().nonempty("Це поле обов'язкове"),
	country: z.string().nonempty("Це поле обов'язкове"),
	state: z.string().nonempty("Це поле обов'язкове"),
	city: z.string().nonempty("Це поле обов'язкове"),
	buildingNumber: z.string(),
	zipCode: z
		.string()
		.length(5, "Поштовий індекс має містити рівно 5 символів")
		.nonempty("Це поле обов'язкове"),
});

export type CheckoutSchema = z.infer<typeof CheckoutSchema>;
