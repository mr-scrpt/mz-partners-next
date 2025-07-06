import { useTranslations } from "next-intl";
import { useContactEmailMainLink, useSocialItem } from "@/entity/contact";
import { LINK_CONFIGS } from "@/shared/lib/link";
import { CONTACT_DICT_FIELD, CONTACT_NAMESPACE } from "../domain/contact.dict";
// TODO: тип должен быть отдельно от представления
import {
  AdditionsListData,
  AdditionalListItem,
} from "../ui/component/additionalList/type";

export const useAdditionalListContact = (): AdditionsListData => {
  const t = useTranslations(CONTACT_NAMESPACE);
  const { emailMain } = useContactEmailMainLink();
  const { getSocialItem } = useSocialItem();

  const { URL } = LINK_CONFIGS;

  const listData: AdditionalListItem[] = [
    {
      title: t(CONTACT_DICT_FIELD.additionalEmailItemTitle),
      value: emailMain.value,
      link: emailMain.link,
      linkTitle: emailMain.value,
    },
    {
      title: t(CONTACT_DICT_FIELD.additionalFacebookItemTitle),
      // value: URL.formatDisplay(socialData.fb.link),
      // link: URL.formatHref(socialData.fb.link),
      value: URL.formatDisplay(getSocialItem("fb").link),
      linkTitle: getSocialItem("fb").linkTitle,
      link: URL.formatHref(getSocialItem("fb").link),
    },
    {
      title: t(CONTACT_DICT_FIELD.additionalInstagramItemTitle),
      value: URL.formatDisplay(getSocialItem("insta").link),
      linkTitle: getSocialItem("insta").linkTitle,
      link: URL.formatHref(getSocialItem("insta").link),
    },
  ];

  return {
    title: t(CONTACT_DICT_FIELD.additionalTitle),
    listData,
  };
};
