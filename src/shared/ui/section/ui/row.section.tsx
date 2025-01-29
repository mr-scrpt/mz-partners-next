import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionTopology } from "../domain/topology.type";
import { section_class } from "./style/section.map";
import sSection from "./style/section.module.scss";

interface RowSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}

export const RowSection: FC<RowSectionProps> = (props) => {
  const { children, className, topology, headerSlot, footerSlot } = props;
  const clsSection = clsx(sSection.section, className);
  const clsRow = clsx(sSection.row, [section_class.topology[topology]]);
  return (
    <section className={clsSection}>
      <div className={clsRow}>
        {headerSlot && <div className={sSection.header}>{headerSlot}</div>}
        {children}
        {footerSlot && <div className={sSection.footer}>{footerSlot}</div>}
      </div>
    </section>
  );
};
