import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import createMiddleware from "next-intl/middleware";
import { routing } from "./shared/lib/i18n/routing";

//
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

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ua|en)/:path*"],
};
