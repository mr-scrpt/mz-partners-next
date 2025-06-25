import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";

import { SectionSpace } from "../domain/space.type";
import { SectionWidth } from "../domain/topology.type";
import { useSectionStyle } from "./style/useSectionStyle";

interface BoxSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionWidth;
  space: SectionSpace;
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
    space,
    headerSlot,
    footerSlot,
    withRowContainer = true,
  } = props;

  const { cWidth, cSection, cSpace } = useSectionStyle();
  const clsSection = clsx(cSection.base, className);

  const clsInner = clsx(cWidth.base, cSpace.base, [
    cWidth.options[topology],
    cSpace.options[space],
  ]);

  const clsBox = clsx(cWidth.options.ROW_CONTAINER, boxClassName);

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
    <div className={clsInner}>{content}</div>
  ) : (
    content
  );

  return (
    <section className={clsSection}>
      <div className={clsBox}>{row}</div>
    </section>
  );
};
