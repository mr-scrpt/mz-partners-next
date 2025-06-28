import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import sSocialLineLayout from "./socialLine.layout.module.scss";

interface SocialLineLayoutProps extends HTMLAttributes<HTMLDivElement> {
  SocialSlot: ReactNode;
}

export const SocialLineLayout: FC<SocialLineLayoutProps> = (props) => {
  const { SocialSlot, className } = props;
  return (
    <RowSection
      classSection={clsx(sSocialLineLayout.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.INDENTED}
    >
      <div className={clsx(sSocialLineLayout.inner)}>
        <div className={sSocialLineLayout.content}>{SocialSlot}</div>
      </div>
    </RowSection>
  );
};
