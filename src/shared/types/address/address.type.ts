export interface IContactInfo {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
}

export interface IAddressInfo {
	country: { label: string; value: string };
	state: string;
	city: string;
	street: string;
	buildingNumber: string;
	zipCode: string;
}
export interface IAddressBase {
	name: string;
	phone: string;
	country: string;
	state: string;
	city: string;
	street: string;
	buildingNumber: string;
	zipCode: string;
}

export interface IAddress extends IAddressBase {
	id: number;
}