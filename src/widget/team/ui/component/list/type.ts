import { TeamItem } from "@/entity/team";
import { HTMLAttributes } from "react";

export interface ItemTeamProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: TeamItem;
}
