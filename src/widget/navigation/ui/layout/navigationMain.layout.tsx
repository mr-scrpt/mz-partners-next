import { RowSection } from "@/shared/ui/section/ui/row.section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sNavigationMainLayout from "./navigationMain.layout.module.scss";
import clsx from "clsx";

interface NavigationMainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  MenuSlost: ReactNode;
}

export const NavigationMainLayout: FC<NavigationMainLayoutProps> = (props) => {
  const { className, MenuSlost } = props;

  return (
    <RowSection
      topology="ROW_CONTAINER"
      className={clsx(sNavigationMainLayout.root, className)}
    >
      <div className={sNavigationMainLayout.inner}>
        <div className={sNavigationMainLayout.menu}>{MenuSlost}</div>
      </div>
    </RowSection>
  );
};
