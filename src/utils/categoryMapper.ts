import { CategoryFilter, BackendCategory, Category } from "@/config/product.config";

export function mapCategoryToBackend(
	category: CategoryFilter,
): BackendCategory {
	switch (category) {
		case CategoryFilter.All:
			return BackendCategory.All;

		case CategoryFilter.LivingRoom:
			return BackendCategory.LivingRoom;

		case CategoryFilter.Bedroom:
			return BackendCategory.Bedroom;

		case CategoryFilter.Kitchen:
			return BackendCategory.Kitchen;

		case CategoryFilter.Bathroom:
			return BackendCategory.Bathroom;

		case CategoryFilter.Office:
			return BackendCategory.Office;

		default:
			return BackendCategory.All;
	}
}

export function mapCategoryFromBackend(
	category: BackendCategory,
): Category {
	switch (category) {
		case BackendCategory.LivingRoom:
			return Category.LivingRoom;

		case BackendCategory.Bedroom:
			return Category.Bedroom;

		case BackendCategory.Kitchen:
			return Category.Kitchen;

		case BackendCategory.Bathroom:
			return Category.Bathroom;

		case BackendCategory.Office:
			return Category.Office;

		default:
			throw new Error("Невідома категорія: " + category);
	}
}
