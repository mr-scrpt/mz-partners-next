import { FC, HTMLAttributes } from "react";
import { AddressListContact } from "../addressList.contact";
import { useContactAddressList } from "@/entity/contact";
import { ItemAddressContact } from "../item/addressItem.contact";

interface AddressListComposeContactProps
  extends HTMLAttributes<HTMLDivElement> {}

export const AddressListComposeContact: FC<AddressListComposeContactProps> = (
  props,
) => {
  const { className } = props;
  return (
    <AddressListContact
      {...props}
      getDataList={useContactAddressList}
      ItemComponent={ItemAddressContact}
      className={className}
    />
  );
};
