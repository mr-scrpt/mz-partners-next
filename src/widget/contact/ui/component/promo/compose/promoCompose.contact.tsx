import { FC, HTMLAttributes } from "react";
import { PromoContact } from "../promo.contact";
import { usePromoContact } from "@/widget/contact/vm/usePromo.contact";

interface PromoComposeContactProps extends HTMLAttributes<HTMLDivElement> {}

export const PromoComposeContact: FC<PromoComposeContactProps> = (props) => {
  return <PromoContact getData={usePromoContact} />;
};
