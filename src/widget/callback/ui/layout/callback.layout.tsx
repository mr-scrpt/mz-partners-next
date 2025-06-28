import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sCallbackLayout from "./callback.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface CallbackLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
  AttentionSlot: ReactNode;
}

export const CallbackLayout: FC<CallbackLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot, AttentionSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sCallbackLayout.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sCallbackLayout.inner)}>
        <div className={sCallbackLayout.content}>
          <div className={sCallbackLayout.attention}>{AttentionSlot}</div>
          <div className={sCallbackLayout.form}>{ContentSlot}</div>
        </div>
      </div>
    </RowSection>
  );
};
