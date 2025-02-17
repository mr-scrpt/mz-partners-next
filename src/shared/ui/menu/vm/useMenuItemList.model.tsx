import { MENU_DATA } from "../model/menu.model";

export const useMenuItemList = () => ({
  menuItemList: Object.values(MENU_DATA),
});
