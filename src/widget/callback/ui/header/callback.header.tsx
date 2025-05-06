import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sCallbackHeader from "./callback.header.module.scss";
import { useTranslations } from "next-intl";
import { CALLBACK_WIDGET_NAMESPACE } from "../../domain/callback.dict";
interface CallbackHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CallbackHeader: FC<CallbackHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CALLBACK_WIDGET_NAMESPACE);
  return (
    <div className={clsx(sCallbackHeader.root, className)}>
      <div className={sCallbackHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY_INVERTED"
          className={sCallbackHeader.title}
        />
      </div>
    </div>
  );
};
