"use client";

import { ErrorToast } from "@/components/ui";
import { usePathname,  } from "next/navigation";
import { SideMenu } from "./SideMenu";
import { SidebarUser } from "./SidebarUser";
import { useSidebar } from "./useSidebar";

export function Sidebar() {
	const pathname = usePathname();
	const {
		userData,
		errorMessage,
		userAvatar,
		logOut,
		handleFileChange,
		onCloseError,
	} = useSidebar();
	return (
		<>
			{errorMessage && (
				<ErrorToast message={errorMessage} onClose={onCloseError} />
			)}
			<aside className='flex flex-col justify-center py-10 px-4 gap-10 w-full sm:w-44 md:w-60 h-fit bg-grey rounded-md mb-20'>
				<SidebarUser
					firstName={userData?.firstName || ""}
					lastName={userData?.lastName || ""}
					userAvatar={userAvatar}
					handleFileChange={handleFileChange}
				/>
				<SideMenu logOut={logOut} pathname={pathname} />
			</aside>
		</>
	);
}
