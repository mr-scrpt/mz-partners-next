import { LINK_CONFIGS } from "@/shared/lib/link";
import { useContact } from "./useContact";

export const useContactSocialListLink = () => {
  const { socialList } = useContact();

  const { URL } = LINK_CONFIGS;
  return {
    socialList: socialList.map((p) => ({
      ...p,
      value: URL.formatDisplay(p.name),
      link: URL.formatHref(p.link),
    })),
  };
};
