import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHistoryHeader from "./history.header.module.scss";
import { useTranslations } from "next-intl";

import { HISTORY_NAMESPACE } from "../../domain/history.dict";

interface HistoryHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const HistoryHeader: FC<HistoryHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(HISTORY_NAMESPACE);
  return (
    <div className={clsx(sHistoryHeader.root, className)}>
      <div className={sHistoryHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHistoryHeader.title}
        />
      </div>
    </div>
  );
};
