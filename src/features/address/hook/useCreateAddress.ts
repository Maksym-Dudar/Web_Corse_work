import { addressService } from "@/services/requests/address/address.services";
import type { IAddressBase } from "@/shared/types/address/address.type";
import { useMutation } from "@tanstack/react-query";

export function useCreateAddress() {
  	const createAddressMutation = useMutation({
			mutationFn: (payload: IAddressBase) =>
				addressService.createAddress(payload),
		});
  return { createAddressMutation }
}