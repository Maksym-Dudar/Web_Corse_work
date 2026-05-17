import { match } from "path-to-regexp";
import { MobileNavigationItem } from "./MobileNavigationItem";
import { NAVIGATION } from "@/config";

interface Props {
	pathname: string;
	close: () => void;
}

export function MobileNavigation({ close, pathname }: Props) {
	return (
		<nav className='flex flex-col gap-4'>
			{NAVIGATION.map((item) => (
				<div key={item.link}>
					<MobileNavigationItem
						close={close}
						item={item}
						isActive={!!match(item.link)(pathname)}
					/>
				</div>
			))}
		</nav>
	);
}
