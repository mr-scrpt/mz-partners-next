import { PiplineItem } from "@/entity/pipline";
import { HTMLAttributes } from "react";

export interface ItemPiplineProps extends HTMLAttributes<HTMLDivElement> {
  item: PiplineItem;
}
