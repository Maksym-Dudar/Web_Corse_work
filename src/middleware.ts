import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const token = request.cookies.get("access_token")?.value;

	if (!token) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/account/:path*", "/checkout/complete", "/checkout/details"],
};
