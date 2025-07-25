import { IconListType } from "@/shared/ui/icon/domain/icon.type";
import { HTMLAttributes } from "react";

type ContactPhoneItemType = "primary" | "secondary" | "tertiary";
type ContactEmailItemType = "primary" | "secondary";
type ContactAddressItemType = "office";
type ContactSocialItemType = "insta" | "fb";

export type ContactPhoneItem = {
  type: ContactPhoneItemType;
  value: string;
};

export type ContactPhoneEnhancedItem = ContactPhoneItem & {
  link: string;
};

export type ContactEmailItem = {
  type: ContactAddressItemType;
  value: string;
};

export type ContactAddressItem = {
  type: ContactEmailItemType;
  value: string;
  map: string;
  videoId: string;
};

export type ContactSocialItem = {
  type: ContactSocialItemType;
  name: string;
  shortName: string;
  linkTitle: string;
  link: string;
};

export type ContactItem = {
  phoneList: ContactPhoneItem[];
  emailList: ContactEmailItem[];
  addressList: ContactAddressItem[];
  socialList: ContactSocialItem[];
};

export interface PhoneItemProps extends HTMLAttributes<HTMLDivElement> {
  phoneData: ContactPhoneEnhancedItem;
}

export interface AddressItemProps extends HTMLAttributes<HTMLDivElement> {
  addressData: ContactAddressItem;
}

export interface SocialListItem {
  id: number;
  name: string;
  shortName: string;
  link: string;
  icon: IconListType;
}
