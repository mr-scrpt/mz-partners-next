"use client";
import { useContactIconList } from "@/entity/contact";
import { Icon } from "@/shared/ui/icon";
import clsx from "clsx";
import Link from "next/dist/client/link";
import { FC, HTMLAttributes } from "react";
import sSocialList from "./socialList.module.scss";

interface SocialListProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialList: FC<SocialListProps> = (props) => {
  const { className } = props;
  const { contactSocilaIconList } = useContactIconList();
  const clsRoot = clsx(sSocialList.root, className);
  return (
    <div className={clsRoot} {...props}>
      <div className={sSocialList.inner}>
        <div className={clsx(sSocialList.list)}>
          {contactSocilaIconList.map((item) => (
            <Link
              href={item.link}
              className={sSocialList.link}
              key={item.value}
            >
              <Icon icon={item.icon} className={sSocialList.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
