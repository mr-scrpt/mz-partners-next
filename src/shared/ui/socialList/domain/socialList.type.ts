import { IconListType } from "../../icon/domain/icon.type";

export interface SocialListItem {
  id: number;
  name: string;
  shortName: string;
  link: string;
  icon: IconListType;
}
