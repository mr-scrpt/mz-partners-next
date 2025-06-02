import { HeaderSection } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sHeaderLayout from "./header.layout.module.scss";

interface HeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
  VisualSlot: ReactNode;
  InfoSlot: ReactNode;
  ActionSlot: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const { VisualSlot, InfoSlot, ActionSlot } = props;

  return (
    <HeaderSection topology="ROW_CONTAINER" className={sHeaderLayout.root}>
      <div className={sHeaderLayout.inner}>
        <div className={sHeaderLayout.visual}>{VisualSlot}</div>
        <div className={sHeaderLayout.info}>{InfoSlot}</div>
        <div className={sHeaderLayout.action}>{ActionSlot}</div>
      </div>
    </HeaderSection>
  );
};
