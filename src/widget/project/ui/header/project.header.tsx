import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sProjectHeader from "./project.header.module.scss";
import { useTranslations } from "next-intl";

import { PROJECT_NAMESPACE } from "../../domain/project.dict";

interface ProjectHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ProjectHeader: FC<ProjectHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PROJECT_NAMESPACE);
  return (
    <div className={clsx(sProjectHeader.root, className)}>
      <div className={sProjectHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sProjectHeader.title}
        />
      </div>
    </div>
  );
};
