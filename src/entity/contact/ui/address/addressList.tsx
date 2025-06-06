import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import sAddressList from "./addressList.module.scss";
import {
  ContactAddressItem,
  AddressItemProps,
} from "../../domain/contact.type";

interface AddressListProps extends HTMLAttributes<HTMLDivElement> {
  addressList: ContactAddressItem[];
  ItemComponent: ComponentType<AddressItemProps>;
}

export const AddressList: FC<AddressListProps> = (props) => {
  const { className, addressList, ItemComponent } = props;
  return (
    <div className={clsx(className, sAddressList.root)}>
      <ul className={sAddressList.list}>
        {addressList.map((p) => (
          <ItemComponent
            addressData={p}
            key={p.value}
            className={sAddressList.item}
          />
        ))}
      </ul>
    </div>
  );
};
