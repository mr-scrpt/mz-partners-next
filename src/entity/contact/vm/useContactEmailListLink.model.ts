import { LINK_CONFIGS } from "@/shared/lib/link";
import { useContact } from "./useContact";

export const useContactEmailListLink = () => {
  const { emailList } = useContact();
  const { EMAIL } = LINK_CONFIGS;
  return {
    emailList: emailList.map((e) => ({
      ...e,
      value: EMAIL.formatDisplay(e.value),
      link: EMAIL.formatHref(e.value),
    })),
  };
};
