"use client";

import Address from "@/features/address/ui/Address";
import { useParams } from "next/navigation";

export function EditAddressPage() {
	const params = useParams();
	const id = params.id ? +params.id : undefined;

	return (
		<div className='w-full'>
			<Address id={id} />
		</div>
	);
}
