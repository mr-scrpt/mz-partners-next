import { FC, HTMLAttributes } from "react";
import { ContentTeam } from "../component/content/content.team";
import { ListTeamAnimatedCompose } from "./listTeamAnimated.compose";
import { TextTeamAnimatedCompose } from "./textTeamAnimated.compose";

interface ContentTeamAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentTeamAnimatedCompose: FC<ContentTeamAnimatedComposeProps> = (
  props,
) => {
  return (
    <ContentTeam
      TextComponent={TextTeamAnimatedCompose}
      ListComponent={ListTeamAnimatedCompose}
      {...props}
    />
  );
};
