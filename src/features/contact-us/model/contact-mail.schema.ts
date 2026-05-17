import { lengthOtpCode } from "@/constants/auth.constants";
import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

export const ContactMailFormSchema = z.object({
	email: z.email("Некоректна email-адреса").nonempty("Це поле обов'язкове"),
	name: z.string().nonempty("Це поле обов'язкове"),
	message: z.string().nonempty("Це поле обов'язкове"),
});

export type ContactMailFormSchema = z.infer<typeof ContactMailFormSchema>;
