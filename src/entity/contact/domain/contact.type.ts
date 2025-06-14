import { HTMLAttributes } from "react";

type ContactPhoneItemType = "primary" | "secondary";
type ContactEmailItemType = "primary" | "secondary";
type ContactAddressItemType = "office";

export type ContactPhoneItem = {
  type: ContactPhoneItemType;
  value: string;
};

export type ContactEmailItem = {
  type: ContactAddressItemType;
  value: string;
};

export type ContactAddressItem = {
  type: ContactEmailItemType;
  value: string;
};

export type ContactItem = {
  phoneList: ContactPhoneItem[];
  emailList: ContactEmailItem[];
  addressList: ContactAddressItem[];
};

export interface PhoneItemProps extends HTMLAttributes<HTMLDivElement> {
  phoneData: ContactPhoneItem;
}

export interface AddressItemProps extends HTMLAttributes<HTMLDivElement> {
  addressData: ContactAddressItem;
}
