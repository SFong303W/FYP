// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 白名单：允许访问 login 和静态文件
  if (pathname.startsWith('/login') || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // 模拟登录状态：检查 cookie 是否存在（真实情况你用 token 或 session）
  const isLoggedIn = request.cookies.get("user_token");

  if (!isLoggedIn) {
    console.log(isLoggedIn);
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
export const config = {
    matcher: [ '/dashboard/:path*', '/path/:path*'], // 哪些路径需要守卫
  };
  