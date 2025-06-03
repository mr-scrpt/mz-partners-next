import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { CONTACT_INFO } from "../model/contactList.model";

export const useContact = () => {
  const locale = useLocale();
  return CONTACT_INFO[locale as Locale];
};

