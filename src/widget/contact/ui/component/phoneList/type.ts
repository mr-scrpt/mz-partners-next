import { ContactPhoneItem } from "@/entity/contact";
import { ComponentType, HTMLAttributes } from "react";

export type GetPhoneDataList = () => { phoneList: ContactPhoneItem[] };

export interface PhonteItemContactProps extends HTMLAttributes<HTMLDivElement> {
  item: ContactPhoneItem;
}

export interface PhoneListContactProps extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<PhonteItemContactProps>;
  getDataList: GetPhoneDataList;
}
