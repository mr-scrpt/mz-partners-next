import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sBreadcrumbsLayout from "./breadcrumbs.layout.module.scss";
import clsx from "clsx";

interface BreadcrumbsLayoutProps extends HTMLAttributes<HTMLDivElement> {
  ContentSlot: ReactNode;
}

export const BreadcrumbsLayout: FC<BreadcrumbsLayoutProps> = (props) => {
  const { ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sBreadcrumbsLayout.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.SECONDARY}
    >
      <div className={sBreadcrumbsLayout.inner}>
        <div className={sBreadcrumbsLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
