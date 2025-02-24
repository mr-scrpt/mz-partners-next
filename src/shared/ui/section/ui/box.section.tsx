import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionTopology } from "../domain/topology.type";
import { SECTION_TO_CLASS } from "./style/section.map";
import sSection from "./style/section.module.scss";
import { useSectionStyle } from "./style/useSectionStyle";

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

  const { cTopology, cSection } = useSectionStyle();
  const clsSection = clsx(cSection.base, className);

  const clsRow = clsx(cTopology.base, [cTopology.options[topology]]);
  const clsBox = clsx(cTopology.options.ROW_FLAT, boxClassName);

  const content = (
    <>
      {headerSlot && (
        <div className={cSection.options.HEADER}>{headerSlot}</div>
      )}
      {children}
      {footerSlot && (
        <div className={cSection.options.FOOTER}>{footerSlot}</div>
      )}
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
