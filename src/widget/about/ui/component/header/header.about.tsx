import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderAbout from "./header.about.module.scss";
import { useTranslations } from "next-intl";
import { ABOUT_NAMESPACE } from "../../../domain/about.dict";

interface HeaderAboutProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderAbout: FC<HeaderAboutProps> = (props) => {
  const { className } = props;
  const t = useTranslations(ABOUT_NAMESPACE);
  return (
    <div className={clsx(sHeaderAbout.root, className)}>
      <div className={sHeaderAbout.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderAbout.title}
        />
      </div>
    </div>
  );
};
