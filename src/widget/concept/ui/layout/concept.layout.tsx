import { RowSection } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sConceptLayout from "./concept.layout.module.scss";

interface ConceptLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
}

export const ConceptLayout: FC<ConceptLayoutProps> = (props) => {
  const { className, HeaderSlot } = props;

  return (
    <RowSection
      topology="ROW_CONTAINER"
      className={className}
      headerSlot={HeaderSlot}
    >
      <div className={sConceptLayout.root}></div>
    </RowSection>
  );
};
