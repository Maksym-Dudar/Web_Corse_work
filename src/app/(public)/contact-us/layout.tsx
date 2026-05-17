import PaddingXLayouts from "@/components/layout/PaddingXLayouts";
import type { PropsWithChildren } from "react";

export default function layouts({ children }: PropsWithChildren) {
	return <PaddingXLayouts>{children}</PaddingXLayouts>;
}
