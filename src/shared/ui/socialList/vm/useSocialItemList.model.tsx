import { useMemo } from "react";
import { SOCIAL_LIST } from "../model/socialList.model";

export const useSocialItemList = () => {
  const socialItemList = useMemo(() => {
    return Object.values(SOCIAL_LIST);
  }, []);

  return { socialItemList };
};
