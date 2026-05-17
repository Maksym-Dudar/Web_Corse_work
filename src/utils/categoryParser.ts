import { Category } from "@/config/product.config";

export default function parseCategory(val: string): Category {
	if (Object.values(Category).includes(val as Category)) return val as Category;
	throw new Error("Невідома категорія: " + val);
}
