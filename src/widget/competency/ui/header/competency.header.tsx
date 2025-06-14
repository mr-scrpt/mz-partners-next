import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sCompetencyHeader from "./competency.header.module.scss";
import { useTranslations } from "next-intl";
import { COMPETENCY_NAMESPACE } from "../../domain/competency.dict";
interface CompetencyHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CompetencyHeader: FC<CompetencyHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(COMPETENCY_NAMESPACE);
  return (
    <div className={clsx(sCompetencyHeader.root, className)}>
      <div className={sCompetencyHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sCompetencyHeader.title}
        />
      </div>
    </div>
  );
};
