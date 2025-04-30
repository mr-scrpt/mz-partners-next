import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sPiplineHeader from "./pipline.header.module.scss";
import { useTranslations } from "next-intl";
import { PIPLINE_NAMESPACE } from "../../domain/pipline.dict";
interface PiplineHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const PiplineHeader: FC<PiplineHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PIPLINE_NAMESPACE);
  return (
    <div className={clsx(sPiplineHeader.root, className)}>
      <div className={sPiplineHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sPiplineHeader.title}
        />
      </div>
    </div>
  );
};
