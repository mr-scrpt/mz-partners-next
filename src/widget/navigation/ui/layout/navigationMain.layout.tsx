import { FC, HTMLAttributes, ReactNode } from "react";
import sNavigationMainLayout from "./navigationMain.layout.module.scss";
import clsx from "clsx";
import { SECTION_WIDTH, RowSection, SECTION_SPACE } from "@/shared/ui/section";

interface NavigationMainLayoutProps extends HTMLAttributes<HTMLDivElement> {
  MenuSlost: ReactNode;
}

export const NavigationMainLayout: FC<NavigationMainLayoutProps> = (props) => {
  const { className, MenuSlost } = props;

  return (
    <RowSection
      classSection={clsx(sNavigationMainLayout.root, className)}
      width={SECTION_WIDTH.CONTAINER_INDENTED}
      space={SECTION_SPACE.INDENTED}
    >
      <div className={sNavigationMainLayout.inner}>
        <div className={sNavigationMainLayout.menu}>{MenuSlost}</div>
      </div>
    </RowSection>
  );
};
