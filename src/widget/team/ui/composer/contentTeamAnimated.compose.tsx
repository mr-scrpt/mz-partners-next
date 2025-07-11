import { FC, HTMLAttributes } from "react";
import { ContentTeam } from "../component/content/content.team";
import { TextTeamAnimated } from "../component/text";
import { ListTeamAnimatedCompose } from "./listTeamAnimated.compose";

interface ContentTeamAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentTeamAnimatedCompose: FC<ContentTeamAnimatedComposeProps> = (
  props,
) => {
  return (
    <ContentTeam
      TextComponent={TextTeamAnimated}
      ListComponent={ListTeamAnimatedCompose}
      {...props}
    />
  );
};
