import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sHeaderBenefit from "./header.benefit.module.scss";
import { useTranslations } from "next-intl";
import { BENEFIT_NAMESPACE } from "../../../domain/benefit.dict";

interface HeaderBenefitProps extends HTMLAttributes<HTMLDivElement> {}

export const HeaderBenefit: FC<HeaderBenefitProps> = (props) => {
  const { className } = props;
  const t = useTranslations(BENEFIT_NAMESPACE);
  return (
    <div className={clsx(sHeaderBenefit.root, className)}>
      <div className={sHeaderBenefit.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sHeaderBenefit.title}
        />
      </div>
    </div>
  );
};
