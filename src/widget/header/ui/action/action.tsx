import { FC, HTMLAttributes } from "react";

import sAction from "./action.module.scss";
import { LangSwitcher } from "@/shared/ui/langSwitcher";
import { Button } from "@/shared/ui/button";
interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <LangSwitcher />
        <Button size="l">Зворотній зв'язок</Button>
      </div>
    </div>
  );
};
