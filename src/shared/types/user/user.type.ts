export interface IUser {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

export type IUserBasic = Partial<IUser> & Pick<IUser, "id" | "email" | "firstName">
	

export type IPartialUser = Omit<Partial<IUser>, "id" | "email">