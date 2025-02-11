import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionTopology } from "../domain/topology.type";
import { section_class } from "./style/section.map";
import sSection from "./style/section.module.scss";

interface BoxSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionTopology;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  boxClassName?: string;
  withRowContainer?: boolean;
}

export const BoxSection: FC<BoxSectionProps> = (props) => {
  const {
    children,
    className,
    boxClassName,
    topology,
    headerSlot,
    footerSlot,
    withRowContainer = true,
  } = props;
  const clsSection = clsx(sSection.section, className);
  const clsRow = clsx(sSection.row, [section_class.topology[topology]]);
  const clsBox = clsx(sSection.rowFlat, boxClassName);

  const content = (
    <>
      {headerSlot && <div className={sSection.header}>{headerSlot}</div>}
      {children}
      {footerSlot && <div className={sSection.footer}>{footerSlot}</div>}
    </>
  );

  const row = withRowContainer ? (
    <div className={clsRow}>{content}</div>
  ) : (
    content
  );

  return (
    <section className={clsSection}>
      <div className={clsBox}>{row}</div>
    </section>
  );
};
