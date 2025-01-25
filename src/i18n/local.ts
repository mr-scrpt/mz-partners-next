// "use server";

// import { cookies } from "next/headers";
import { useCookies } from "next-client-cookies";
import { DEFAULT_LOCALE, Locale } from "./domain/type";

const COOKIE_NAME = "NEXT_LOCALE";

// export async function getUserLocale() {
//   const cookieStore = await cookies();
//   return cookieStore.get(COOKIE_NAME)?.value || DEFAULT_LOCALE;
// }
//
// export async function setUserLocale(locale: Locale) {
//   const cookieStore = await cookies();
//   cookieStore.set(COOKIE_NAME, locale);
// }

export function getUserLocale() {
  const cookieStore = useCookies();
  return cookieStore.get(COOKIE_NAME) || DEFAULT_LOCALE;
}

export function setUserLocale(locale: Locale) {
  const cookieStore = useCookies();
  cookieStore.set(COOKIE_NAME, locale);
}
