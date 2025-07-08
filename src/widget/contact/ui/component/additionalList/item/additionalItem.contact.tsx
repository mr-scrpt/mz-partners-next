"use client";
import clsx from "clsx";
import { FC } from "react";

import Link from "next/link";
import sItemContact from "./additionalItem.contact.module.scss";
import { AdditionalItemContactProps } from "../type";

export const AdditionalItemContact: FC<AdditionalItemContactProps> = (
  props,
) => {
  const { className, item } = props;
  const { link, title, linkTitle } = item;

  return (
    <div className={clsx(sItemContact.root, className)}>
      <div className={sItemContact.inner}>
        <span className={sItemContact.title}>{title}: </span>{" "}
        <span className={sItemContact.value}>
          <Link href={link} target="_blank">
            {linkTitle}
          </Link>
        </span>
      </div>
    </div>
  );
};
