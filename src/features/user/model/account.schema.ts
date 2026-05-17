import { passwordSchema } from "@/shared/model/password.schema";
import { z } from "zod";

const ResetPasswordSchema = z.object({
	oldPassword: passwordSchema(),
	newPassword: passwordSchema(),
	confirmNewPassword: passwordSchema(),
});

const UserDetailsSchema = z.object({
	firstName: z.string("Некоректне ім'я"),
	lastName: z.string("Некоректне прізвище"),
	email: z.email("Некоректна email-адреса"),
});

export const AccountSchema = ResetPasswordSchema.merge(UserDetailsSchema);

export type AccountSchema = z.infer<typeof AccountSchema>;
