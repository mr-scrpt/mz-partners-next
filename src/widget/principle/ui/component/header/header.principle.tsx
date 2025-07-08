import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderPrinciple from "./header.principle.module.scss";
import { useTranslations } from "next-intl";
import { PRINCIPLE_NAMESPACE } from "../../../domain/principle.dict";

interface HeaderPrincipleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderPrinciple: FC<HeaderPrincipleProps> = (props) => {
  const { className } = props;
  const t = useTranslations(PRINCIPLE_NAMESPACE);
  return (
    <div className={clsx(sHeaderPrinciple.root, className)}>
      <div className={sHeaderPrinciple.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY_INVERTED"
          className={sHeaderPrinciple.title}
        />
      </div>
    </div>
  );
};
