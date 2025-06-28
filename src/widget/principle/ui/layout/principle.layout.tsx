import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPrincipleLayout from "./principle.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface PrincipleLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const PrincipleLayout: FC<PrincipleLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sPrincipleLayout.root, className)}
      classInner={sDeco.mainBG}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      headerSlot={HeaderSlot}
    >
      <div className={clsx(sPrincipleLayout.inner)}>
        <div className={sPrincipleLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
