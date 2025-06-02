import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { SectionTopology } from "../domain/topology.type";
import { useSectionStyle } from "./style/useSectionStyle";

interface FooterSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
  classNameRow?: string;
}

export const FooterSection: FC<FooterSectionProps> = (props) => {
  const { children, className, topology, classNameRow } = props;
  const { cTopology, cSection } = useSectionStyle();

  const clsFooter = clsx(cSection.base, className);
  const clsInner = clsx(cTopology.base, classNameRow, [
    cTopology.options[topology],
  ]);

  return (
    <footer className={clsFooter}>
      <div className={clsInner}>{children}</div>
    </footer>
  );
};
