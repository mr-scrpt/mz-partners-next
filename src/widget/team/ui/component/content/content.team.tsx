import clsx from "clsx";
import { ComponentType, FC, HTMLAttributes } from "react";

import sContentTeam from "./content.team.module.scss";
import sDeco from "./deco.module.scss";

interface ContentTeamProps extends HTMLAttributes<HTMLDivElement> {
  TextComponent: ComponentType<HTMLAttributes<HTMLDivElement>>;
  ListComponent: ComponentType<HTMLAttributes<HTMLDivElement>>;
}

export const ContentTeam: FC<ContentTeamProps> = (props) => {
  const { TextComponent, ListComponent, className } = props;
  return (
    <div className={clsx(sContentTeam.root, className)}>
      <div className={sContentTeam.inner}>
        <TextComponent className={clsx(sDeco.textBG, sContentTeam.text)} />
        <ListComponent className={sContentTeam.list} />
      </div>
    </div>
  );
};
