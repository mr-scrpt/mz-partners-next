import { FC, HTMLAttributes } from "react";

import { CallbackButton } from "@/feature/callback";
import { LangSwitcher } from "@/shared/ui/langSwitcher";
import sAction from "./action.module.scss";
interface ActionProps extends HTMLAttributes<HTMLDivElement> {}

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <LangSwitcher />
        <CallbackButton />
      </div>
    </div>
  );
};
