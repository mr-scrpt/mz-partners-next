import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";
import sDeco from "./deco.module.scss";
import sHeroLayout from "./hero.layout.module.scss";

interface HeroLayoutProps extends HTMLAttributes<HTMLDivElement> {
  InfoSlot: ReactNode;
  ActionSlot: ReactNode;
}

export const HeroLayout: FC<HeroLayoutProps> = (props) => {
  const { InfoSlot, ActionSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sHeroLayout.root, className)}
      classInner={sDeco.mainBG}
      width={SECTION_WIDTH.CONTAINER_INDENTED}
      space={SECTION_SPACE.INDENTED}
    >
      <div className={clsx(sHeroLayout.inner)}>
        <div className={clsx(sHeroLayout.infoBox, sDeco.infoBG)}>
          <div className={sHeroLayout.info}>{InfoSlot}</div>
          <div className={sHeroLayout.action}>{ActionSlot}</div>
        </div>
      </div>
    </RowSection>
  );
};
