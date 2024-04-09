import { deleteCookie } from 'cookies-next';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  const isUserLoggedIn = req.cookies.get("isUserLoggedIn")?.value;

  if(req.nextUrl.pathname.startsWith("/user") && !isUserLoggedIn){
    return NextResponse.redirect(new URL('/auth/signin', req.url))
  }

  if(req.nextUrl.pathname.startsWith("/auth") && isUserLoggedIn){
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next();;
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/user/:path*', "/auth/:path*"],
}