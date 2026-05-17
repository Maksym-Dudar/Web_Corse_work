export interface IImage {
	src: string;
	alt: string;
}
class ImageConfig {
	ARROW: IImage = {
		src: "/ui/arrow/arrow_short.svg",
		alt: "стрілка",
	};
	ARROW_BLACK: IImage = {
		src: "/ui/arrow/arrow_black.svg",
		alt: "стрілка",
	};
	ARROW_WHITE: IImage = {
		src: "/ui/arrow/arrow_white.svg",
		alt: "стрілка",
	};
	FACEBOOK_BLACK: IImage = {
		src: "/ui/social/facebook_black.svg",
		alt: "facebook",
	};
	FACEBOOK_WHITE: IImage = {
		src: "/ui/social/facebook_white.svg",
		alt: "facebook",
	};
	INSTAGRAM_BLACK: IImage = {
		src: "/ui/social/instagram_black.svg",
		alt: "instagram",
	};
	INSTAGRAM_WHITE: IImage = {
		src: "/ui/social/instagram_white.svg",
		alt: "instagram",
	};
	SEARCH: IImage = {
		src: "/ui/icon/search.svg",
		alt: "пошук",
	};
	SHOPPING_BAG: IImage = {
		src: "/ui/icon/shopping_bag.svg",
		alt: "кошик",
	};
	USER_ICON: IImage = {
		src: "/ui/icon/user_icon.svg",
		alt: "користувач",
	};
	YOUTUBE_BLACK: IImage = {
		src: "/ui/social/youtube_black.svg",
		alt: "youtube",
	};
	YOUTUBE_WHITE: IImage = {
		src: "/ui/social/youtube_white.svg",
		alt: "youtube",
	};
	EMAIL: IImage = {
		src: "/ui/icon/email.svg",
		alt: "email",
	};
	LIKE_ACTIVE: IImage = {
		src: "/ui/reaction/like_active.svg",
		alt: "додано до списку бажань",
	};
	LIKE_NOT_ACTIVE: IImage = {
		src: "/ui/reaction/like_not_active.svg",
		alt: "додати до списку бажань",
	};
	STAR_ACTIVE: IImage = {
		src: "/ui/reaction/star_active.svg",
		alt: "зірка",
	};
	STAR_NOT_ACTIVE: IImage = {
		src: "/ui/reaction/star_not_active.svg",
		alt: "порожня зірка",
	};
	DELIVERY: IImage = {
		src: "/market/images/main_page/advantages/fast_delivery.svg",
		alt: "доставка",
	};
	MONEY: IImage = {
		src: "/market/images/main_page/advantages/money.svg",
		alt: "гроші",
	};
	PROTECTION: IImage = {
		src: "/market/images/main_page/advantages/protection.svg",
		alt: "захист",
	};
	CAMERA: IImage = {
		src: "/ui/icon/camera.svg",
		alt: "камера",
	};
	EDIT: IImage = {
		src: "/ui/icon/edit.svg",
		alt: "редагувати",
	};
	RECTANGLE: IImage = {
		src: "/ui/icon/rectangle.svg",
		alt: "іконка контакту",
	};
	HOME: IImage = {
		src: "/ui/icon/home.svg",
		alt: "дім",
	};
	CONTACT_MAIL: IImage = {
		src: "/ui/icon/contact_mail.svg",
		alt: "пошта",
	};
	EYE_OPEN: IImage = {
		src: "/ui/reaction/eye_open.svg",
		alt: "показати пароль",
	};
	EYE_CLOSE: IImage = {
		src: "/ui/reaction/eye_close.svg",
		alt: "приховати пароль",
	};
	CHECK_MARK: IImage = {
		src: "/ui/icon/check_mark.svg",
		alt: "позначка",
	};

	MY_PHOTO: IImage = {
		src: "/contact/me.jpg",
		alt: "Моє фото",
	};

	FOOTER_BANNER: IImage = {
		src: "/market/images/footer_banner/footer_banner.png",
		alt: "банер",
	};

	PATH_IMAGE_SLIDER: IImage[] = [
		{
			alt: "слайд 1",
			src: "/market/images/main_page/slider/slide_1.png",
		},
		{
			alt: "слайд 2",
			src: "/market/images/main_page/slider/slide_2.png",
		},
		{
			alt: "слайд 3",
			src: "/market/images/main_page/slider/slide_3.png",
		},
	];
	CATEGORY_BANNER: IImage[] = [
		{
			src: "/market/images/main_page/banner_grid/big_banner.png",
			alt: "Банер 1",
		},
		{
			src: "/market/images/main_page/banner_grid/small_banner_1.png",
			alt: "Банер 2",
		},
		{
			src: "/market/images/main_page/banner_grid/small_banner_2.png",
			alt: "Банер 3",
		},
	];

	DISCOUNT_BANNER: IImage = {
		src: "/market/images/main_page/discount_banner/banner.png",
		alt: "Банер зі знижкою",
	};

	SHOP_BANNER: IImage = {
		src: "/market/images/shop_page/hero_banner/hero_banner.png",
		alt: "Банер магазину",
	};

	AUTH_BANNER: IImage = {
		src: "/auth/banner.png",
		alt: "Банер авторизації",
	};
}

export const IMAGE = new ImageConfig();
