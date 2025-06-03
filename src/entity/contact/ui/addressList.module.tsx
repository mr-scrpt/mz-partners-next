import { AddressList, AddressItem } from "@/shared/ui/address";
import { FC, HTMLAttributes } from "react";

interface AddressListModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AddressListModule: FC<AddressListModuleProps> = (props) => {
  const { className } = props;
  return (
    <AddressList
      className={className}
      addressList={["+38 (099) 000-00-00", "+38 (066) 000-00-00"]}
      ItemComponent={AddressItem}
    />
  );
};
