import { Loading } from "@/components/widgets";
import CartItem from "./CartItem";
import type { ICartItem } from "@/shared/types/product/product.type";

interface Props {
    isLoading: boolean
    data: ICartItem[]
}
export function CartItemList({ isLoading, data }: Props) {
    if (isLoading) return <Loading />;

    return (
        <section>
            {data?.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
        </section>
			
	);
}
