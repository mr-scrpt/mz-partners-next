"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import Link from "next/link";
import { AdditionalListItem } from "../../vm/useAdditionalList";
import sItem from "./additionalItem.module.scss";

interface AdditionalItemProps extends HTMLAttributes<HTMLDivElement> {
  item: AdditionalListItem;
}

export const AdditionalItem: FC<AdditionalItemProps> = (props) => {
  const { className, item } = props;
  const { value, link, title } = item;

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={sItem.inner}>
        <span className={sItem.title}>{title}: </span>{" "}
        <span className={sItem.value}>
          <Link href={link}>{value}</Link>
        </span>
      </div>
    </div>
  );
};
