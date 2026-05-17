import { createPortal } from "react-dom";

interface Props {
	message: string;
	onClose: () => void;
}

export default function ErrorToast({ message, onClose }: Props) {
	return createPortal(
		<div className='fixed top-5 right-5 bg-pale_red border-red border text-black px-4 py-2 rounded animate-smooth-display-right shadow-lg z-50 duration-300'>
			<div className='flex items-center justify-between'>
				<span>{message}</span>
				<button onClick={onClose} className='ml-3 font-bold'>
					×
				</button>
			</div>
		</div>,
		document.body
	);
}
