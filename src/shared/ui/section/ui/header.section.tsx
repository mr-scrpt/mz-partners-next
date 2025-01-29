import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { SectionTopology } from "../domain/topology.type";
import { section_class } from "./style/section.map";
import sSection from "./style/section.module.scss";

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
}

export const HeaderSection: FC<HeaderSectionProps> = (props) => {
  const { children, className, topology } = props;
  const clsHeader = clsx(sSection.header, className);
  const clsRow = clsx(sSection.row, [section_class.topology[topology]]);
  return (
    <header className={clsHeader}>
      <div className={clsRow}>{children}</div>
    </header>
  );
};
