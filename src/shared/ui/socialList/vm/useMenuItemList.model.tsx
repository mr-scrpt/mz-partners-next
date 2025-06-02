import { SOCIAL_LIST } from "../model/socialList.model";

export const useSocialItemList = () => ({
  menuItemList: Object.values(SOCIAL_LIST),
});
