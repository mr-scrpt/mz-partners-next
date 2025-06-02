import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionTopology } from "../domain/topology.type";
import sSection from "./style/section.module.scss";
import { useSectionStyle } from "./style/useSectionStyle";
import { SectionSpace } from "../domain/space.type";

interface RowSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
  space: SectionSpace;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  classNameRow?: string;
}

export const RowSection: FC<RowSectionProps> = (props) => {
  const {
    children,
    className,
    topology,
    space,
    headerSlot,
    footerSlot,
    classNameRow,
  } = props;
  const { cTopology, cSection, cSpace } = useSectionStyle();

  const clsSection = clsx(cSection.base, className);
  const clsInner = clsx(cTopology.base, classNameRow, [
    cTopology.options[topology],
    cSpace.options[space],
  ]);

  return (
    <section className={clsSection}>
      <div className={clsInner}>
        {headerSlot && (
          <div className={sSection.section__header}>{headerSlot}</div>
        )}
        {children}
        {footerSlot && (
          <div className={sSection.section__footer}>{footerSlot}</div>
        )}
      </div>
    </section>
  );
};
