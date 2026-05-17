import { lengthOtpCode } from "@/constants/auth.constants";
import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

export const ForgotPasswordSchema = z.object({
	email: z.email("Некоректна email-адреса").nonempty("Це поле обов'язкове"),
	otpCode: z
		.string()
		.length(lengthOtpCode, "Некоректний код підтвердження")
		.nonempty("Це поле обов'язкове"),
	password: passwordSchema().nonempty("Це поле обов'язкове"),
	confirmPassword: passwordSchema().nonempty("Це поле обов'язкове"),
});

export type ForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;
