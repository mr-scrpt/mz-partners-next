import { MenuDictField } from "./menu.dict";

export interface MenuItem {
  id: number;
  tag: MenuDictField;
  href: string;
}
