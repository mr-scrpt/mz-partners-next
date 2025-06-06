import { FC, HTMLAttributes } from "react";
import { AddressList } from "./address/addressList";
import { AddressItem } from "./address/addressItem";
import { useContactAddressList } from "../vm/useContactAddressList.model";

interface AddressListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AddressListModule: FC<AddressListModuleProps> = (props) => {
  const { className } = props;
  const { addressList } = useContactAddressList();
  return (
    <AddressList
      className={className}
      addressList={addressList}
      ItemComponent={AddressItem}
    />
  );
};
