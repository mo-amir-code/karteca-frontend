import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isUserLoggedIn = request.cookies.get("isUserLoggedIn")?.value;
  const sessionToken = request.cookies.get("sessiontoken")?.value;

  if(request.nextUrl.pathname.startsWith("/user") && (!isUserLoggedIn || !sessionToken)){
    request.cookies.delete("isUserLoggedIn")
    request.cookies.delete("sessiontoken")
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  if(request.nextUrl.pathname.startsWith("/auth") && isUserLoggedIn && sessionToken){
    return NextResponse.redirect(new URL('/', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/user/:path*', "/auth/:path*"],
}