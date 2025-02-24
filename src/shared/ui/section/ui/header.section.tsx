import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { SectionTopology } from "../domain/topology.type";
import { useSectionStyle } from "./style/useSectionStyle";

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
}

export const HeaderSection: FC<HeaderSectionProps> = (props) => {
  const { children, className, topology } = props;
  const { cTopology, cSection } = useSectionStyle();

  const clsHeader = clsx(cSection.base, className);
  const clsRow = clsx(cTopology.base, [cTopology.options[topology]]);

  return (
    <header className={clsHeader}>
      <div className={clsRow}>{children}</div>
    </header>
  );
};
