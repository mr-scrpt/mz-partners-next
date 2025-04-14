import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sConceptLayout from "./concept.layout.module.scss";
import clsx from "clsx";

interface ConceptLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const ConceptLayout: FC<ConceptLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      className={clsx(sConceptLayout.root, className)}
      headerSlot={HeaderSlot}
    >
      <div className={sConceptLayout.inner}>
        <div className={sConceptLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
