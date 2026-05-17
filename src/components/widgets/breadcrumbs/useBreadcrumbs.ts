import { useSelectedLayoutSegments } from "next/navigation";

const segmentLabels: Record<string, string> = {
	account: "акаунт",
	address: "адреси",
	create: "створити",
	edit: "редагувати",
	orders: "замовлення",
	wishlist: "список бажань",
	shop: "магазин",
	checkout: "оформлення",
	cart: "кошик",
	details: "деталі",
	complete: "готово",
	"contact-us": "контакти",
};

export function useBreadcrumbs() {
	const segments = useSelectedLayoutSegments();

	return segments.map((segment, index) => ({
		label: segmentLabels[segment] ?? segment.toLowerCase(),
		src: "/" + segments.slice(0, index + 1).join("/"),
	}));
}
