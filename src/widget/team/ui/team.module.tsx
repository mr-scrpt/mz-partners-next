"use client";
import { FC, HTMLAttributes } from "react";
import { TeamHeader } from "./component/header/team.header";
import { TeamLayout } from "./component/layout/team.layout";
import { TeamListAnimatedCompose } from "./composer/teamAnimationList.compose";

interface TeamModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamModule: FC<TeamModuleProps> = (props) => {
  const { className } = props;
  return (
    <TeamLayout
      HeaderSlot={<TeamHeader />}
      ContentSlot={<TeamListAnimatedCompose />}
      className={className}
    />
  );
};
