import { LINK_CONFIGS } from "@/shared/lib/link";
import { useContact } from "./useContact";

export const useContactPhoneListLink = () => {
  const { phoneList } = useContact();

  const { PHONE } = LINK_CONFIGS;
  return {
    phoneList: phoneList.map((p) => ({
      ...p,
      value: PHONE.formatDisplay(p.value),
      link: PHONE.formatHref(p.value),
    })),
  };
};
