import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderTeam from "./header.team.module.scss";
import { useTranslations } from "next-intl";
import { TEAM_NAMESPACE } from "@/widget/team";

interface HeaderTeamProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderTeam: FC<HeaderTeamProps> = (props) => {
  const { className } = props;
  const t = useTranslations(TEAM_NAMESPACE);
  return (
    <div className={clsx(sHeaderTeam.root, className)}>
      <div className={sHeaderTeam.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderTeam.title}
        />
      </div>
    </div>
  );
};
