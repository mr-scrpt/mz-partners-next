import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
//
// let headers = { "accept-language": "en-US,en;q=0.5" };
// let languages = new Negotiator({ headers }).languages();
// let locales = ["en-US", "nl-NL", "nl"];
// let defaultLocale = "en-US";
//
// match(languages, locales, defaultLocale); // -> 'en-US'
import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ua"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "en";
  let languages = new Negotiator({
    headers: {
      "accept-language": acceptLanguage,
    },
  }).languages();

  return match(languages, locales, "en");
}

export function middleware(request: NextRequest) {
  console.log("output_log: HERE !!!! =>>>");
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  console.log("output_log: LOCALE =>>>", locale);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
