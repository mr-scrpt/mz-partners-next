import { cookies } from "next/headers";
import { i18n, Locale } from "./domain/type";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || i18n.defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}
