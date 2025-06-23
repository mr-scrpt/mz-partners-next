import { useContact } from "./useContact";

export const useContactSocialData = () => {
  const { socialList } = useContact();

  return { socialList };
};
