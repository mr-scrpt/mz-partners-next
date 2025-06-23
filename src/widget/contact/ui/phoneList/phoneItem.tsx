"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { ContactPhoneItem } from "@/entity/contact";
import sItem from "./phoneItem.module.scss";

interface PhoneItemProps extends HTMLAttributes<HTMLDivElement> {
  item: ContactPhoneItem;
}

export const PhoneItem: FC<PhoneItemProps> = (props) => {
  const { className, item } = props;
  const { value } = item;

  return <div className={clsx(sItem.root, className)}>{value}</div>;
};
