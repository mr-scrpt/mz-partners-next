import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { SectionWidth } from "../domain/topology.type";
import { useSectionStyle } from "./style/useSectionStyle";

interface FooterSectionProps extends HTMLAttributes<HTMLDivElement> {
  topology: SectionWidth;
  classNameRow?: string;
}

export const FooterSection: FC<FooterSectionProps> = (props) => {
  const { children, className, topology, classNameRow } = props;
  const { cWidth, cSection } = useSectionStyle();

  const clsFooter = clsx(cSection.base, className);
  const clsInner = clsx(cWidth.base, classNameRow, [cWidth.options[topology]]);

  return (
    <footer className={clsFooter}>
      <div className={clsInner}>{children}</div>
    </footer>
  );
};
