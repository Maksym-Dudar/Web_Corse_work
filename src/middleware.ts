import { NextRequest, NextResponse } from "next/server";
import { NEXT_PUBLIC_BACKEND_URL } from "@/config/env";
import { API } from "./config";

export async function middleware(request: NextRequest) {
	const token = request.cookies.get("access_token")?.value;

    if (!token) {
        console.log(token, "\n Nt valid")
		return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    
	return NextResponse.next();

}

export const config = {
	matcher: ["/account/:path*", "/checkout/complete", "/checkout/details"],
};
