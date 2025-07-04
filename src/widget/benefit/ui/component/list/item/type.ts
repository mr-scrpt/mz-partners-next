import { BenefitItem } from "@/entity/benefit";
import { HTMLAttributes } from "react";

export interface ItemBenefitProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: BenefitItem;
}
