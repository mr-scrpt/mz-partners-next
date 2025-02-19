import { TitleSection } from "@/shared/ui/titleSection";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sConceptHeader from "./concept.header.module.scss";
interface ConceptHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ConceptHeader: FC<ConceptHeaderProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(sConceptHeader.root, className)}>
      <div className={sConceptHeader.inner}>
        <TitleSection
          position="LEFT"
          text="Concept"
          size="L"
          view="PRIMARY"
          className={sConceptHeader.title}
        />
      </div>
    </div>
  );
};
