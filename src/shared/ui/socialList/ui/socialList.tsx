import { FC, HTMLAttributes } from "react";
import { useSocialItemList } from "../vm/useMenuItemList.model";
import clsx from "clsx";
import sSocialList from "./socialList.module.scss";
import { Icon } from "../../icon";
import Link from "next/dist/client/link";

interface SocialListProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialList: FC<SocialListProps> = (props) => {
  const { className } = props;
  const { menuItemList } = useSocialItemList();

  const clsRoot = clsx(sSocialList.root, className);
  return (
    <div className={clsx(sSocialList.root, className)} {...props}>
      <div className={sSocialList.inner}>
        <div className={clsx(sSocialList.list)}>
          {menuItemList.map((item) => (
            <Link href={item.link} className={sSocialList.link} key={item.id}>
              <Icon icon={item.icon} className={sSocialList.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
