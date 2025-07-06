import { FC, HTMLAttributes } from "react";
import sPromoContact from "./promo.contact.module.scss";
import clsx from "clsx";
import { Icon } from "@/shared/ui/icon";
import Link from "next/link";
import { GetPromoData } from "./type";

interface PromoContactProps extends HTMLAttributes<HTMLDivElement> {
  getData: GetPromoData;
}

export const PromoContact: FC<PromoContactProps> = (props) => {
  const { className, getData } = props;
  const { promoData } = getData();
  const { slogan, link, text, name } = promoData;
  return (
    <div className={clsx(sPromoContact.root, className)}>
      <div className={sPromoContact.inner}>
        <div className={sPromoContact.iconBox}>
          <Icon icon="LECKSIS" className={sPromoContact.icon} />
        </div>
        <div className={sPromoContact.sloganBox}>
          <div className={sPromoContact.slogan}>{slogan}</div>
          <div className={sPromoContact.link}>
            <span className={sPromoContact.text}>{text} </span>
            <Link href={link}>{name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
