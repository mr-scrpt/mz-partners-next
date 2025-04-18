import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./shared/lib/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export const config = {
  matcher: ["/", "/(ua|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};

export default intlMiddleware;

// const localeMiddleware = (request: NextRequest) => {
//   const { pathname } = request.nextUrl;
//
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/api") ||
//     pathname.includes(".")
//   ) {
//     return NextResponse.next();
//   }
//
//   const pathnameLocale = pathname.split("/")[1];
//
//   // console.log("output_log: Pathname =>>>", pathnameLocale);
//   // console.log("output_log: middleware  =>>>", !isValidLocale(pathnameLocale));
//
//   if (!isValidLocale(pathnameLocale)) {
//     const newUrl = new URL(request.url);
//     newUrl.pathname = `/${i18n.defaultLocale}${pathname === "/" ? "" : pathname}`;
//     return NextResponse.redirect(newUrl);
//   }
//
//   return NextResponse.next();
// };
//
// async function middleware(request: NextRequest) {
//   const localeResponse = await localeMiddleware(request);
//
//   if (localeResponse && localeResponse.status !== 200) {
//     return localeResponse;
//   }
//
//   return intlMiddleware(request);
// }

// export const config = {
//   matcher: ["/", "/(ua|en)/:path*"],
// };
//
// export default middleware;

// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";
//
//
// let headers = { "accept-language": "en-US,en;q=0.5" };
// let languages = new Negotiator({ headers }).languages();
// let locales = ["en-US", "nl-NL", "nl"];
// let defaultLocale = "en-US";
//
// match(languages, locales, defaultLocale); // -> 'en-US'

// function getLocale(request: NextRequest) {
//   const acceptLanguage = request.headers.get("accept-language") ?? "en";
//   let languages = new Negotiator({
//     headers: {
//       "accept-language": acceptLanguage,
//     },
//   }).languages();
//
//   return match(languages, locales, "en");
// }
