"use client";

import Link from "next/link";
import { AddressCard } from "./AddressCard";
import { PAGE } from "@/config/page.config";
import { useQuery } from "@tanstack/react-query";
import { addressService } from "@/services/requests/address/address.services";
import { useErrorToast } from "@/hooks/useErrorToast";
import { Loading } from "../..";
import ErrorToast from "../../error/ErrorToast";
import { useAddress } from "@/features/address/hook/useAddress";

export function AddressDashboard() {
	const { addressData, isLoading, isError, error } = useAddress();
	const { errorMessage, closeError } = useErrorToast(error, isError);

	if (isLoading) return <Loading />;

	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={closeError} />
			)}
			<section className='w-full sm:px-4 xl:px-16'>
				<h4 className='text-16 sm:text-18 md:text-20 font-600 leading-160 pb-6'>
					Адреси
				</h4>
				<div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 pb-10 w-full'>
					{addressData?.map((val) => (
						<AddressCard
							key={val.id}
							phoneNumber={val.phone}
							name={val.name}
							address={
								val.buildingNumber +
								" " +
								val.street +
								", " +
								val.city +
								", " +
								val.country
							}
							id={val.id}
						/>
					))}
					<Link
						href={PAGE.ADDRESS_CREATE.link}
						className='w-full h-32 rounded-lg border-1 border-description_grey text-center text-black text-48 font-200 leading-160 content-center'
					>
						+
					</Link>
				</div>
			</section>
		</>
	);
}
