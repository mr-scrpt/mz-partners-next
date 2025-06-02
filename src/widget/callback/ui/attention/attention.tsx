import { useTranslations } from "next-intl";
import { FC, HTMLAttributes } from "react";
import {
  CALLBACK_WIDGET_DICT_FIELD,
  CALLBACK_WIDGET_NAMESPACE,
} from "../../domain/callback.dict";
import clsx from "clsx";
import sAttention from "./attention.module.scss";

interface AttentionProps extends HTMLAttributes<HTMLDivElement> {}

export const Attention: FC<AttentionProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CALLBACK_WIDGET_NAMESPACE);
  return (
    <div className={clsx(sAttention.root, className)}>
      <div className={sAttention.inner}>
        <span className={sAttention.text}>
          {t(CALLBACK_WIDGET_DICT_FIELD.attention)}
        </span>
      </div>
    </div>
  );
};
