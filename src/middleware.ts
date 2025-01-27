import { i18n, isValidLocale } from "@/shared/lib/i18n";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];

  if (!isValidLocale(pathnameLocale)) {
    const newUrl = new URL(request.url);
    newUrl.pathname = `/${i18n.defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}
