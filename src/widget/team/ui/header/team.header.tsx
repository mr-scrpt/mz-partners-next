import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sTeamHeader from "./team.header.module.scss";
import { useTranslations } from "next-intl";
import { TEAM_NAMESPACE } from "../../domain/team.dict";
interface TeamHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamHeader: FC<TeamHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(TEAM_NAMESPACE);
  return (
    <div className={clsx(sTeamHeader.root, className)}>
      <div className={sTeamHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sTeamHeader.title}
        />
      </div>
    </div>
  );
};
