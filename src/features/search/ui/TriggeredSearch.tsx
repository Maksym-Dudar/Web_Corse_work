import { IMAGE } from "@/config/image.config";
import Image from "next/image";
import { useSearch } from "../hook/useSearch";
import { useEffect, useRef, useState } from "react";

export function TriggeredSearch() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const {
		search,
		searchOptions,
		goToProducts,
		handleInputChange,
		searchButton,
	} = useSearch();

	useEffect(() => {
		if (isOpen) inputRef.current?.focus();
	}, [isOpen]);
	const handleSearchClick = () => {
		if (!isOpen) {
			setIsOpen(true);
			return;
		}
		if (isOpen && !search) {
			setIsOpen(false);
			return;
		}
		searchButton();
		setIsOpen(false);
	};
	return (
		<section className='relative max-w-40'>
			<div className='flex flex-row relative'>
				<div
					className={`
		                flex items-center
		                border rounded-full
		                overflow-hidden transition-all duration-300 ease-in-out
		                ${
											isOpen
												? "w-40 opacity-100 pr-10 pl-4 py-1 border-description_grey"
												: "w-0 opacity-0 p-0 border-transparent"
										}
	                `}
				>
					<input
						ref={inputRef}
						id='search'
						type='text'
					placeholder='Пошук'
						className='w-full bg-transparent outline-none text-14 font-400 leading-160 font-inter'
						value={search}
						onChange={handleInputChange}
					/>
				</div>

				<button
					onClick={handleSearchClick}
					className={`absolute h-fit w-6 top-1/2 -translate-y-1/2 z-30 ${
						isOpen ? "right-3" : "right-0"
					}`}
				>
					<Image
						src={IMAGE.SEARCH.src}
						width={24}
						height={24}
						alt={IMAGE.SEARCH.alt}
					/>
				</button>
			</div>
			{searchOptions.length > 0 && (
				<ul className='absolute flex flex-col w-full bg-grey z-50 rounded-2xl border-1 border-grey py-3 top-7'>
					{searchOptions.map((item) => (
						<li
							key={item.groupId}
							className='font-inter text-16 font-500 leading-160 py-1 pl-4 cursor-pointer'
							onClick={() => goToProducts(item.groupId)}
						>
							{item.label}
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
