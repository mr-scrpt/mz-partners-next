import { Icon } from "@/shared/ui/icon";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sSocialList from "./socialList.footer.module.scss";
import { useSocialListFooter } from "../../vm/useSocialListFooter";
import Link from "next/link";

interface SocialListFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const SocialListFooter: FC<SocialListFooterProps> = (props) => {
  const { className } = props;
  const clsRoot = clsx(sSocialList.root, className);
  const { socialListFooter } = useSocialListFooter();

  return (
    <div className={clsx(sSocialList.root, className)} {...props}>
      <div className={sSocialList.inner}>
        <div className={clsx(sSocialList.list)}>
          {socialListFooter.map((item) => (
            <Link href={item.link} className={sSocialList.link} key={item.icon}>
              <Icon icon={item.icon} className={sSocialList.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
