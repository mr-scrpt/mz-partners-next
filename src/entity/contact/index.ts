export { AddressListModule } from "./ui/addressList.module";

export { PhoneListModule } from "./ui/phoneList.module";

export type {
  ContactAddressItem,
  ContactEmailItem,
  ContactItem,
  ContactPhoneItem,
  ContactPhoneEnhancedItem,
} from "./domain/contact.type";

export { useContact } from "./vm/useContact";
export { useContactAddressList } from "./vm/useContactAddressList.model";
export { useContactEmailList } from "./vm/useContactEmailList.model";
export { useContactEmailListLink } from "./vm/useContactEmailListLink.model";
export { useContactEmailMainLink } from "./vm/useContactEmailMainLink.model";
export { useContactPhoneList } from "./vm/useContactPhoneList.model";
export { useContactPhoneListLink } from "./vm/useContactPhoneListLink.model";
export { useContactSocialListLink } from "./vm/useContactSocialListLink.model";
export { useSocialItem } from "./vm/useSocialItem.model";
export { useAddressVideo } from "./vm/useAddressVideo.model";
export { useContactAddressPrimary } from "./vm/useContactAddressPrimary.model";
export { useContactIconList } from "./vm/useContactIconList.model";
