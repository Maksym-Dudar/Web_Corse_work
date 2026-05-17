import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

export const SignInSchema = z.object({
	email: z.email("Некоректна email-адреса").nonempty("Це поле обов'язкове"),
	password: passwordSchema().nonempty("Це поле обов'язкове"),
});

export type SignInSchema = z.infer<typeof SignInSchema>;
