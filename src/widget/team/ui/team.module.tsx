// "use client";
import { FC, HTMLAttributes } from "react";
import { LayoutTeam } from "./component/layout/layout.team";
import { HeaderTeam } from "./component/header/header.team";
import { ListTeamAnimatedCompose } from "./composer/listTeamAnimated.compose";

interface TeamModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamModule: FC<TeamModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutTeam
      HeaderSlot={<HeaderTeam />}
      ContentSlot={<ListTeamAnimatedCompose />}
      className={className}
    />
  );
};
