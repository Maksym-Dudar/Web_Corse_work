"use client";

import { useQuery } from "@tanstack/react-query";
import { Loading } from "../..";
import { ordersService } from "@/services/requests";
import { ErrorToast } from "@/components/ui";
import { useErrorToast } from "@/hooks/useErrorToast";
import ColumnTitle from "@/components/ui/table/ColumnTitle";
import { Row } from "./Row";

interface Props {
	id: string;
	date: Date;
	status: string;
	price: number;
}

export function OrderTable() {
	const {
		data = [],
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["order", "all"],
		queryFn: () => ordersService.getOrders(),
	});
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<section className='w-full sm:px-4 xl:px-16'>
				<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160 pb-6'>
					Замовлення
				</h4>
				<table className='w-full gap-2 h-fit'>
					<thead>
						<tr>
							<ColumnTitle>Номер ID</ColumnTitle>
							<ColumnTitle>Дата</ColumnTitle>
							<ColumnTitle>Статус</ColumnTitle>
							<ColumnTitle>Ціна</ColumnTitle>
						</tr>
					</thead>
					<tbody className=''>
						{data.map((item) => (
							<Row {...item} key={item.id} />
						))}
					</tbody>
				</table>
			</section>
		</>
	);
}
