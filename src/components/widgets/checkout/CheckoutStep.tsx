import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IMAGE } from "@/config";

interface CheckoutStepProps {
	status: CheckoutStepStatus;
	title: string;
	count: number;
}

const baseStyles = {
	container: " flex flex-row gap-4 w-fit sm:w-44 md:w-50 lg:w-60 pb-4 md:pb-6",
	icon: "h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center",
	title: "font-inter font-600 leading-160 text-16",
};

const variants: Record<
	CheckoutStepStatus,
	{
		container: string;
		icon: string;
		title: string;
	}
> = {
	completed: {
		container: " sm:border-green sm:border-b-2",
		icon: "bg-green",
		title: "text-green hidden sm:contents",
	},
	inProgress: {
		container: "border-black border-b-2",
		icon: "bg-black text-white",
		title: "text-black pr-10",
	},
	disabled: {
		container: "border-none",
		icon: "bg-description_grey text-white",
		title: "text-description_grey hidden sm:contents",
	},
};

export function CheckoutStep({ status, title, count }: CheckoutStepProps) {
	const styles = variants[status];
	const isCompleted = status === "completed";

	return (
		<span className={twMerge(baseStyles.container, styles.container)}>
			<div className={twMerge(baseStyles.icon, styles.icon)}>
				{isCompleted ? (
					<Image
						src={IMAGE.CHECK_MARK.src}
						alt={IMAGE.CHECK_MARK.alt}
						width={12}
						height={8}
					/>
				) : (
					<span>{count}</span>
				)}
			</div>

			<h4 className={twMerge(baseStyles.title, styles.title)}>{title}</h4>
		</span>
	);
}
