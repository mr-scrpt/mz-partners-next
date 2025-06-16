export { AddressListModule } from "./ui/addressList.module";

export { PhoneListModule } from "./ui/phoneList.module";

export { useContactAddressList } from "./vm/useContactAddressList.model";
export { useContactEmailList } from "./vm/useContactEmailList.model";
export { useContactPhoneList } from "./vm/useContactPhoneList.model";
export { useContact } from "./vm/useContact";
export type {
  ContactItem,
  ContactPhoneItem,
  ContactEmailItem,
  ContactAddressItem,
} from "./domain/contact.type";
