import { Breadcrumbs } from "@/components/widgets/breadcrumbs/Breadcrumbs";
import { ContactAbout } from "@/components/widgets/contact/ContactAbout";
import { ContactHero } from "@/components/widgets/contact/ContactHero";
import { ContactInfo } from "@/components/widgets/contact/ContactInfo";
import { ContactMailForm } from "@/features/contact-us/ui/ContactMailForm";

export default function ContactUs() {
	return (
		<section className="flex flex-col w-full pb-30">

			<Breadcrumbs />
			<ContactHero />
			<ContactAbout />
			<ContactInfo />
			<div className="flex flex-row gap-20">
				<ContactMailForm />
			</div>
		</section>

	);
}
