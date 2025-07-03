import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderCompetency from "./header.competency.module.scss";
import { useTranslations } from "next-intl";
import { COMPETENCY_NAMESPACE } from "@/widget/competency";

interface HeaderCompetencyProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderCompetency: FC<HeaderCompetencyProps> = (props) => {
  const { className } = props;
  const t = useTranslations(COMPETENCY_NAMESPACE);
  return (
    <div className={clsx(sHeaderCompetency.root, className)}>
      <div className={sHeaderCompetency.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderCompetency.title}
        />
      </div>
    </div>
  );
};
