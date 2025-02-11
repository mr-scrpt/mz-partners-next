import { FC, HTMLAttributes } from "react";
import { HeroLayout } from "./layout/hero.layout";
import { Description } from "./description/description";

interface HeroModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroModule: FC<HeroModuleProps> = (props) => {
  return (
    <HeroLayout InfoSlot={<Description />} ActionSlot={<div>action</div>} />
  );
};
