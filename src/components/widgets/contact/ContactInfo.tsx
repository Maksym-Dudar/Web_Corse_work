import { ContactCard } from "@/components/cards/info/ContactCard";
import { contactData } from "@/constants/contactData";

export function ContactInfo() {
	return (
		<section className='flex flex-col gap-10 items-center pt-12 pb-20 w-full'>
			<h3 className='text-40 font-500 leading-110 text-black'>
				Зв&#39;язатися зі мною
			</h3>
			<div className='flex flex-row gap-6 w-full'>
				{contactData.map((val) => (
					<ContactCard {...val} key={val.title} />
				))}
			</div>
		</section>
	);
}
