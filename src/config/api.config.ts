class ApiConfig {
	USER = "/user";
	USER_AVATAR = `${this.USER}/avatar`;
	USER_WISHLIST = `${this.USER}/wishlist`;
	USER_ORDERS = `${this.USER}/orders`;

	ADDRESS = "/address";
	ADDRESS_ALL = "/address/all";

	getAddressById(id: number) {
		return `${this.ADDRESS}?id=${id}`;
	}

	PRODUCT = "/products";
	PRODUCT_CARDS = `${this.PRODUCT}/cards`;
	PRODUCT_SEARCH = `${this.PRODUCT}/search`;
	PRODUCT_BAG = `${this.PRODUCT}/bag`;
	PRODUCT_GROUP = `${this.PRODUCT}/group`;
	PRODUCT_DETAILS = `${this.PRODUCT}/details`;

	AUTH = "/auth";
	AUTH_SIGN_IN = `${this.AUTH}/sign-in`;
	AUTH_SIGN_UP = `${this.AUTH}/sign-up`;
	AUTH_RESET_PASSWORD_OTP = `${this.AUTH}/reset-password-otp`;
	AUTH_GENERATE_OTP = `${this.AUTH}/otp-code`;
	AUTH_LOG_OUT = `${this.AUTH}/log-out`;
	AUTH_VERIFY_JWT = `${this.AUTH}/verify-jwt`;

	CONTACT = "/contact";

	PAYMENT_INTENT = "/payment/create-payment-intent";

	ORDER = "/order";
	getOrderById(id: number) {
		return `${this.ORDER}?orderId=${id}`;
	}
	getCompleteOrderById(id: number) {
		return `${this.ORDER}/complete?orderId=${id}`;
	}
	DELIVERY_METHODS = "/order/delivery-methods"
}

export const API = new ApiConfig();
