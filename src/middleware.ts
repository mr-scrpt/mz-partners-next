import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/shared/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Пропускаем статические файлы и API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Получаем локаль из пути
  const pathnameLocale = pathname.split("/")[1];

  // Проверяем валидность локали
  const isValidLocale = i18n.locales.includes(pathnameLocale);

  // Если локаль невалидная, редиректим на дефолтную
  if (!isValidLocale) {
    const newUrl = new URL(request.url);
    newUrl.pathname = `/${i18n.defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
