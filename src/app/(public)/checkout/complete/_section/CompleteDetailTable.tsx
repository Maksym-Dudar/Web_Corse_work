import type { IDeliveryOptions } from "@/shared/types/orders/orders";
import { Row } from "./Row";

interface Props {
	id: number;
	createdAt: Date;
	total: number;
	shippingMethod: IDeliveryOptions;
}

export function CompleteDetailTable({
	id,
	createdAt,
	total,
	shippingMethod,
}: Props) {
	const monthName = new Intl.DateTimeFormat("uk-UA", {
		month: "long",
	}).format(createdAt);
	const date =
		monthName + " " + createdAt.getDate() + ", " + createdAt.getFullYear();
	return (
		<table>
			<tbody>
				<Row title='Код замовлення:' value={String(id)} />
				<Row title='Створено:' value={date} />
				<Row title='Разом:' value={"$" + total} />
				<Row title='Спосіб доставки:' value={shippingMethod.label} />
			</tbody>
		</table>
	);
}
