export default function calcTotal(
	subtotal: number,
	percent: number,
	fixedFee: number,
	coupon: number = 0,
) {
	return (subtotal * (1 - coupon)) + (subtotal * percent) + fixedFee ;
}
