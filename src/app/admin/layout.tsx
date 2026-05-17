import { AdminLayout } from "@/components/widgets/admin-dashboard/layout/AdminLayout";
import { type PropsWithChildren } from "react";

export default function layouts({ children }: PropsWithChildren<unknown>) {
	return <AdminLayout>{children}</AdminLayout>;
}
