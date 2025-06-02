import { FC, HTMLAttributes } from "react";
import { HeroLayout } from "./layout/hero.layout";
import { Description } from "./description/description";
import { Action } from "./action/action";

interface HeroModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroModule: FC<HeroModuleProps> = (props) => {
  return <HeroLayout InfoSlot={<Description />} ActionSlot={<Action />} />;
};
