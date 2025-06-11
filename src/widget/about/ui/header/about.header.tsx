import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sAboutHeader from "./about.header.module.scss";
import { useTranslations } from "next-intl";

import { ABOUT_NAMESPACE } from "../../domain/about.dict";

interface AboutHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutHeader: FC<AboutHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(ABOUT_NAMESPACE);
  return (
    <div className={clsx(sAboutHeader.root, className)}>
      <div className={sAboutHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sAboutHeader.title}
        />
      </div>
    </div>
  );
};
