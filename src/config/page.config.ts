import type { CategoryFilter } from "./product.config";

export interface IPage {
	link: string;
	label: string;
}

interface ISocial {
	link: string;
}

class PagesConfig {
	HOME: IPage = {
		link: "/",
		label: "Головна",
	};
	SHOP: IPage = {
		link: "/shop",
		label: "Магазин",
	};
	BLOG: IPage = {
		link: "/blog",
		label: "Блог",
	};
	CONTACT_US: IPage = {
		link: "/contact-us",
		label: "Контакти",
	};
	ACCOUNT: IPage = {
		link: "/account",
		label: "Акаунт",
	};
	ADDRESS: IPage = {
		link: `${this.ACCOUNT.link}/address`,
		label: "Адреси",
	};
	ADDRESS_CREATE: IPage = {
		link: `${this.ADDRESS.link}/create`,
		label: "Створити",
	};
	AddressEdit(id: number): IPage {
		return {
			link: `${this.ADDRESS.link}/edit/${id}`,
			label: "Редагувати",
		};
	}
	ORDERS: IPage = {
		link: `${this.ACCOUNT.link}/orders`,
		label: "Замовлення",
	};
	WISHLIST: IPage = {
		link: `${this.ACCOUNT.link}/wishlist`,
		label: "Список бажань",
	};

	PRIVACY_POLICY: IPage = {
		link: "/privacy-policy",
		label: "Політика конфіденційності",
	};
	TERMS_OF_USE: IPage = {
		link: "/terms-of-use",
		label: "Умови використання",
	};
	CART: IPage = {
		link: "/checkout/cart",
		label: "Кошик",
	};
	CHECKOUT_DETAILS(id: number) {
		return `/checkout/details?orderId=${id}`;
	}

	CHECKOUT_COMPLETE(id: number) {
		return `/checkout/complete?orderId=${id}`;
	}
	FORGOT_PASSWORD: IPage = {
		link: "/forgot-password",
		label: "Забули пароль",
	};
	SIGN_IN: IPage = {
		link: "/sign-in",
		label: "Увійти",
	};
	SIGN_UP: IPage = {
		link: "/sign-up",
		label: "Зареєструватися",
	};
	FACEBOOK: ISocial = {
		link: "/facebook",
	};

	INSTAGRAM: ISocial = {
		link: "/instagram",
	};

	YOUTUBE: ISocial = {
		link: "/youtube",
	};

	SHOP_BY_CATEGORY(item: CategoryFilter) {
		return `${this.SHOP.link}?category=${item}`;
	}
	PRODUCT(item: number) {
		return `${this.SHOP.link}/${item}`;
	}
	ADMIN_DASHBOARD: IPage = {
		link: "/admin",
		label: "Панель",
	};
	CREATE_PRODUCT: IPage = {
		link: `${this.ADMIN_DASHBOARD.link}/create-product`,
		label: "Товар",
	};
	ADMIN_SHIPPING_METHOD: IPage = {
		link: `${this.ADMIN_DASHBOARD.link}/create-shipping-method`,
		label: "Спосіб доставки",
	};
}

export const PAGE = new PagesConfig();

export const NAVIGATION = [PAGE.HOME, PAGE.SHOP, PAGE.BLOG, PAGE.CONTACT_US];
export const TERMS_PRIVACY = [PAGE.PRIVACY_POLICY, PAGE.TERMS_OF_USE];
