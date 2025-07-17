import clsx from "clsx";
import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

import { SectionWidth } from "../domain/topology.type";
import sSection from "./style/section.module.scss";
import { useSectionStyle } from "./style/useSectionStyle";
import { SectionSpace } from "../domain/space.type";

interface RowSectionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  width: SectionWidth;
  space: SectionSpace;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  classSection?: string;
  classInner?: string;
  classContent?: string;
  as?: ElementType;
}

export const RowSection: FC<RowSectionProps> = (props) => {
  const {
    children,
    classSection,
    width,
    space,
    headerSlot,
    footerSlot,
    classInner,
    as: Component = "div",
    ...rest
  } = props;
  const { cWidth, cSection, cSpace } = useSectionStyle();

  const clsSection = clsx(cSection.base, classSection);

  const clsInner = clsx(cWidth.base, [
    sSection.section__inner,
    classInner,
    cWidth.options[width],
    cSpace.options[space],
  ]);

  return (
    <Component className={clsSection} {...rest}>
      <div className={clsInner}>
        {headerSlot && (
          <div className={sSection.section__header}>{headerSlot}</div>
        )}
        <div className={sSection.section__content}>{children}</div>
        {footerSlot && (
          <div className={sSection.section__footer}>{footerSlot}</div>
        )}
      </div>
    </Component>
  );
};
