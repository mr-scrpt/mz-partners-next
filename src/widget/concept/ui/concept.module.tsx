import { FC, HTMLAttributes } from "react";
import { ConceptLayout } from "./layout/concept.layout";
import { ConceptHeader } from "./header/concept.header";
interface ConceptModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const ConceptModule: FC<ConceptModuleProps> = (props) => {
  return <ConceptLayout HeaderSlot={<ConceptHeader />} />;
};
