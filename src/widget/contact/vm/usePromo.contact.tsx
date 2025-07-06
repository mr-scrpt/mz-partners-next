import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { CONTACT_WIDGET_INFO } from "../model/contact.model";
import { LINK_CONFIGS } from "@/shared/lib/link";

export const usePromoContact = () => {
  const locale = useLocale();
  const { URL } = LINK_CONFIGS;
  return useMemo(() => {
    const promo = CONTACT_WIDGET_INFO[locale as Locale].promo;
    return {
      promoData: {
        ...promo,
        link: URL.formatHref(promo.link),
      },
    };
  }, [locale]);
};
