"use client";
import clsx from "clsx";
import { FC } from "react";

import sItemContact from "./phoneItem.contact.module.scss";
import { PhonteItemContactProps } from "../type";

export const PhoneItemContact: FC<PhonteItemContactProps> = (props) => {
  const { className, item } = props;
  const { value } = item;

  return <div className={clsx(sItemContact.root, className)}>{value}</div>;
};
