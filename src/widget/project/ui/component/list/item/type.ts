import { ProjectItem } from "@/entity/project";
import { HTMLAttributes } from "react";

export interface ItemProjectProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: ProjectItem;
}
