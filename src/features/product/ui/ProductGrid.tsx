"use client";

import { useErrorToast } from "@/hooks/useErrorToast";
import { useProductGrid } from "../hook/useProductGrid";
import { Loading } from "@/components/widgets";
import { ProductCard } from "@/components/cards";
import { ErrorToast } from "@/components/ui";

export function ProductGrid() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isError,
		error,
	} = useProductGrid();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;
	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<article className='flex flex-col w-full items-center pb-10'>
				<section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-10 w-full pb-12 md:pb-25'>
					{data?.map((item) => (
						<ProductCard {...item} key={item.id} />
					))}
				</section>
				{hasNextPage && (
					<button
						className='text-16 font-500 leading-170 text-black border rounded-full border-black w-fit px-10 py-2'
						onClick={() => fetchNextPage()}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? "Завантаження..." : "Показати більше"}
					</button>
				)}
			</article>
		</>
	);
}
