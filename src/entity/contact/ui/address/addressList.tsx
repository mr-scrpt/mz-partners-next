import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import { AddressItemProps, AddressListType } from "../domain/type";
import sAddressList from "./addressList.module.scss";

interface AddressListProps extends HTMLAttributes<HTMLDivElement> {
  addressList: AddressListType;
  ItemComponent: ComponentType<AddressItemProps>;
}

export const AddressList: FC<AddressListProps> = (props) => {
  const { className, addressList, ItemComponent } = props;
  return (
    <div className={clsx(className, sAddressList.root)}>
      <ul className={sAddressList.list}>
        {addressList.map((p) => (
          <ItemComponent address={p} key={p} className={sAddressList.item} />
        ))}
      </ul>
    </div>
  );
};
