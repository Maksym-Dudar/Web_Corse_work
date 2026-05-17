import type { Category } from "@/config/product.config";


export interface IComment {
	id: number;
	firstName: string;
	createdAt: Date;
	rating: number;
	avatar: string;
	text: string;
}