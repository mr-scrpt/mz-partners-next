import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sBenefitHeader from "./benefit.header.module.scss";
import { useTranslations } from "next-intl";
import { BENEFIT_NAMESPACE } from "../../domain/benefit.dict";
interface BenefitHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const BenefitHeader: FC<BenefitHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(BENEFIT_NAMESPACE);
  return (
    <div className={clsx(sBenefitHeader.root, className)}>
      <div className={sBenefitHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sBenefitHeader.title}
        />
      </div>
    </div>
  );
};
