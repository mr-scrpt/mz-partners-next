import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderProject from "./header.project.module.scss";
import { useTranslations } from "next-intl";
import { PROJECT_NAMESPACE } from "../../../domain/project.dict";

interface HeaderProjectProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderProject: FC<HeaderProjectProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PROJECT_NAMESPACE);
  return (
    <div className={clsx(sHeaderProject.root, className)}>
      <div className={sHeaderProject.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderProject.title}
        />
      </div>
    </div>
  );
};
