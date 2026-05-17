import { addressService } from "@/services/requests/address/address.services";
import { useQuery } from "@tanstack/react-query";

export function useAddress() {
  	const { data: addressData, isLoading, isError, error } = useQuery({
			queryKey: ["address", "all"],
			queryFn: () => addressService.getAllAddress(),
		});
  return { addressData, isLoading, isError, error };
}