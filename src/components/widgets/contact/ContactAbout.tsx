import { ArrowLink } from "@/components/ui";
import { IMAGE } from "@/config/image.config";
import { gitHubAccount } from "@/constants/contactData";
import Image from "next/image";

export function ContactAbout() {
	return (
		<div className='flex flex-col md:flex-row bg-grey'>
			<Image
				src={IMAGE.MY_PHOTO.src}
				alt={IMAGE.MY_PHOTO.alt}
				width={0}
				height={0}
				sizes='100vw'
				className='w-full md:w-1/2 object-cover'
			/>
			<div className='flex flex-col justify-center pl-8 sm:pl-10 md:pl-14 lg:pl-16 xl:pl-18 py-14 sm:py-16 md:py-18 gap-5 lg:gap-6 w-full md:w-1/2'>
				<div className='flex flex-col gap-5'>
					<h4 className='text-34 sm:text-36 lg:text-40 font-500 leading-110'>
						Про мене
					</h4>
					<p className='text-black text-14 sm:text-16 font-inter font-400 leading-160 w-5/6'>
						Я Максим, front-end розробник, який цінує прозору комунікацію,
						відповідальність і командну роботу. Швидко адаптуюся, легко навчаюся
						та прагну ефективно розв&#39;язувати задачі. Люблю планувати роботу
						так, щоб результат був зрозумілим, надійним і оптимальним за часом
						та ресурсами.
					</p>
				</div>
				<ArrowLink title='Мій GitHub' link={gitHubAccount} />
			</div>
		</div>
	);
}
