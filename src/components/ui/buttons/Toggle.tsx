import React, { type ButtonHTMLAttributes } from "react";

interface Props extends  ButtonHTMLAttributes<HTMLButtonElement>  {
	checked: boolean;
	onChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function IosToggle({ checked, onChange, ...props }: Props) {
	return (
		<button
			type='button'
			role='switch'
			aria-checked={checked}
			onClick={() => onChange(!checked)}
			className={`relative inline-flex h-6 w-11 pl-[2px] items-center rounded-full transition-colors
    			${checked ? "bg-green-500 shadow-md" : "bg-grey-300 shadow-inner"}`}
			{...props}
		>
			<span
				className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition
     				${checked ? "translate-x-5 shadow" : "translate-x-0 shadow"}`}
			/>
		</button>
	);
}
