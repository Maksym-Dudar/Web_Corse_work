import { IMAGE, NEXT_PUBLIC_BACKEND_URL, PAGE } from "@/config";
import { useErrorToast } from "@/hooks/useErrorToast";
import { authService, userService } from "@/services/requests";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/features/user/hook/useUser"

export function useSidebar() {
  	const router = useRouter();
		const [localError, setLocalError] = useState<Error | null>(null);
	const { userData, isError, error } = useUser();
		const logoutMutation = useMutation({
			mutationKey: ["logout"],
			mutationFn: () => authService.logOut(),
			onSuccess: () => {
				router.push(PAGE.HOME.link);
			},
			onError: (error) => setLocalError(error),
		});
		const sendFileMutation = useMutation({
			mutationKey: ["avatar"],
			mutationFn: (file: File) => userService.updateAvatar({ avatar: file }),
			onError: (error) => setLocalError(error),
		});
		const { errorMessage, closeError } = useErrorToast(
			error || localError,
			isError,
		);

		const userAvatar = userData?.avatar
			? NEXT_PUBLIC_BACKEND_URL + userData.avatar
			: IMAGE.USER_ICON.src;

		function logOut() {
			logoutMutation.mutate();
		}

		function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
			const file = event.target.files?.[0];
			if (!file) {
			setLocalError(Error("Файл не знайдено"));
				return;
			}
			sendFileMutation.mutate(file);
		}

		const onCloseError = () => {
			closeError();
			setLocalError(null);
		};
  return {
		userData,
		errorMessage,
		userAvatar,
		logOut,
		handleFileChange,
		onCloseError,
	};
}
