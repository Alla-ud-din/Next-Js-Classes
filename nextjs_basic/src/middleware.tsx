import { NextResponse } from "next/server";
export function middleware(request: any) {
    // if(request.nextUrl.pathname!="/login"){
    console.log(request)
    return NextResponse.redirect(new URL("/login", request.url))
    // }
}
export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"]
}