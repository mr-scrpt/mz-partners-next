import { TeamItem } from "@/entity/team";
import { ComponentProps, ComponentType, HTMLAttributes } from "react";

// export interface ItemTeamProps extends HTMLAttributes<HTMLDivElement> {
//   idx: number;
//   item: TeamItem;
// }

// export type ItemTeamProps = ComponentType<"div"> & {
//   idx: number;
//   item: TeamItem;
// };

export type ItemTeamProps = ComponentProps<"div"> & {
  item: TeamItem;
  idx: number;
};
