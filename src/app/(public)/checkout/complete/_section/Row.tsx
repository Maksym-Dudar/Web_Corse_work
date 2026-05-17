interface Props {
    title: string;
    value: string;
}

export function Row({title, value}: Props) {
    return (
			<tr className='gap-8'>
				<td className='text-description_grey text-12 md:text-14 font-600 leading-160'>
					{title}
				</td>
				<td className='text-black text-12 md:text-14 font-600 leading-160'>
					{value}
				</td>
			</tr>
		);
}
