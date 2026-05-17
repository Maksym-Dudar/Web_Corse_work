import { Button } from "@/components/ui";
import { PAGE } from "@/config";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
	isLoading: boolean;
	subtotal: number;
	total: number;
	onCheckout: () => void;
	close?: () => void;
	isHaveButtonLink?: boolean;
}
export function CartFooter({
	isLoading,
	subtotal,
	total,
	isHaveButtonLink = true,
	onCheckout,
	close,
}: Props) {
	const subtotalText = isLoading ? "Завантаження..." : subtotal;
	const totalText = isLoading ? "Завантаження..." : total;
	const buttonPadding = isHaveButtonLink ? "pt-4" : "pt-8";
	return (
		<section className='flex flex-col w-full'>
			<div className='flex flex-row justify-between border-b border-grey py-3'>
				<p className='text-black font-inter text-14 lg:text-16 font-400 leading-160'>
					Проміжний підсумок
				</p>
				<p className='text-black font-inter text-14 lg:text-16 font-500 leading-160'>
					{subtotalText}
				</p>
			</div>
			<div className='flex flex-row justify-between py-3'>
				<p className='text-black text-18 lg:text-20 font-500 leading-140'>
					Разом
				</p>
				<p className='text-black text-18 lg:text-20 font-500 leading-140'>
					{totalText}
				</p>
			</div>
			<div
				className={twMerge("flex flex-col gap-4 items-center", buttonPadding)}
			>
				<Button
					type='button'
					text='Оформити замовлення'
					className='py-2 lg:py-3'
					onClick={() => {
						if (close) {
							close();
						}
						onCheckout();
					}}
					disabled={isLoading}
				/>
				{!!isHaveButtonLink && (
					<div>
						<Link
							href={PAGE.CART.link}
							className='flex w-fit pt-2 border-b border-black'
							onClick={close}
						>
							<div className='py-1 pr-1 font-inter text-12 md:text-14 font-600 leading-160 text-black'>
								{PAGE.CART.label}
							</div>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
