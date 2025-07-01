import type { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./shared/lib/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(request: NextRequest) {
  // 1. Выполняем intlMiddleware
  const response = intlMiddleware(request);

  // 2. Добавляем заголовок x-current-path
  response.headers.set("x-current-path", request.nextUrl.pathname);

  return response;
}

// Совмещаем matchers (можно адаптировать под свои нужды)
export const config = {
  matcher: [
    "/",
    "/(ua|en)/:path*",
    "/((?!api|_next|_vercel|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

// import createIntlMiddleware from "next-intl/middleware";
// import { routing } from "./shared/lib/i18n/routing";
//
// const intlMiddleware = createIntlMiddleware(routing);
//
// export const config = {
//   matcher: ["/", "/(ua|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
// };
//
// export default intlMiddleware;
//
