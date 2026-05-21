import { BackendCategory } from "@/config/product.config";
import { z } from "zod";

export const CreateProductSchema = z.object({
	productGroupId: z.number(),
	isNew: z.boolean(),
	offerExpires: z.date().optional(),
	sale: z
		.number()
		.max(1, "Введіть значення від 0 до 1")
		.min(0, "Введіть значення від 0 до 1")
		.optional(),
	title: z.string(),
	measurements: z.string().nonempty("Це поле обов'язкове"),
	price: z.number().min(0, "Це поле обов'язкове"),
	quantityWarehouse: z.number().min(0, "Це поле обов'язкове"),
	color: z.string().nonempty("Це поле обов'язкове"),
	description: z.string().nonempty("Це поле обов'язкове"),
	images: z
		.custom<FileList>()
		.refine((files) => files?.length > 0, "Оберіть зображення"),
	category: z
		.array(
			z.union(
				Object.values(BackendCategory).map((val) => z.literal(val)) as [
					z.ZodLiteral<string>,
					...z.ZodLiteral<string>[],
				],
			),
		)
		.min(1, "Оберіть щонайменше одну категорію"),
});

export type CreateProductSchema = z.infer<typeof CreateProductSchema>;
