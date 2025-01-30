import { FC, HTMLAttributes } from "react";

import sAction from "./action.module.scss";
import { LangSwitcher } from "@/shared/ui/langSwitcher";
interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <LangSwitcher />
      </div>
    </div>
  );
};
