import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sConceptHeader from "./concept.header.module.scss";
import { useTranslations } from "next-intl";
import { CONCEPT_NAMESPACE } from "../../domain/concept.dict";
interface ConceptHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ConceptHeader: FC<ConceptHeaderProps> = (props) => {
  const { className } = props;
  const t = useTranslations(CONCEPT_NAMESPACE);
  return (
    <div className={clsx(sConceptHeader.root, className)}>
      <div className={sConceptHeader.inner}>
        <TitleSection
          position="LEFT"
          text={t("title")}
          size="L"
          view="PRIMARY"
          className={sConceptHeader.title}
        />
      </div>
    </div>
  );
};
