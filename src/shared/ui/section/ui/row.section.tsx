import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionTopology } from "../domain/topology.type";
import sSection from "./style/section.module.scss";
import { useSectionStyle } from "./style/useSectionStyle";

interface RowSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
}

export const RowSection: FC<RowSectionProps> = (props) => {
  const { children, className, topology, headerSlot, footerSlot } = props;
  const { cTopology, cSection } = useSectionStyle();

  const clsSection = clsx(cSection.base, className);
  const clsRow = clsx(cTopology.base, [cTopology.options[topology]]);

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
