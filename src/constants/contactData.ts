import { IMAGE } from "@/config/image.config";

interface IContactData {
	title: string;
	src: string;
	alt: string;
	subtitle: string;
}

export const contactData: IContactData[] = [
	{
		title: "АДРЕСА",
		subtitle: "Київ",
		src: IMAGE.HOME.src,
		alt: IMAGE.HOME.alt,
	},
	{
		title: "ЗВ'ЯЗОК ЗІ МНОЮ",
		subtitle: "+38 098 983 1308",
		src: IMAGE.RECTANGLE.src,
		alt: IMAGE.RECTANGLE.alt,
	},
	{
		title: "EMAIL",
		subtitle: "dudarchuk.maksym@gmail.com",
		src: IMAGE.CONTACT_MAIL.src,
		alt: IMAGE.CONTACT_MAIL.alt,
	},
];

export const gitHubAccount = "https://github.com/Maksym-Dudar";
