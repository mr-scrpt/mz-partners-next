import { useContactEmailMainLink } from "@/entity/contact";
import { useSocialItem } from "@/entity/contact/vm/useSocialItem.model";
import { LINK_CONFIGS } from "@/shared/lib/link";
import { useTranslations } from "next-intl";
import { CONTACT_DICT_FIELD, CONTACT_NAMESPACE } from "../domain/contact.dict";

export interface AdditionalListItem {
  value: string;
  title: string;
  link: string;
}

export interface AdditionsListData {
  title: string;
  listData: AdditionalListItem[];
}

export const useAdditionsList = (): AdditionsListData => {
  const t = useTranslations(CONTACT_NAMESPACE);
  const { emailMain } = useContactEmailMainLink();
  const { getSocialItem } = useSocialItem();

  const { URL } = LINK_CONFIGS;

  const listData: AdditionalListItem[] = [
    {
      title: t(CONTACT_DICT_FIELD.additionalEmailItemTitle),
      value: emailMain.value,
      link: emailMain.link,
    },
    {
      title: t(CONTACT_DICT_FIELD.additionalFacebookItemTitle),
      // value: URL.formatDisplay(socialData.fb.link),
      // link: URL.formatHref(socialData.fb.link),
      value: URL.formatDisplay(getSocialItem("fb").link),
      link: URL.formatHref(getSocialItem("fb").link),
    },
    {
      title: t(CONTACT_DICT_FIELD.additionalInstagramItemTitle),
      value: URL.formatDisplay(getSocialItem("insta").link),
      link: URL.formatHref(getSocialItem("insta").link),
    },
  ];

  return {
    title: t(CONTACT_DICT_FIELD.additionalTitle),
    listData,
  };
};
