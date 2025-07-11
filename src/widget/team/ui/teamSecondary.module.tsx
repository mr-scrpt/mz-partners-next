import { FC, HTMLAttributes } from "react";
import { HeaderTeam } from "./component/header/header.team";
import { LayoutTeam } from "./component/layout/layout.team";
import { ContentTeamAnimatedCompose } from "./composer/contentTeamAnimated.compose";

interface TeamModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamSecondaryModule: FC<TeamModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutTeam
      HeaderSlot={<HeaderTeam />}
      ContentSlot={<ContentTeamAnimatedCompose />}
      className={className}
    />
  );
};
