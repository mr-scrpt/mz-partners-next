"use client";
import { FC, HTMLAttributes } from "react";
import { TeamHeader } from "./header/team.header";
import { TeamLayout } from "./layout/team.layout";
import { AnimatedItem, AnimatedList } from "./list/animationList";

interface TeamModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamModule: FC<TeamModuleProps> = (props) => {
  const { className } = props;
  return (
    <TeamLayout
      HeaderSlot={<TeamHeader />}
      ContentSlot={<AnimatedList ItemComponent={AnimatedItem} />}
      className={className}
    />
  );
};
