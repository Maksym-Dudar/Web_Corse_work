import Cell from "@/components/ui/table/Cell";
import CartItem from "./CartItem";

interface Props {
    id: number;
    price: number;
    image: string;
    title: string;
    color: string;
}

export function SmallRow({id, ...rest}: Props) {
	return (
		<tr
			key={id}
			className='h-15 md:h-17 border-b-1 border-white_grey border-solid '
		>
			<Cell>
				<CartItem id={id} {...rest} />
			</Cell>
		</tr>
	);
}
