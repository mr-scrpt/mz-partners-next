import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderPipline from "./header.pipline.module.scss";
import { useTranslations } from "next-intl";
import { PIPLINE_NAMESPACE } from "@/widget/pipline/domain/pipline.dict";

interface HeaderPiplineProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderPipline: FC<HeaderPiplineProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PIPLINE_NAMESPACE);
  return (
    <div className={clsx(sHeaderPipline.root, className)}>
      <div className={sHeaderPipline.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY_INVERTED"
          className={sHeaderPipline.title}
        />
      </div>
    </div>
  );
};
