import { FC, HTMLAttributes } from "react";
import { useContactAddressList } from "@/entity/contact";
import { AddressListContact } from "../component/addressList/addressList.contact";
import { ItemAddressContact } from "../component/addressList/item/addressItem.contact";

interface AddressListContactComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const AddressListContactCompose: FC<AddressListContactComposeProps> = (
  props,
) => {
  return (
    <AddressListContact
      getDataList={useContactAddressList}
      ItemComponent={ItemAddressContact}
      {...props}
    />
  );
};
