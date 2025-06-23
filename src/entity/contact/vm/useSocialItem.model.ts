import { useContactSocialData } from "./useContactSocialData.model";

export const useSocialItem = () => {
  const { socialList } = useContactSocialData();
  return {
    getSocialItem: (type: string) =>
      socialList.find((item: { type: string }) => item.type === type) ?? {
        type: "",
        name: "",
        shortName: "",
        link: "",
      },
  };
};
