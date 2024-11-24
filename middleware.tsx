import { getIronSessionData } from "@/libs/session";
import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export default async function middleware(request: NextRequest) {
    const session = await getIronSessionData();
    // If the user is authenticated, continue as normal
    if (session.isLoggedIn) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: "/profile/:path*",
};
