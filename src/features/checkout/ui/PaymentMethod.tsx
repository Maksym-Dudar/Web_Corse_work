"use client";

import { Label } from "@/components/ui";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
} from "@stripe/react-stripe-js";

const elementStyle = {
	base: {
		fontSize: "16px",
		color: "#000",
		"::placeholder": {
			color: "#aaa",
		},
	},
	invalid: {
		color: "#fa755a",
	},
};

export function PaymentMethod() {
	return (
		<section className='flex flex-col border-1 border-description_gray rounded-lg pt-10 pb-6 px-6 gap-6'>
			<h5 className='text-20 font-500 leading-140 pb-2'>Спосіб оплати</h5>

			<div className='flex flex-col gap-3'>
				<Label id='card-number' label='НОМЕР КАРТКИ' />
				<div className='w-full border border-description_gray rounded-lg h-10 px-4 flex items-center'>
					<span className='w-full'>
						<CardNumberElement
							id='card-number'
							options={{ style: elementStyle }}
						/>
					</span>
				</div>
			</div>
			<div className='flex flex-row gap-6 w-full justify-between'>
				<div className='flex flex-col gap-3 w-full'>
					<Label id='card-expiry' label='ТЕРМІН ДІЇ' />
					<div className='w-full border border-description_gray rounded-lg h-10 px-4 flex items-center'>
						<span className='w-1/2 gap-3'>
							<CardExpiryElement
								id='card-expiry'
								options={{ style: elementStyle }}
							/>
						</span>
					</div>
				</div>
				<div className='flex flex-col gap-3 w-full'>
					<Label id='card-cvc' label='CVC' />
					<div className='w-full border border-description_gray rounded-lg h-10 px-4 flex items-center'>
						<span className='w-1/2 gap-3'>
							<CardCvcElement id='card-cvc' options={{ style: elementStyle }} />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
