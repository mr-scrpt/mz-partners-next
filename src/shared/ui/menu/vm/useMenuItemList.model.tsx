import { useLocale } from "next-intl";
import { MENU_DATA } from "../model/menu.model";
import { Locale } from "@/shared/lib/i18n/domain/type";

export const useMenuItemList = () => {
  const local = useLocale();
  return { menuItemList: Object.values(MENU_DATA[local as Locale]) };
};
