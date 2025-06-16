"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { ContactAddressItem } from "@/entity/contact";
import sItem from "./addressItem.module.scss";

interface AddresItemProps extends HTMLAttributes<HTMLDivElement> {
  item: ContactAddressItem;
}

export const AddressItem: FC<AddresItemProps> = (props) => {
  const { className, item } = props;
  const { value } = item;

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div className={sItem.text}>{value}</div>
      </div>
    </div>
  );
};
