import { FC, HTMLAttributes } from "react";
import sPromo from "./promo.module.scss";
import clsx from "clsx";
import { usePromo } from "../../vm/usePromo";
import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
interface PromoProps extends HTMLAttributes<HTMLDivElement> {}

export const Promo: FC<PromoProps> = (props) => {
  const { className } = props;
  const { promo } = usePromo();
  const { slogan, link, text, name } = promo;
  return (
    <div className={clsx(sPromo.root, className)}>
      <div className={sPromo.inner}>
        <div className={sPromo.iconBox}>
          <Icon icon="LECKSIS" className={sPromo.icon} />
        </div>
        <div className={sPromo.sloganBox}>
          <div className={sPromo.slogan}>{slogan}</div>
          <div className={sPromo.link}>
            <span className={sPromo.text}>{text} </span>
            <Link href={link}>{name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
