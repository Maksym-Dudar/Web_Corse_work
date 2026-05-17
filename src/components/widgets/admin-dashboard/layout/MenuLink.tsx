import Link from "next/link";

interface Props {
	link: string;
	label: string;
	isActive: boolean;
}

export function MenuLink({ link, isActive, label }: Props) {
	return (
		<Link
			href={link}
			className={
				isActive
					? "hover:scale-105 text-black text-12 md:text-14 font-500 leading-170"
					: "text-not_active text-12 md:text-14 font-500 leading-170"
			}
		>
			{label}
		</Link>
	);
}
