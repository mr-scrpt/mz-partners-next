import { useMemo } from "react";
import { SOCIAL_LIST } from "../model/socialList.model";

export const useSocialItemList = () => {
  const menuItemList = useMemo(() => {
    return Object.values(SOCIAL_LIST);
  }, []);

  return { menuItemList };
};
