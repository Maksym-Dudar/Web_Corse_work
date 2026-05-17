import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

export const SignUpSchema = z.object({
	firstName: z.string("Некоректне ім'я").nonempty("Це поле обов'язкове"),
	email: z.email("Некоректна email-адреса").nonempty("Це поле обов'язкове"),
	password: passwordSchema().nonempty("Це поле обов'язкове"),
	confirmPassword: passwordSchema().nonempty("Це поле обов'язкове"),
	isAgree: z.literal(
		true,
		"Потрібно погодитися з Політикою конфіденційності та Умовами використання",
	),
});

export type SignUpSchema = z.infer<typeof SignUpSchema>;
