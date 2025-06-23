import { useMemo } from "react";
import { SOCIAL_LIST } from "../model/socialList.model";

export const useSocialData = () => {
  const socialData = useMemo(() => {
    return SOCIAL_LIST;
  }, []);

  return { socialData };
};
