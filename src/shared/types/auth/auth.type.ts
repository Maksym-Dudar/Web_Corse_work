export interface ISignIn {
	email: string;
	password: string;
}

export interface ISignUp {
	firstName: string;
	email: string;
	password: string;
}

export interface IForgotPassword {
	email: string;
	otpCode: string;
	password: string;
}

export interface IGenerateOtp {
	email: string;
}

export interface IResetPassword {
	oldPassword: string;
	newPassword: string;
}
