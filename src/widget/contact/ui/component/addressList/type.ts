import { HTMLAttributes, ComponentType } from "react";
import { ContactAddressItem } from "@/entity/contact";

export type GetAddressDataList = () => { addressList: ContactAddressItem[] };

export interface ItemAddressContactProps
  extends HTMLAttributes<HTMLDivElement> {
  item: ContactAddressItem;
}

export interface AddressListContactProps
  extends HTMLAttributes<HTMLDivElement> {
  ItemComponent: ComponentType<ItemAddressContactProps>;
  getDataList: GetAddressDataList;
}
