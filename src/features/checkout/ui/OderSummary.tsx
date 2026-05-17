import CartItem from "@/features/cart/ui/CartItem";
import type {
	IDeliveryOptions,
	IOrderItem,
} from "@/shared/types/orders/orders";

interface Props {
	data: IOrderItem[];
	shippingMethod: IDeliveryOptions;
	total: number;
	subtotal: number;
}

export function OderSummary({ data, shippingMethod, total, subtotal }: Props) {
	return (
		<aside className='flex flex-col gap-4 px-4 lg:px-6 py-4 sm:p-4 lg:p-6 border-1 border-description_gray rounded-lg min-w-full lg:min-w-80 xl:min-w-90 h-fit'>
			<h3 className='text-18 sm:text-18 lg:text-20 font-500 leading-140'>
				Підсумок замовлення
			</h3>
			<section className='flex flex-col gap-6 w-full py-4'>
				{data.map((item) => (
					<CartItem {...item} isCanChange={false} key={item.id} />
				))}
			</section>
			<section className='flex flex-col'>
				<span className='flex flex-row justify-between items-center py-3 border-b-1 border-grey'>
					<h6 className='text-16 font-400 leading-160 font-inter'>Доставка</h6>
					<p className='text-16 font-600 leading-160 font-inter'>
						{shippingMethod.label}
					</p>
				</span>
				<span className='flex flex-row justify-between items-center py-3 border-b-1 border-grey'>
					<h6 className='text-16 font-400 leading-160 font-inter'>Проміжний підсумок</h6>
					<p className='text-16 font-600 leading-160 font-inter'>{total}</p>
				</span>
				<span className='flex flex-row justify-between items-center py-3 border-b-1 border-grey'>
					<h5 className='text-20 font-500 leading-140 font-inter'>Разом</h5>
					<p className='text-20 font-500 leading-140 font-inter'>{subtotal}</p>
				</span>
			</section>
		</aside>
	);
}
