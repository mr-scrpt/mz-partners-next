"use client";
import clsx from "clsx";
import { FC } from "react";

import sItemAddressContact from "./addressItem.contact.module.scss";
import { ItemAddressContactProps } from "../type";

export const ItemAddressContact: FC<ItemAddressContactProps> = (props) => {
  const { className, item } = props;
  const { value } = item;

  return (
    <div className={clsx(sItemAddressContact.root, className)}>{value}</div>
  );
};
