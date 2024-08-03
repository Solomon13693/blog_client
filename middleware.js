import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request) {
        const { pathname } = request.nextUrl
        const { token } = request.nextauth

        if (pathname.startsWith("/dashboard") && token.user.role !== "author") {
            return NextResponse.rewrite(new URL("/denied", request.url))
        }

        if (pathname.startsWith("/admin/dashboard") && token.user.role !== "admin") {
            return NextResponse.rewrite(new URL("/denied", request.url))
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: ["/dashboard/:path*", "/admin/dashboard/:path*"] };