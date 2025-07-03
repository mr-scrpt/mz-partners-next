import { TeamItem } from "@/entity/team";
import { HTMLAttributes } from "react";

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: TeamItem;
}
