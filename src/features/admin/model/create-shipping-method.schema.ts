import { z } from "zod";

export const CreateShippingMethodSchema = z.object({
	percent: z.number().max(100).min(0, "Це поле обов'язкове"),
	fixedFee: z.number().min(0, "Це поле обов'язкове"),
	method: z.string().nonempty("Це поле обов'язкове"),
	label: z.string().nonempty("Це поле обов'язкове"),
});

export type CreateShippingMethodSchema = z.infer<typeof CreateShippingMethodSchema>;
