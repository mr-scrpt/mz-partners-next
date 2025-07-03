import { PrincipleItem } from "@/entity/principle";
import { HTMLAttributes } from "react";

export interface ItemPrincipleProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: PrincipleItem;
}
