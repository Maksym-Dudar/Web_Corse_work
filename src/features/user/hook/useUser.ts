import { userService } from "@/services/requests";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { data: userData, isLoading, isError, error } = useQuery({
		queryKey: ["user"],
		queryFn: ({ signal }) => userService.getUser(signal),
	});
  return { userData, isLoading, isError, error };
}