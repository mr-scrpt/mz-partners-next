import { CompetencyItem } from "@/entity/competency";
import { HTMLAttributes } from "react";

export interface ItemCompetencyProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: CompetencyItem;
}
