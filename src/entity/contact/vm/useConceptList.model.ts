import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { CONTACT_INFO } from "../model/contactList.model";

export const useContactPhoneList = () => {
  const locale = useLocale();
  const { phoneList } = CONTACT_INFO[locale as Locale];

  return { phoneList };
};
