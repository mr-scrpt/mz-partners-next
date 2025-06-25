import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { SectionWidth } from "../domain/topology.type";
import { useSectionStyle } from "./style/useSectionStyle";

interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionWidth;
}

export const HeaderSection: FC<HeaderSectionProps> = (props) => {
  const { children, className, topology } = props;
  const { cWidth, cSection } = useSectionStyle();

  const clsHeader = clsx(cSection.base, className);
  const clsInner = clsx(cWidth.base, [cWidth.options[topology]]);

  return (
    <header className={clsHeader}>
      <div className={clsInner}>{children}</div>
    </header>
  );
};
