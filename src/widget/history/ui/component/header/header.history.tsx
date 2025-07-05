import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderHistory from "./header.history.module.scss";
import { useTranslations } from "next-intl";
import { HISTORY_NAMESPACE } from "../../../domain/history.dict";

interface HeaderHistoryProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderHistory: FC<HeaderHistoryProps> = (props) => {
  const { className } = props;
  const t = useTranslations(HISTORY_NAMESPACE);
  return (
    <div className={clsx(sHeaderHistory.root, className)}>
      <div className={sHeaderHistory.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderHistory.title}
        />
      </div>
    </div>
  );
};
