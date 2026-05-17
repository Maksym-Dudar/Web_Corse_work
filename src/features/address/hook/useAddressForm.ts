import { addressService } from "@/services/requests/address/address.services";
import type { IAddress, IAddressBase } from "@/shared/types/address/address.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCode, getNames } from "country-list";
import { useMemo } from "react";
import { useCreateAddress } from "./useCreateAddress";

interface Props {
	id?: number;
}

interface UpdateAddressPayload extends IAddress {
	id: number;
}

export function useAddressForm({ id }: Props) {
	const { data } = useQuery({
		queryKey: ["address", id],
		queryFn: () => addressService.getAddress(id!),
		enabled: id !== undefined,
	});
	const options = useMemo(
		() =>
			getNames()
				.map((name) => {
					const code = getCode(name);
					return code ? { label: name, value: code } : null;
				})
				.filter(
					(item): item is { label: string; value: string } => item !== null,
				),
		[],
	);
	const {createAddressMutation} = useCreateAddress();
	const updateAddressMutation = useMutation({
		mutationFn: (payload: UpdateAddressPayload) =>
			addressService.updateAddress(payload),
  });
  
  const createAddress = (data: IAddressBase) => createAddressMutation.mutate(data);
  const updateAddress = (data: UpdateAddressPayload) => updateAddressMutation.mutate(data);
  return {
		data,
		options,
		createAddress,
		updateAddress,
	};
}
