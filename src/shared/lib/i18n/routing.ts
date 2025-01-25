import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALE_DEAFAULT, LOCALES } from "./domain/type";

export const routing = defineRouting({
  locales: LOCALES,

  defaultLocale: LOCALE_DEAFAULT,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
