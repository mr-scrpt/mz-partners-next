import { sLayout } from "@/shared/style";
import clsx from "clsx";
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
    <header className={sLayout.section}>
      <div className={clsx(sLayout.container, sHeaderLayout.inner)}>
        <div className={sHeaderLayout.visual}>{VisualSlot}</div>
        <div className={sHeaderLayout.info}>{InfoSlot}</div>
        <div className={sHeaderLayout.action}>{ActionSlot}</div>
      </div>
    </header>
  );
};
